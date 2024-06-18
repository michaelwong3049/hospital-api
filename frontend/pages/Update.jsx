import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Update({data, name}){
    console.log({name});
    const n = name;
    const [age, setAge] = useState('');
    const [bp, setBP] = useState('');
    const [glucose, setGlucose] = useState('');
    const [insulin, setInsulin] = useState('');
    const [bmi, setBMI] = useState('');
    let URL = "http://localhost:3000/patients/" + data;
    console.log(URL);
    const navigate = useNavigate();

   function handleSubmit(e){
        e.preventDefault();
        const updatedPatient = {n, age, bp, glucose, insulin, bmi};
        fetch(URL, {
            method: 'PUT',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatedPatient)
        }).then(response => {
            if (response.ok) {
                navigate('../Success');
            } else{
                throw new Error('Failed to update patient')
            }
        })
        .catch(error => {
            console.log('Error', error);
        })
    }

    return(
        <div className="Update">
            <div className="container">
            <p id="updateText">Enter UPDATED Patient Info for: {name}</p>
            <form className="dataForm" onSubmit={handleSubmit}>
                <input type="text" value={age} onChange={(e) => setAge(e.target.value)} className="data" placeholder="Enter Patient Age" />
                <input type="text" value={bp} onChange={(e) => setBP(e.target.value)} className="data" placeholder="Enter Blood Pressure" />
                <input type="text" value={glucose} onChange={(e) => setGlucose(e.target.value)} className="data" placeholder="Enter Glucose" />
                <input type="text" value={insulin} onChange={(e) => setInsulin(e.target.value)} className="data" placeholder="Enter Insulin" />
                <input type="text" value={bmi} onChange={(e) => setBMI(e.target.value)} className="data" placeholder="Enter BMI" />
                <button type="submit" className="submit">Submit</button>
            </form>
            </div>
        </div>
    );
}

export default Update;