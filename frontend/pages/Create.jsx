import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Create() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [bp, setBP] = useState('');
    const [glucose, setGlucose] = useState('');
    const [insulin, setInsulin] = useState('');
    const [bmi, setBMI] = useState('');
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        const newPatient = { name, age, bp, glucose, insulin, bmi };
        fetch("http://localhost:3000/patients", {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newPatient)
        })
        .then(response => {
            if (response.ok) {
                navigate('/Success');
            } else {
                throw new Error('Failed to submit form');
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }

    return (
        <div className="containerCreate">
            <form className="dataForm" onSubmit={handleSubmit}>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="data" placeholder="Enter Patient Name" />
                <input type="text" value={age} onChange={(e) => setAge(e.target.value)} className="data" placeholder="Enter Patient Age" />
                <input type="text" value={bp} onChange={(e) => setBP(e.target.value)} className="data" placeholder="Enter Blood Pressure" />
                <input type="text" value={glucose} onChange={(e) => setGlucose(e.target.value)} className="data" placeholder="Enter Glucose" />
                <input type="text" value={insulin} onChange={(e) => setInsulin(e.target.value)} className="data" placeholder="Enter Insulin" />
                <input type="text" value={bmi} onChange={(e) => setBMI(e.target.value)} className="data" placeholder="Enter BMI" />
                <button type="submit" className="submit">Submit</button>
            </form>
        </div>
    );
}

export default Create;
