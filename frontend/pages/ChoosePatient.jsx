import { useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

function ChoosePatient({setData, setName}){
    const [chosenPatient, setChosenPatient] = useState('');
    const [patients, setPatients] = useState([]);
    const navigate = useNavigate();
    
    useEffect(() => {
        const fetchPatients = async () => {
            const response = await fetch('http://localhost:3000/patients');
            const json = await response.json();

            if(response.ok){
                setPatients(json);
            }
        }
        fetchPatients();
    }, [])
    
    function Update(chosenPatient){
        for(let i = 0; i < patients.length; i++){
            if(patients[i].name === chosenPatient){
                console.log(patients[i]._id);
                setData(patients[i]._id)
                setName(patients[i].name);
            }
        }
    }
    

    return(
        <>
        <div className="containerRemover">
            <p id="listHeading">List of Patients</p>
            <div className="searchPatient">
                <form>
                    <input type="text" id="searchPatientInput" onChange={(e) => setChosenPatient(e.target.value)} placeholder="Please Enter Patient Name"></input>
                    <button type="submit" onClick={(e) => {
                        e.preventDefault();
                        const element = document.querySelector(".containerRemover");    
                        Update(chosenPatient);
                        navigate('/Update');
                        }} id="submitPatient">Submit</button>
                </form>
            </div>
            <div className="home">
                <div className="patients">
                    {patients && patients.map((patient) => (
                        <p key={patient._id}>{patient.name}</p>
                    ))}
                </div>
            </div>
        </div>
        </>
    );
}

export default ChoosePatient;