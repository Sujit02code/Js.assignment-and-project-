
function calculatearea(length = 5,width = 4){
    return length * width;
}

console.log(" standerd functiin area",calculatearea());

//arrow function 

const areaArrow = (length = 5,width = 4) => length*width;
console.log("Arrow function area",areaArrow(10,3));

//function scope
function testfunctionScope(){
    var functionVar = "I am inside the function";
    console.log("function scope",functionVar);

}
testfunctionScope();

// block scope
{
    let blockVar = "I am inside the block";
    console.log("block scope",blockVar);
}

try{
    console.log(blockVar);

}catch(error){
    console.log(" scopr test error : refernceError");
}

