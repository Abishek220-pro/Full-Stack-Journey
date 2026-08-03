function Uniqueid(){
    const users =[
        {id:1,name:"Abi"},
        {id:2,name:"Prince"},
        {id:3,name:"srihari"},
    ];
    return(
          <div>
            {users.map((user)=>(
                <div key={user.id}>
                    <h2>{user.name}</h2>
                    </div>
            ))}
          </div>
    );
}
export default Uniqueid;