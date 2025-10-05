export default function SkillListForm({state}){
    return (
        <ul>
            {
                state.value.map((skill, index) => {
                    return <li key={index}>
                        <input type="text" name={"skill"+index} id={"skill-" + index} value={skill} onChange={(e) => {
                            const newSkills = [...state.value];
                            newSkills[index] = e.target.value;
                            state.set(newSkills);
                        }}/>
                        <button className="delete-button" onClick={(e) => {
                            e.preventDefault();
                            const newSkills = [...state.value];
                            newSkills.splice(index, 1);
                            state.set(newSkills);
                    }}>Delete</button>
                    </li>
                })
            }
        </ul>
    );
}