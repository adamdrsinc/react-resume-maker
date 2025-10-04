export default function InitialInfo(props){
    return (
        <div className="initial-info-container">
            <h1 id="resume-name">{props.states.fullNameState.stateValue}</h1>
            <h2>{props.states.emailState.stateValue} {props.states.phoneNumberState.stateValue && props.states.emailState.stateValue && "|"} {props.states.phoneNumberState.stateValue}</h2>
        </div>
    );
}