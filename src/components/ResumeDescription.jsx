export default function ResumeDescription(props)
{
    const descriptionState = props.descriptionState;
    return (
        <p>{descriptionState.value}</p>
    );
}