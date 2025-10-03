import { useState } from "react";
import "./MainBody.css";
import ResumeContainer from "./ResumeContainer";
import ResumeForm from "./ResumeForm";

export default function MainBody(){
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [description, setDescription] = useState("");

    const statesObj = {
        fullNameState : {
            stateValue: fullName, 
            stateSetter: setFullName
        },
        emailState : {
            stateValue: email,
            stateSetter: setEmail
        },
        phoneNumberState : {
            stateValue: phoneNumber,
            stateSetter: setPhoneNumber
        },
        descriptionState : {
            stateValue: description,
            stateSetter: setDescription
        }
    }

    return (
        <div id="main">
            <ResumeForm states={statesObj}></ResumeForm>
            <ResumeContainer states={statesObj}></ResumeContainer>
        </div>
    );
}