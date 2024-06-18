import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Delete(){
    const [name, setName] = useState('')

    const [patients, setPatients] = useState('');
    let URL;
    const navigate = useNavigate();

    useEffect(() => {
        const fetchPatients = async () => {
            const response = await fetch('http://localhost:3000/patients/');
            const json = await response.json();

            if(response.ok){
                setPatients(json);
            }
        }
        fetchPatients();
    }, [])

   function handleSubmit(){
        fetch(URL, {
            method: 'DELETE'
        }).then(response => {
            if (response.ok) {
                navigate('/Success');
            } else{
                throw new Error('Failed to delete patient')
            }
        })
        .catch(error => {
            console.log('Error', error);
        })
    }

    function handleID(){
        for(let i = 0; i < patients.length; i++){
            if(patients[i].name == name){

                URL = "http://localhost:3000/patients/" + patients[i]._id;
                handleSubmit(patients[i]._id);
            }
        }
    }

    return(
        <div className="Delete">
            <div className="container">
            <p id="deleteText">Enter Patient Name To Be Removed</p>
                <form className="dataForm" >
                    <input type="text" onChange={(e) => setName(e.target.value)} className="data" placeholder="Enter Patient Name To Remove"/>
                    <button type="submit" className="submit" onClick={(e) => {
                        e.preventDefault();
                        handleID();
                    }}>Submit</button>
                </form>
            <div className="home">
                <div className="patients">
                    {patients && patients.map((patient) => (
                        <p key={patient._id}>{patient.name}</p>
                    ))}
                </div>
            </div>
            </div>
        </div>
    );
}

export default Delete;