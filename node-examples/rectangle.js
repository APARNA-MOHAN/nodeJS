module.exports = (x,y,calback)=>{
    if(x <= 0 || y<=0){

        setTimeout(()=>
            calback(
                new Error("Rectangle dimension shld be greater than zero, l = "+x + " and b = " + y),null
                ),2000);
        
    }
    else{
        setTimeout(()=>
            calback(null,
                {
                    perimeter:()=>(2*(x+y)),
                    area:()=>(x*y)
                }),
                2000);

    }

}



