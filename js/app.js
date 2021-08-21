function getfunction(big){
  const mac = document.getElementById('memory-cost');
  const input = mac.innerText;
  if( big == true){
    mac.innerText = parseInt(input).innerText ='0';
  }
  else{
    mac.innerText = parseInt(input).innerText ='180';
  }
}
// memory cost
document.getElementById('frist-memory').addEventListener('click',function(){
  getfunction(true);
})
document.getElementById('second-memory').addEventListener('click',function(){
  getfunction(false);
})
// storage cost
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
// delivery cost
function delivery(cost){
  const mac = document.getElementById('delivery-cost');
  const input = mac.innerText;
  if(cost == true){
    mac.innerText = parseInt(input).innerText ='0';
  }
  else{
    mac.innerText = parseInt(input).innerText ='20';
  }
}
document.getElementById('first-delivery').addEventListener('click', function(){
  delivery(true);
});
document.getElementById('second-delivery').addEventListener('click', function(){
  delivery(false);
});