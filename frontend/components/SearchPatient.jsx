function SearchPatient(){
    return(
        <div className="searchPatient">
            <form>
                <input type="text" className="searchPatientInput" placeholder="Input Patient To Be Deleted"></input>
                <button type="submit" className="searchPatientSubmit">Submit</button>
            </form>
        </div>  
    );
}

export default SearchPatient;