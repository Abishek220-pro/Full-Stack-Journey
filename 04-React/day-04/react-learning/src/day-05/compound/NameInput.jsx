function NameInput({name,onNameChange})
{
    return(
        <>
        <input type="text" placeholder="Enter the name" value={name} onChange={(e)=>onNameChange(e.target.value)}/>
        </>
    );
}
export default NameInput;