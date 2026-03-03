// Function Scope 

function Scope(){
    var insideVar = 10;
    let insideLet = 20;
    const insideConst = 30;
    console.log(insideVar); //Function Scoped
    console.log(insideLet); //Block Scoped
    console.log(insideConst); //Block Scoped
}
Scope();

function varFunctionScoped(){
    if(true){
        var x = 40;
    }
    console.log("x:",x);
}
varFunctionScoped();