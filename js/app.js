// memory cost function
function memory(condition){
  const memoryCost = document.getElementById('memory-cost');
  const value = memoryCost.innerText;
  if( condition == true){
    memoryCost.innerText = parseInt(value).innerText ='0';
  }
  else{
    memoryCost.innerText = parseInt(value).innerText ='180';
  }
  finalTotalPrice();
}
// memory cost click Evend
document.getElementById('frist-memory').addEventListener('click',function(){
  memory(true);
})
document.getElementById('second-memory').addEventListener('click',function(){
  memory(false);
})


// storage cost function
function storage(num){
  const storage = document.getElementById('storage-cost');
  const storageValue = storage.innerText;
  if(num == true){
    storage.innerText = parseInt(storageValue).innerText ='0';
  }
  else if(num == false){
    storage.innerText = parseInt(storageValue).innerText ='100';
  }
  else{
    storage.innerText = parseInt(storageValue).innerText ='180';
  }
  finalTotalPrice();
}
document.getElementById('frist-storage').addEventListener('click', function(){
  storage(true);
});
document.getElementById('second-storage').addEventListener('click', function(){
  storage(false);
});
document.getElementById('third-storage').addEventListener('click', function(){
  storage();
});


// delivery cost function
function delivery(cost){
  const mac = document.getElementById('delivery-cost');
  const input = mac.innerText;
  if(cost == true){
    mac.innerText = parseInt(input).innerText ='0';
  }
  else{
    mac.innerText = parseInt(input).innerText ='20';
  }
  finalTotalPrice();
}
document.getElementById('first-delivery').addEventListener('click', function(){
  delivery(true);
});
document.getElementById('second-delivery').addEventListener('click', function(){
  delivery(false);
});
// total maney function
function finalTotalPrice() {
  let besttotal = document.getElementById("Price").innerText;
  let memoryPrice = document.getElementById("memory-cost").innerText;
  let storagePrice = document.getElementById("storage-cost").innerText;
  let deliveryPrice = document.getElementById("delivery-cost").innerText;
  let convtTotalPrice = (parseInt(besttotal) + parseInt(memoryPrice) + parseInt(storagePrice) + parseInt(deliveryPrice));
  let Price = document.getElementById("total-cost");
  Price.innerText = convtTotalPrice;
  let TotalPrice = document.getElementById("total-money");
  TotalPrice.innerText = Price.innerText;
}

// Promo Code Apply Button
let promoCodeApplyBtn = document.getElementById("pomoCodeBtn");
promoCodeApplyBtn.addEventListener("click", function () {
    // Let's Take The Peomo Code 
    let promoCode = "stevekaku"
    let pomoCode = document.getElementById("pomoCode");
    let promoCodeInputValue = pomoCode.value.toLowerCase();
    if (promoCodeInputValue == promoCode) {
        // Let's Get The Discount Percentage
        let discountPrcntge = 20;
        let subtotalPrice = document.getElementById("total-cost");
        subtotalPrice = subtotalPrice.innerText;
        let discountAmount = (subtotalPrice / 100) * 20;
        subtotalPrice = subtotalPrice - discountAmount;
        let grandTotalPrice = document.getElementById("total-money");
        grandTotalPrice.innerText = subtotalPrice; 
        pomoCode.value = " ";
        // Let's Show The Success Messge
        let secret = document.getElementById("secretCode");
        secret.innerText = "You Get $" + discountAmount.toFixed(2) + " Discount!";
    } else if (promoCodeInputValue == "") {
        let secret = document.getElementById("secretCode");
        secret.innerText = " ";
    } else if (promoCodeInputValue != promoCode) {
        pomoCode.value = " ";
        let secret = document.getElementById("secretCode");
        secret.innerText = " ";
    } else {
        pomoCode.value = " ";
        let secret = document.getElementById("secretCode");
        secret.innerText = " ";
    }
});