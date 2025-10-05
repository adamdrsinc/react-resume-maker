export default function NewWorkExperience({index, state}){
    function inputChange(e, property){
        const newEducations = [...state.value];
        newEducations[index][property] = e.target.value;
        state.set(newEducations);
    }

    return (
        <div className="new-work-experience">
            <label htmlFor="educationinstitution">Institution:</label>
            <input type="text" name="educationInstitution" onChange={(e) => inputChange(e, "institution")}/>
            <div className="work-experience-date-container">
                <div>
                    <label htmlFor="">From:</label>
                    <input type="text" name="" id="" onChange={(e) => inputChange(e, "from")}/>
                </div>
                <div>
                    <label htmlFor="">To:</label>
                    <input type="text" name="" id="" onChange={(e) => inputChange(e, "to")}/>
                </div>
            </div>
            <label htmlFor="">Grade:</label>
            <input type="text" onChange={(e) => inputChange(e, "grade")}/>
            <label htmlFor="">Additional Information:</label>
            <textarea name="" id="" onChange={(e) => inputChange(e, "additionalInfo")}></textarea>
        </div>
    );
}