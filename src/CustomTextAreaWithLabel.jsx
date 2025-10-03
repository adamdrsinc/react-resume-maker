export default function CustomTextAreaWithLabel(props){
    return (
        <>
            <label htmlFor={props.inputId}>{props.label}:</label>
            <textarea name={props.name} id={props.inputId} onChange={(event) => props.state.stateSetter(event.target.value)} value={props.state.stateValue}></textarea>
        </>
    );
}