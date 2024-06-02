import { useNavigate } from 'react-router-dom'

function Create(){

    const navigate = useNavigate();

    return(
        <div className="container">
            <form className="dataForm">
                <input type="text" className="data" placeholder="Enter Patient Name"></input>
                <input type="text" className="data" placeholder="Enter Patient Age"></input>
                <input type="text" className="data" placeholder="Enter Blood Pressure"></input>
                <input type="text" className="data" placeholder="Enter Glucose"></input>
                <input type="text" className="data" placeholder="Enter Insulin"></input>
                <input type="text" className="data" placeholder="Enter BMI"></input>
                <button onClick={(e) => {
                    e.preventDefault();
                    const data = document.querySelectorAll(".data");
                    navigate('/Confirm');
                }} className="submit">Submit</button>
            </form>
            
        </div>
    );
}

export default Create;