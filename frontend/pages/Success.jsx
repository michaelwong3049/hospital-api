import { useNavigate } from 'react-router-dom'

function Success(){
    const navigate = useNavigate();

    return(
        <div className="confirm">
            <div className="wrapper">
                <p id="text">Successful! Please click on the button below to return to the homepage.</p>
                <button type="button" onClick={(e) => {navigate("/")}} className="return">Return To Home</button>
            </div>
        </div>
    );
}

export default Success;