var rect=require('./rectangle');

function solveRect(l,b){
    console.log("Solving for rectangle with l = "+l + " and b =" + b);

    rect(l,b,(er,recngle)=>{
        if(er){
            console.log("ERROR:",er.message);
        }
        else{
            console.log("The area of the rect of dimension l = "+l+" and b = "+b+ " is " + recngle.area());
            console.log("The perimeter of the rect of dimension l = "+l+" and b = "+b+ " is " + recngle.perimeter());

        }
    });
    console.log("This statement is after the call to rect()")
}

solveRect(2,4);
solveRect(0,3);
