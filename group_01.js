var atticus = ["Atticus", "2405", "47000", 3];
var jem = ["Jem", "62347", "63500", 4];
var boo = ["Boo", "11435", "54000", 3];
var scout = ["Scout", "6243", "74750", 5];

var employees = [atticus, jem, boo, scout];

function calculateSTI(empInfo){
    var name = empInfo[0];
    var empNumber = empInfo[1];
    var currentSalary = Math.round(parseFloat(empInfo[2]));
    var rating = empInfo[3];

    var bonusPercent = 0;

    var processedEmployee = [];

    var bonusMoney = 0;

    var totalSalary = 0;

    switch(rating){
        case 0:
        case 1:
        case 2:
            bonusPercent = 0;
            break;
        case 3:
            bonusPercent = .04;
            break;
        case 4:
            bonusPercent = .06;
            break;
        case 5:
            bonusPercent = .10;
            break;
        default:
            bonusPercent = 0;
    }

    bonusPercent = adjustBonusPercent(empNumber, bonusPercent, currentSalary);
    console.log(bonusPercent);

    processedEmployee[0] = name;
    processedEmployee[1] = bonusPercent;

    bonusMoney = Math.round(bonusPercent * currentSalary);
    totalSalary = bonusMoney + currentSalary;

    processedEmployee[2] = totalSalary;
    processedEmployee[3] = bonusMoney;

    return processedEmployee;

}

function adjustBonusPercent(empNumber, bonusPercent, currentSalary){
    console.log("first parameter check ", bonusPercent)
    if(empNumber.length == 4){
        bonusPercent += .05;
        console.log(bonusPercent);
    }

    if(currentSalary > 65000){
        bonusPercent -= .01;
    }

    if(bonusPercent > .13){
        bonusPercent = .13;
    }
    return bonusPercent;
}

for(var i = 0; i < employees.length ; i++){
    console.log(calculateSTI(employees[i]));
}

