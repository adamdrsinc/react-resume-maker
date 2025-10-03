export default function CustomInputWithLabel(props){
    return (
        <>
        <label htmlFor={props.inputId}>{props.label}:</label>
        <input type={props.type} name={props.name} id={props.inputId} value={props.state.stateValue} onChange={(event) => props.state.stateSetter(event.target.value)} required/>
        </>
    );
}