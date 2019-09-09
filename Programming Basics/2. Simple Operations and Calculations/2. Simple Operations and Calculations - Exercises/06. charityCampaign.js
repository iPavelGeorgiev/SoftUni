function charityCampaign(input) {
    let campaignDuration = Number(input.shift());
    let numberOfCooks = Number(input.shift());
    let cakes = Number(input.shift());
    let waffles = Number(input.shift());
    let pancakes = Number(input.shift());
    let cakesIncome = cakes * 45;
    let wafflesIncome = waffles * 5.80;
    let pancakesIncome = pancakes * 3.20;
    let totalDayIncome = (cakesIncome + wafflesIncome + pancakesIncome) * numberOfCooks;
    let totalCampaignIncome = totalDayIncome * campaignDuration;
    let expenses = totalCampaignIncome * 0.125;
    let amountAfterExpenses = totalCampaignIncome - expenses;
    console.log(amountAfterExpenses.toFixed(2));
}

charityCampaign(['20', '8', '14', '30', '16'])