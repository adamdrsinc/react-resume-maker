export default function NewWorkExperience({index, workExperiencesState}){
    function inputChange(e, property){
        const newWorkExperiences = [...workExperiencesState.value];
        newWorkExperiences[index][property] = e.target.value;
        workExperiencesState.set(newWorkExperiences);
    }

    return (
        <div className="new-work-experience">
            <label htmlFor="workExperienceCompany">Company:</label>
            <input type="text" name="workExperienceName" onChange={(e) => inputChange(e, "company")}/>
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
            <label htmlFor="">Additional Information:</label>
            <textarea name="" id="" onChange={(e) => inputChange(e, "additionalInfo")}></textarea>
        </div>
    );
}