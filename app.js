//console.log("hey hi");
// var number = 30;
//number = 30+ 20;console.log(number);

/*function dosomething (sugar,milk)
{
    var instructions = "Boil water,";
    instructions += "pour into cup";
    instructions += "add coffee granules";
    instructions+= "add " + sugar + " spoons of sugar,";
    instructions +="add " + milk + "% milk.";
    return instructions;
}

console.log (dosomething(2,2));

var car = {
    color : "red",
    year : 2019,
    drive : function() {return "drive";}
};

var shoppinglist = [
    "BMW", "Ferrari", "Mercedes"
];*/

/*var car = {
    color : "red",
    year : 2019,
    engine: {
        size: 2.0,
        make: "bmw",
        fuel: "etanol",
        pistons:[
             {maker: "BMW"},
             {maker: "BMW2"} 
        ]
    },
    function(){return "drive";}
}

var array = [ "string",
                100,
                ["embed", 200],
                {car: "ford"},
                function(){return "drive2";}
            ];*/

//console.log(car.engine.make); 

/*function name()
{
    var fullname= " john mesquita";
    function concat(name)
    {
        return "Mr." + name;
    }
   // return fullname;
    return concat(fullname);
}

var obj = {embedded: {}};

//Memory Hosting*/


// console.log(myName, printName()); //aqui myName irá retornar undefined pq myName ainda nao foi criado

// // var myName = "Lawrence";
// // function printName()
// // { 
// //     return "John Doe";
// // }

//scope

/*var engine = {
    maker: "Ford",
    headGasket:{
        posts:[
            "piston1",
            "piston2"
        ]
    }
}

function runExpression(){
    var a = 10;
    function add(){
        return a+90;
    }
    return add();
}
*/
//this context

//console.log(this);

var object = {
    prop: this,
    method: function(){
        return this;
    }
}

var array = [
    this,
    function(){
        return this;
    }
]

function global(){
    return this;
}

global.call(object);