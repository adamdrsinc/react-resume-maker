import WorkExperience from "./WorkExperience";

export default function WorkExperiences({state}){
    return (
        <div className="work-experience-container">
            {state.value.length > 0 && <h1 className="section-title">Work Experience</h1>}
            <ul>
                {
                    state.value.map((workExperience, index) => {
                        return <li key={index}><WorkExperience workExperience={workExperience}/></li>
                    })
                }
            </ul>
        </div>
        
    );
}