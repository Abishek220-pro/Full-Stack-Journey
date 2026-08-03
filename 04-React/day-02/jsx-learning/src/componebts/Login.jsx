function Login(){
    const islogin = false;
    return(
        <div>
            {islogin ?(<h1 className="mm">welcome</h1>):(<h1 className="uu">please login and come</h1>)}
        </div>
    );
}
export default Login;