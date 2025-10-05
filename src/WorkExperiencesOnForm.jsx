import NewWorkExperience from "./NewWorkExperience";

export default function WorkExperiencesOnForm({state}){
    return (
        <ul>
        {
            state.value.map((workExperience, index) => {
                return <li key={index}>
                    <NewWorkExperience index={index} workExperiencesState={state}/>
                    <button className="delete-button" onClick={(e) => {
                        e.preventDefault();

                        const newWorkExperiences = [...state.value];
                        newWorkExperiences.splice(index, 1);
                        state.set(newWorkExperiences);
                    }}>Delete</button>
                </li>
            })
        }
        </ul>
        
    );
}