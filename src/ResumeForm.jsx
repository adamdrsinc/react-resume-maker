import CustomInputWithLabel from "./CustomInputWithLabel";
import CustomTextAreaWithLabel from "./CustomTextAreaWithLabel";
import "./ResumeForm.css"

export default function ResumeForm(props){
    const fullNameState    = props.states.fullNameState;
    const emailState       = props.states.emailState;
    const phoneNumberState = props.states.phoneNumberState;
    const descriptionState = props.states.descriptionState;
    const skillsState = props.states.skillsState;

    const handleSkillButtonClick = (e) => {
        e.preventDefault();
        
        skillsState.set(prev => [...prev, ""]);
    };

    const handleWorkExperienceButtonClick = (e) => {
        e.preventDefault();

    };

    const handleEducationButtonClick = (e) => {
        e.preventDefault();

    };

    return (
        <form action="" method="post">
            <fieldset>
                <legend>Personal Information</legend>
                
                <CustomInputWithLabel type="text" inputId="input-full-name" name="fullName" label="Full Name" state={fullNameState}></CustomInputWithLabel>
                <CustomInputWithLabel type="email" inputId="input-email" name="emailName" label="Email" state={emailState}></CustomInputWithLabel>
                <CustomInputWithLabel type="tel" inputId="input-phone-number" name="phoneNumber"  label="Phone Number" state={phoneNumberState}></CustomInputWithLabel>
                <CustomTextAreaWithLabel name="shortDescription" inputId="input-short-description" label="Short Description of Yourself" state={descriptionState}></CustomTextAreaWithLabel>
            </fieldset>

            <fieldset>
                <legend>Skills</legend>

                <ul>
                    {
                        skillsState.value.map((skill, idx) => {
                            return <li id={idx}>
                                <input type="text" name={"skill"+idx} id={"skill-" + idx} value={skill} onChange={(e) => {
                                    const newSkills = [...skillsState.value];
                                    newSkills[idx] = e.target.value;
                                    skillsState.set(newSkills);
                                }}/>
                                </li>
                        })
                    }
                </ul>
                <button className="plus-button" onClick={handleSkillButtonClick}>+</button>
            </fieldset>

            <fieldset>
                <legend>Work Experience</legend>
                <button className="plus-button" onClick={handleWorkExperienceButtonClick}>+</button>
            </fieldset>

            <fieldset>
                <legend>Education</legend>
                <button className="plus-button" onClick={handleEducationButtonClick}>+</button>
            </fieldset>
        </form>
    );
}