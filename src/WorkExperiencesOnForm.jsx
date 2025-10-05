import NewWorkExperience from "./NewWorkExperience";

export default function WorkExperiencesOnForm({state}){
    return (
        <ul>
        {
            state.value.map((workExperience, index) => {
                return <li key={index}>
                    <NewWorkExperience index={index} workExperiencesState={state}/>
                </li>
            })
        }
        </ul>
        
    );
}