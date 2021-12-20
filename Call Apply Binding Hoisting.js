//Hoisting
b=5;
console.log(a,b);
var a = 10;
var b;

//Bind
let BND = function AddNumbers(){
    var c = 5;
    var d = 6;
    console.log(parseInt(c)+parseInt(d));
}
console.log(BND);

//Call
const Guy_call = {
    fname : function(){
        console.log(this.first_Name);
    }
}

const Guy1 = {
    first_Name : "aravind",
}
Guy_call.fname.call(Guy1)




//apply
const Guy_apply = {
    Lname : function(age){
        console.log(this.last_name, age)
    }
}
const Guy2 = {
    last_name : "wickey",
}
Guy_apply.Lname.apply(Guy2, ["20"])