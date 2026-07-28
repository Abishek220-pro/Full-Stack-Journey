const person1={
    name:"vijay anna",
    work: "Tamilnadu cm",
    hello: function()
    {
        console.log(`hi ${this.name}`);
    },
    sayhello:function()
    {
              console.log(`${this.name} working ${this.work}`);
    }
    
    
}
person1.hello();
person1.sayhello();