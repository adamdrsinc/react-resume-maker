export default function Education({education}){
    return (
        <div className="work-experience">
            <h1>{education.institution}</h1>
            <h2>{education.from} {education.to && "to"} {education.to}</h2>
            <h3>{education.grade && "Grade:"} {education.grade}</h3>
            <p>{education.additionalInfo}</p>
        </div>
    );
}