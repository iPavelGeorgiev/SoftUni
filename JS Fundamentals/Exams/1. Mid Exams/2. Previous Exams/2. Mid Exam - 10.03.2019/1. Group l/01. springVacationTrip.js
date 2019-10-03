function springVacationTrip(input) {
    let days = Number(input.shift());
    let budget = Number(input.shift());
    let people = Number(input.shift());
    let oneKmPrice = Number(input.shift());
    let budgetNotEnough = false;

    let totalFoodExpenses = Number(input.shift()) * people * days;
    let totalRoomsExpenses= Number(input.shift()) * people * days;

    if (people > 10) {
        totalRoomsExpenses *= 0.75;
    }

    let totalExpenses =  totalFoodExpenses + totalRoomsExpenses;

    if (budget - totalExpenses > 0) {
        for (let i = 1; i <= days; i++) {
            let travelDistance = Number(input.shift()) * oneKmPrice;;
            totalExpenses += travelDistance;
    
            if (i % 3 === 0) {
                totalExpenses += totalExpenses * 0.40;
            } else if (i % 5 === 0) {
                totalExpenses += totalExpenses * 0.40;
            }
    
            if (i % 7 === 0) {
                totalExpenses -= totalExpenses / people;
            }
    
            if (budget - totalExpenses < 0) {
                budgetNotEnough = true;
                break;
            }
        }
    }

    budget -= totalExpenses;

    if (budgetNotEnough === true) {
        console.log(`Not enough money to continue the trip. You need ${Math.abs(budget).toFixed(2)}$ more.`);
    }  else {
        console.log(`You have reached the destination. You have ${budget.toFixed(2)}$ budget left.`);
    }
}

springVacationTrip([ '7',
'12000',
'5',
'1.5',
'10',
'20',
'512',
'318',
'202',
'154',
'222',
'108',
'123' ])