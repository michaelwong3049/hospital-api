import { useNavigate } from 'react-router-dom'
 
function Home(){
    const navigate = useNavigate();

    return(
        <div className="Home">
            <p id="optionHeading">Please Select Which Best Fits Your Needs</p>
            <div className="options">
                <div onClick={() => navigate('/ChoosePatient')} className="patientOptions">Updating Patient Info</div>
                <div onClick={() => navigate('/Create')} className="patientOptions">Creating New Patient</div>
                <div onClick={() => navigate('/Delete')} className="patientOptions">Deleting Patient</div>
            </div>
        </div>
    );
}

export default Home;