import { useEffect, useState } from 'react'

function Home(){
    const [patients, setPatients] = useState(null);

    useEffect(() => {
        const fetchPatients = async () => {
            const response = await fetch('http://localhost:3000/patients');
            console.log(response);
            const json = await response.json();
            console.log(json)

            if(response.ok){
                setPatients(json);
            }
        }
        fetchPatients();
    }, [])
    return(
        <div className="Home">
            {patients && patients.map(() => (
                <p key={workout._id}>{patients.name}</p>
            ))}
        </div>
    );

}

export default Home