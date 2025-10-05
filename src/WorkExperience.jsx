export default function WorkExperience({workExperience}){
    return (
        <div className="work-experience">
            <h1>{workExperience.company}</h1>
            <h2>{workExperience.from} {workExperience.to && "to"} {workExperience.to}</h2>
            <p>{workExperience.additionalInfo}</p>
        </div>
    );
}