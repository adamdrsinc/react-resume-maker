import { useState } from "react";
import "./MainBody.css";
import ResumeContainer from "./ResumeContainer";
import ResumeForm from "./ResumeForm";

export default function MainBody(){
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [description, setDescription] = useState("");
    const [skills, setSkills] = useState([]);
    const [workExperiences, setWorkExperiences] = useState([]);
    const [educations, setEducations] = useState([]);


    const statesObj = {
        fullNameState : {
            value: fullName, 
            set: setFullName
        },
        emailState : {
            value: email,
            set: setEmail
        },
        phoneNumberState : {
            value: phoneNumber,
            set: setPhoneNumber
        },
        descriptionState : {
            value: description,
            set: setDescription
        },
        skillsState: {
            value: skills,
            set: setSkills
        },
        workExperiencesState: {
            value: workExperiences,
            set: setWorkExperiences
        },
        educationsState: {
            value: educations,
            set: setEducations
        }
    }

    return (
        <div id="main">
            <ResumeForm states={statesObj}></ResumeForm>
            <ResumeContainer states={statesObj}></ResumeContainer>
        </div>
    );
}