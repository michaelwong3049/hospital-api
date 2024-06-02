import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
 
function Home(){
    const navigate = useNavigate();

    return(
        <div className="Home">
            <p id="optionHeading">Please Select Which Best Fits Your Needs</p>
            <div className="options">
                <div onClick={() => navigate('/Update')} className="updatePatient">Updating Patient Info</div>
                <div onClick={() => navigate('/Create')} className="createPatient">Creating New Patient</div>
                <div onClick={() => navigate('/Delete')} className="deletePatient">Deleting Patient</div>
            </div>
        </div>
    );
}

export default Home