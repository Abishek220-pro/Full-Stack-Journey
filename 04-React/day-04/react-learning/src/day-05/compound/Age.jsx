function Age({age,onAgeChange}){
    return(
        <>
        <input type="text" placeholder="Enter the age" onChange={e=>onAgeChange(e.target.value)}/>
        </>
    );
}
export default Age;