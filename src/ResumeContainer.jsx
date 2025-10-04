import InitialInfo from "./InitialInfo";
import "./ResumeContainer.css"
import ResumeDescription from "./ResumeDescription";
import Skills from "./Skills";

export default function ResumeContainer(props){
    const fullNameState    = props.states.fullNameState;
    const emailState       = props.states.emailState;
    const phoneNumberState = props.states.phoneNumberState;
    const descriptionState = props.states.descriptionState;
    const skillsState = props.states.skillsState;

    return (
        <div id="resume-container">
            <InitialInfo states={{fullNameState, emailState, phoneNumberState}}></InitialInfo>
            <ResumeDescription description={descriptionState.stateValue}></ResumeDescription>
            <Skills skills={skillsState.value}></Skills>
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