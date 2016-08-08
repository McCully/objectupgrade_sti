var Atticus = ["Atticus", "2405", "47000", 3];
var Jem = ["Jem", "62347", "63500", 4];
var Boo = ["Boo", "11435", "54000", 3];
var Scout = ["Scout", "6243", "74750", 5];



var bonusArray = [];
// console.log("step 1  bonus array " , bonusArray);
function Person(empName, empNum, oldPay, rating) {
    this.empName = empName;
    this.empNum = empNum;
    this.oldPay = parseInt(oldPay);
    this.rating = rating
}

var atticus = new Person("Atticus" , "2405" , "47000" , 3);
var jem = new Person("Jem" , "62347" , "63500" , 4);
var boo = new Person("Boo" , "11435" , "54000" , 3);
var scout = new Person("Scout" , "6243" , "74750" , 5);


var employees = [atticus, jem, boo, scout];

employees.forEach(calc);

function calc(name) {
    var empArray= [];
    var perBonus = parseInt();
// console.log("step 2 emparray " , empArray);
empArray.push(name.empName);

switch(name.rating) {
    case 0:
    case 1:
    case 2:
        perBonus = 0;
    break;
    case 3:
         perBonus= .04;
    break;
    case 4:
        perBonus = .06;
    break;
    case 5:
        perBonus = .10;
    break;
    default:
        perBonus= 0;
    }

        if(name.empNum.length == 4){
            perBonus += .05;
        }

        else if(name.oldPay > 65000){
            perBonus-= .01;
        }

        else if( perBonus > .13){
            perBonus = .13;
        }

// console.log("step 5 " , perBonus , empArray);

var sweetBonus = (perBonus * name.oldPay);
// console.log(sweetBonus);

var newPay = (sweetBonus + name.oldPay);
// console.log(newPay);



empArray[1] = perBonus.toFixed(2);
empArray[2] = parseInt(newPay.toFixed(2));
empArray[3] = parseInt(sweetBonus.toFixed(2));


bonusArray.push(empArray);

console.log(empArray);
}
