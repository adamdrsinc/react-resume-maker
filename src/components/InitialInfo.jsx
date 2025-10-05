export default function InitialInfo(props){
    return (
        <div className="initial-info-container">
            <h1 id="resume-name">{props.states.fullNameState.value}</h1>
            <h2>{props.states.emailState.value} {props.states.phoneNumberState.value && props.states.emailState.value && "|"} {props.states.phoneNumberState.value}</h2>
        </div>
    );
}