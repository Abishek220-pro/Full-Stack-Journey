function Com(){
    let a =10;
    let result;
    if(a%2==0)
    {
        result = <h1>this is a even number</h1>
    }
    else{
        result =<h1>this is a odd number</h1>
    }
    return(
        <>
        {result}
        </>
    );

}
export default Com;