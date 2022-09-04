function anaToVori(vori) {
    //Error Handle
    if(typeof vori != "number"){
    return 'please input a number and try again';
    }
    // Calculate Ana To Vori
    vori = vori / 16;
    return vori;
    }
    function pandaCost(shingaraQuantity, shomuchaQuantity, jilapiQuantity) {
    // Error Handle
    if(shingaraQuantity < 0 && shomuchaQuantity < 0 && jilapiQuantity < 0){
    return 'please input a valid Quantity'
    }else if(typeof shingaraQuantity!= 'number' && typeof shomuchaQuantity != 'number'&& jilapiQuantity != 'number'){
    return 'please input a Quantity and try again';
    }
    // food price
    const shingaraPrice = 7;
    const shomuchaPrice = 10;
    const jilapiPrice = 15;
    // All Food Quantity Calculate
    const shingara = shingaraQuantity * shingaraPrice;
    const shomucha = shomuchaQuantity * shomuchaPrice;
    const jilapi = jilapiQuantity * jilapiPrice;
    // Total Food
    const totalFoodCost = shingara + shomucha + jilapi;
    return totalFoodCost;
    }
    function picnicBudget(student) {
    //Error Handle
    if(student < 0 ){
    return 'please input a valid number'
    }else if(typeof student != 'number'){
    return 'please input a number';
    }
    //Budget Calculate
    const firstHundradStudents = 5000;
    const secondHundradStudents = 4000;
    const thirdHundradStudents = 3000;
    if(student <= 100){
    const cost = student * firstHundradStudents;
    return cost;
    }else if(student <=200){
    const firstCost = 100 * firstHundradStudents;
    const secondCost = student - 100;
    const secondTwoHundred = secondCost * secondHundradStudents;
    const totalStudents = firstCost + secondTwoHundred;
    return totalStudents;
    }else{
    const firstHundradCost = 100 * firstHundradStudents;
    const secondTwoHundred = 100 * secondHundradStudents;
    const thirdCost = student - 200;
    const lastdHundradStudents = thirdCost * thirdHundradStudents;
    const totalBudget = firstHundradCost + secondTwoHundred + lastdHundradStudents;
    return totalBudget;
    }
    }
    function oddFriend(friendNames) {
    //Error Handle
    if(typeof friendNames <= 0){
    return 'please input a valid name and try again';
    }
    //ood Calculations
    for(let i = 0; i < friendNames.length; i++){
    const name = friendNames[i];
    if(name.length % 2 != 0){
    return name;
    }
    }
    }