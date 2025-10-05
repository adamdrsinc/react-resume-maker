import CustomInputWithLabel from "./CustomInputWithLabel";
import CustomTextAreaWithLabel from "./CustomTextAreaWithLabel";
import "./ResumeForm.css"
import SkillListForm from "./SkillListForm";
import WorkExperiencesOnForm from "./WorkExperiencesOnForm";

export default function ResumeForm(props){
    const fullNameState    = props.states.fullNameState;
    const emailState       = props.states.emailState;
    const phoneNumberState = props.states.phoneNumberState;
    const descriptionState = props.states.descriptionState;
    const skillsState = props.states.skillsState;
    const workExperiencesState = props.states.workExperiencesState;


    const handleNewSkill = (e, state) => {
        e.preventDefault();
        
        state.set(prev => [...prev, ""]);
    };

    const handleNewWorkExperience = (e, state) => {
        e.preventDefault();

        state.set(prev => [...prev, {}]);
    }

    return (
        <form action="" method="post">
            <fieldset>
                <legend>Personal Information</legend>
                
                <CustomInputWithLabel type="text" inputId="input-full-name" name="fullName" label="Full Name" state={fullNameState}/>
                <CustomInputWithLabel type="email" inputId="input-email" name="emailName" label="Email" state={emailState}/>
                <CustomInputWithLabel type="tel" inputId="input-phone-number" name="phoneNumber"  label="Phone Number" state={phoneNumberState}/>
                <CustomTextAreaWithLabel name="shortDescription" inputId="input-short-description" label="Short Description of Yourself" state={descriptionState}/>
            </fieldset>

            <fieldset>
                <legend>Skills</legend>
                <SkillListForm state={skillsState}/>
                <button className="plus-button" onClick={(e) => handleNewSkill(e, skillsState)}>+</button>
            </fieldset>

            <fieldset className="fieldset-work-experiences">
                <legend>Work Experience</legend>
                <WorkExperiencesOnForm state={workExperiencesState}/>
                <button className="plus-button" onClick={(e) => handleNewWorkExperience(e, workExperiencesState)}>+</button>
            </fieldset>

            <fieldset>
                <legend>Education</legend>
                <button className="plus-button" >+</button>
            </fieldset>
        </form>
    );
}