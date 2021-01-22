                                                             //1st function

function kilometerToMeter(kilometer){
    var meter = kilometer * 1000;
    return meter;    
}

/*var jhankarMeter = kilometerToMeter(13.2)
console.log(jhankarMeter);*/

                                                            //2nd function

function budgetCalculator( totalWatch, totalMobile, totalLaptop){

    var price = 50;
    var watchPrice = price * totalWatch;

    var price = 100;
    var mobilePrice = price * totalMobile;

    var price = 500;
    var laptopPrice = price * totalLaptop;

    var totalPrice = watchPrice + mobilePrice + laptopPrice;

    return totalPrice;
}
    
    /*var total = budgetCalculator(15, 12, 7);
    console.log(total);*/

                                                              // 3rd function

function hotelCost(hotelStay){
    
    var cost = 0;
    if(hotelStay <= 10){
      totalCost = hotelStay * 100;
    }
      else if (hotelStay <= 20) {
      var firstStay = 10 * 100;
      var remaining = hotelStay - 10;
      var secondStay = remaining * 80;
      cost = firstStay + secondStay; 
  }
      else {
      var firstStay = 10 * 100;
      var secondStay = 10 * 80;
      var remaining = hotelStay - 20;
      var thirdStay = remaining * 50;
      var cost = firstStay + secondStay + thirdStay;
  }
  return cost;
  }
  
  /*var totalCost = hotelCost (24);
  console.log(totalCost);*/

                                                             // 4th function

  function megaFriend(friends){
    var string= 0
    var largestName;
    for (i = 0; i< friends.length; i++){
        if (friends[i].length>string){
            var string = friends[i].length;
            largestName= friends [i];
        }
    }
    return largestName;
}

/*var friends = ["moyna", "tia", "phinge", "moynapakhi", "koitorponkhi"]
var result = megaFriend (friends);
console.log(result);*/


