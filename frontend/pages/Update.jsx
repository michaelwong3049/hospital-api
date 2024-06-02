import { useEffect, useState } from 'react'

//components
import SearchPatient from '../components/SearchPatient'

function Update(){
    const [patients, setPatients] = useState(null);
    
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


    
    return(
        <>
        <p id="listHeading">List of Patients</p>
        <SearchPatient></SearchPatient>
        <div className="home">
            <div className="patients">
                {patients && patients.map((patient) => (
                    <p key={patient._id}>{patient.name}</p>
                ))}
            </div>
        </div>
        </>
    );
}

export default Update