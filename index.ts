var x=10;
console.log("x="+ x);

//var name:string ="TV";
//var price:number =45000.44;

var uname:string|null =prompt();

var product:{Name:string, Cities:string[],Rating?:Number, Print?():void}=
{
    Name:"Sanjeet",
    Cities:["Hyd","Delhi"],
    Print: function(){
        return 5*6
    }

};
