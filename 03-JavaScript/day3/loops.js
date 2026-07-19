// loop 
// for loop 
for(let  i=0;i<=5;i++)
{
    console.log("TVK");
}
// while loop 
let i=0;
while(i<=10)
{
    if(i%2==0)
    {
        console.log(i);
    
    }
    i++;
   
}
// do  while 
let j=1;
do{
    console.log("code eat sleep ");
    j++;
}
while(j<=5);
// for of loop :
const arr = [1,2,3,4,5];
for(const num of arr)
{
    console.log(num);
}
// for in loop :
const student ={
    name:"Abishek",
    age:"20",
    politics:"TVK"
};
for(const key in student)
{
    console.log(key,student[key]);
}
// break
for(let i=0;i<=10;i++)
{
    if(i==5)
    {
        break;
    }
    console.log(i);
}
// continue 
for(let k =1;k<=20;k++)
{
    if(k==7)
    {
        continue;
    }
    console.log(k);
}
// Nested loop 
for(let i=1;i<=3;i++)
{
    for(let j=1;j<=3;j++)
    {
        console.log(i,j);
    }
}
// prime number :
let num = 24;
let isprime = true;
if(i<=1)
{
    console.log("not prime number");   
}
else{
    for(let i=2;i<=Math.sqrt(num);i++)
    {
        if(num%i==0)
        {
            isprime = false;
            break;
        }
    }
    if(isprime)
    {
        console.log("prime number");
    }
    else{
        console.log("not prime number");
    }
}