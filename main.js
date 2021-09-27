const btn = document.querySelector('#btn'),
reset = document.querySelector('#reset'),
dec = document.querySelector('#dec');

let currentNumber = 0;

let counter = ()=>{
  let newNumber = parseInt(btn.innerHTML) +1;
  if(newNumber < 10){
    newNumber = '0' + newNumber
  }
  
  btn.innerHTML = newNumber;
}

btn.addEventListener('click', counter);

// Decrement
dec.addEventListener('click', ( )=>{
  if(btn.innerHTML > 0 && btn.innerHTML < 10){
    btn.innerHTML = '0'+ (btn.innerHTML-=1);
  }else if(btn.innerHTML > 0){
    btn.innerHTML = (btn.innerHTML-=1);
  }
  
});

// Reset
reset.addEventListener('click', ()=>{
  btn.innerHTML = '00';
})
