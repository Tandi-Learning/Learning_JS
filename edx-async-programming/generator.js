function* genFunc(){

    var a = yield;
    console.log(a); 
    var b = yield;
    console.log(b); 
    var c = yield; 
    console.log(c); 
    var d = yield; 
    console.log(d); 

    return "finished!"; 



}

var genObject = genFunc();

var v = genObject.next(123); 
var w = genObject.next(456); 
var x = genObject.next(789); 
var y = genObject.throw("error thrown!");
var z = genObject.next(0); 