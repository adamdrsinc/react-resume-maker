export default function SkillList({state}){
    console.log(2);
    
    if(!state){
        return(
            <p>skillsState is not defined.</p>
        );
    }

    return (
        <ul>
            {
                state.value.map((skill, idx) => {
                    return <li key={idx}>
                        <input type="text" name={"skill"+idx} id={"skill-" + idx} value={skill} onChange={(e) => {
                            const newSkills = [...state.value];
                            newSkills[idx] = e.target.value;
                            state.set(newSkills);
                        }}/>
                        </li>
                })
            }
        </ul>
    );
}