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
  getmaney();
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
  getmaney();
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
  getmaney();
}
document.getElementById('first-delivery').addEventListener('click', function(){
  delivery(true);
});
document.getElementById('second-delivery').addEventListener('click', function(){
  delivery(false);
});
// total maney function
function total(one){
  const total = document.getElementById(one +'-cost');
  const value = parseInt(total.innerText);
  return value;
}
function getmaney(){
  let totalCost = total('total') + 1299;
  let memoryCost = total('memory') * 1;
  let storageCost = total('storage') * 1;
  let deliveryCost = total('delivery') * 1;
  let totalone = memoryCost + storageCost + deliveryCost;
  let totalManey = totalCost + totalone;

  document.getElementById('memory-cost').innerText = memoryCost;
  document.getElementById('storage-cost').innerText = storageCost;
  document.getElementById('delivery-cost').innerText = deliveryCost;
  document.getElementById('total-cost').innerText = totalManey;
}
