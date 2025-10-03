import "./ResumeContainer.css"

export default function ResumeContainer(props){
    const fullNameState    = props.states.fullNameState;
    const emailState       = props.states.emailState;
    const phoneNumberState = props.states.phoneNumberState;
    const descriptionState = props.states.descriptionState;

    return (
        <div id="resume-container">
            <div className="initial-info-container">
                <h1 id="resume-name">{fullNameState.stateValue}</h1>
                <h2>{emailState.stateValue} {phoneNumberState.stateValue && emailState.stateValue && "|"} {phoneNumberState.stateValue}</h2>
            </div>
            <p>{descriptionState.stateValue}</p>
            <ul id="skills">
                <h1 className="section-title">Skills</h1>
                <li>- Skill</li>
                <li>- Skill</li>
                <li>- Skill</li>
                <li>- Skill</li>
            </ul>
            <div id="work-experience-container">
                <h1 className="section-title">Work Experience</h1>
                <div className="work-experience">
                    <h1>Waitrose &amp; Partners PLC.</h1>
                    <h2>Jan 2019 to Feb 2020</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam omnis deleniti iure debitis necessitatibus cupiditate odit a temporibus ullam quaerat voluptatibus ducimus, repellat dicta non laudantium quidem vero rem maiores!</p>
                </div>
                <div className="work-experience">
                    <h1>Waitrose &amp; Partners PLC.</h1>
                                        <h2>Jan 2019 to Feb 2020</h2>

                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam omnis deleniti iure debitis necessitatibus cupiditate odit a temporibus ullam quaerat voluptatibus ducimus, repellat dicta non laudantium quidem vero rem maiores!</p>
                </div>
            </div>
            <div id="education-container">
                <h1 className="section-title">Education</h1>
                <div className="education">
                    <h1>University of Chester</h1>
                    <h2>Aug 2020 to Jun 2024</h2>
                    <h3>Grade: 1st Class Honours</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus esse deserunt vel fugiat dolorum voluptates eius corporis rerum</p>
                </div>
                <div className="education">
                    <h1>University of Chester</h1>
                    <h2>Aug 2020 to Jun 2024</h2>
                    <h3>Grade: 1st Class Honours</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus esse deserunt vel fugiat dolorum voluptates eius corporis rerum</p>
                </div>
            </div>
        </div>
    );
}