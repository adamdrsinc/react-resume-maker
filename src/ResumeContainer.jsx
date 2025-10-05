import InitialInfo from "./InitialInfo";
import "./ResumeContainer.css"
import ResumeDescription from "./ResumeDescription";
import SkillList from "./SkillList";
import WorkExperiences from "./WorkExperiences";

export default function ResumeContainer(props){
    const fullNameState    = props.states.fullNameState;
    const emailState       = props.states.emailState;
    const phoneNumberState = props.states.phoneNumberState;
    const descriptionState = props.states.descriptionState;
    const skillsState = props.states.skillsState;
    const workExperiencesState = props.states.workExperiencesState;

    return (
        <div id="resume-container">
            <InitialInfo states={{fullNameState, emailState, phoneNumberState}}></InitialInfo>
            <ResumeDescription descriptionState={descriptionState}></ResumeDescription>
            <SkillList state={skillsState}></SkillList>
            <WorkExperiences state={workExperiencesState}/>
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