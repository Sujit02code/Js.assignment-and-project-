
console.log("multiplication table of 5");

for (let i=1; i<=5;i++){
    console.log("5 x " ,i,"=",5*i);

}   
console.log(" first number >10 divisiable by 6");

let num = 11;

while (num >10){
    if (num %6 == 0){
        console.log("found",num);
        break;
    }
    num++;

}

console.log("number from 1 to 10 , skip even number " );

let j = 0;
do{
    j++;

    if (j%2==0){
        continue;
    
    }
    console.log(j);

}while(j<10);