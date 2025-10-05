import NewEducation from "./NewEducation";

export default function EducationsOnForm({state}){
    return (
        <ul>
        {
            state.value.map((education, index) => {
                return <li key={index}>
                    <NewEducation index={index} state={state}/>
                    <button className="delete-button" onClick={(e) => {
                        e.preventDefault();

                        const newEducations = [...state.value];
                        newEducations.splice(index, 1);
                        state.set(newEducations);
                    }}>Delete</button>
                </li>
            })
        }
        </ul>
        
    );
}