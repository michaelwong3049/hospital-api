import { useState } from 'react'

function SearchPatient(patient) {
    const [result, setResult] = useState(null);

    return(
        <div className="searchPatient">
            <form>
                <input type="text" id="searchPatientInput" name="searchPatient" placeholder="Please Enter Patient Name"></input>
                <input type="submit" id="submitPatient"></input>
            </form>
        </div>
    );
}

export default SearchPatient    