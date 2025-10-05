export default function CustomInputWithLabel(props){
    return (
        <>
        <label htmlFor={props.inputId}>{props.label}:</label>
        <input type={props.type} name={props.name} id={props.inputId} value={props.state.value} onChange={(event) => props.state.set(event.target.value)} required/>
        </>
    );
}