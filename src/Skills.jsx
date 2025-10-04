export default function Skills(props){
    const skills = props.skills;

    return (
        <ul id="skills">
            {skills.length > 0 && <h1 className="section-title">Skills</h1>}
            {skills.map((skill, idx) => 
                (skill !== "" && <li key={idx}>- {skill}</li>)
            )}
        </ul>
    );
}