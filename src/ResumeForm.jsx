import CustomInputWithLabel from "./CustomInputWithLabel";
import CustomTextAreaWithLabel from "./CustomTextAreaWithLabel";
import "./ResumeForm.css"

export default function ResumeForm(props){
    const fullNameState    = props.states.fullNameState;
    const emailState       = props.states.emailState;
    const phoneNumberState = props.states.phoneNumberState;
    const descriptionState = props.states.descriptionState;


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
                <legend>Work Experience</legend>
                <input type="text" name="" id="" />
            </fieldset>

            <fieldset>
                <legend>Education</legend>
                <input type="text" name="" id="" />
            </fieldset>
        </form>
    );
}