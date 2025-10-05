export default function SkillList({state}){
    if(!state){
        return(
            <p>skillsState is not defined.</p>
        );
    }

    return (
        <ul>
            {state.value.length > 0 && <h1 className="section-title">Skills</h1>}
            {state.value.map((skill, idx) => {
                return skill !== "" && <li key={idx}>- {skill}</li>
            })}
        </ul>
    );
}