import InitialInfo from "./InitialInfo";
import ResumeDescription from "./ResumeDescription";
import SkillList from "./SkillList";
import WorkExperiences from "./WorkExperiences";
import "../styles/ResumeContainer.css"
import Educations from "./Educations";

export default function ResumeContainer(props){
    const fullNameState    = props.states.fullNameState;
    const emailState       = props.states.emailState;
    const phoneNumberState = props.states.phoneNumberState;
    const descriptionState = props.states.descriptionState;
    const skillsState = props.states.skillsState;
    const workExperiencesState = props.states.workExperiencesState;
    const educationsState = props.states.educationsState;

    return (
        <div id="resume-container">
            <InitialInfo states={{fullNameState, emailState, phoneNumberState}}></InitialInfo>
            <ResumeDescription descriptionState={descriptionState}></ResumeDescription>
            <SkillList state={skillsState}></SkillList>
            <WorkExperiences state={workExperiencesState}/>
            <Educations state={educationsState}/>
        </div>
    );
}