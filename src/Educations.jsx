import Education from "./Education";

export default function Educations({state}){
    return (
        <div className="work-experience-container">
            {state.value.length > 0 && <h1 className="section-title">Education</h1>}
            <ul>
                {
                    state.value.map((education, index) => {
                        return <li key={index}><Education education={education}/></li>
                    })
                }
            </ul>
        </div>
        
    );
}