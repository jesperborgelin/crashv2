var canvas = document.getElementById("crash");
var ctx = canvas.getContext("2d");
var numero = 1;
var numero3 = 1;
var d = Math.floor((Math.random() * 100));
var numero4 = 0.001;


if (localStorage.getItem("rahat") === null) {
      var rahat = 50;
      var rahatz = document.getElementById("rahat").innerHTML = rahat;
    } else {
      var rahat = localStorage.getItem("rahat");
      var rahatz = document.getElementById("rahat").innerHTML = rahat;
    }


    function moneys(){
      rahat = document.getElementById("rahat").innerHTML;
      rahat++;
      document.getElementById('rahat').innerHTML = rahat * 1;
      localStorage.setItem("rahat", rahat);
    }


var modal = document.getElementById('mymodal');
var span = document.getElementsByClassName("close")[0];
function lataa(){
  if (localStorage.getItem("avattu") != 1) {
    modal.style.display = "block";
    localStorage.setItem("avattu", 1);
    var rahat = 50;
    var rahatz = document.getElementById("rahat").innerHTML = rahat;
  } else {
    if (localStorage.getItem("rahat") === null) {
      var rahat = 50;
      var rahatz = document.getElementById("rahat").innerHTML = rahat;
    } else {
      var rahat = localStorage.getItem("rahat");
      var rahatz = document.getElementById("rahat").innerHTML = rahat;
    }


  }

}
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
function kierros(){
var panos =  document.getElementById('betamount').value;
var numero2 = (Math.random() * (0.001 - 0.2) + 0.2);
var profit = panos * numero;

    if (numero >= numero3) {
    ctx.clearRect(0, 0, 400, 400);
    ctx.fillStyle = 'red';
    ctx.fillText("CRASHED @ " + Math.round(numero) , 60 , 150);
    ctx.fillText("A new round will begin in 5s", 5 , 250);
    document.getElementById('submit').disabled = true;
    localStorage.setItem("rahat", Math.round(rahat));
    lopetakierros();
 } else {
   if (numero > 1) {
       numero4 = numero4 + 0.00002;
      numero = numero + numero4;
       }
    ctx.clearRect(0, 0, 400, 400);
    numero = numero + numero4;
    ctx.font="50px Verdana";
    ctx.fillText("X" + numero.toFixed(2) , 50 , 200);

    ctx.font="14px Verdana";
    ctx.fillText("Bet " + panos , 5 , 235);
    ctx.fillText("Profit " + Math.round(profit) , 5 , 250);
 }
}
function pelaa(){
tarkista();

var panos = document.getElementById('betamount').value;

  if (d < 50) {
  numero3 = Math.floor((Math.random() * 11));
}else if (d > 80){
  numero3 = Math.floor((Math.random() * 99));
}else if (d > 98){
  numero3 = Math.floor((Math.random() * 999));
  } else {
  numero3 = Math.floor((Math.random() * 9999));
}
document.getElementById('dadad').value = Math.round(numero3);
document.getElementById('userbet').value = Math.round(panos);
panos = panos*1;
rahat = rahat*1;

if (panos > rahat) {
    ctx.font="12px Verdana";
    ctx.fillStyle = 'red';
    ctx.fillText("Your bet can't be higher than your moneys", 5 , 50);
    return false;
} else if (panos <= 0) {
  ctx.font="12px Verdana";
  ctx.fillStyle = 'red';
  ctx.fillText("Your bet can't be 0 or under 0", 10 , 50);
  return false;
}else {
  document.getElementById('betamount').disabled = true;
  document.getElementById('playbutton').disabled = true;
  document.getElementById('submit').disabled = false;
  rahat = rahat - panos;
  document.getElementById('rahat').innerHTML = Math.round(rahat);
  ctx.font="16px Verdana";
  ctx.fillStyle = 'white';
  ctx.fillText("Bet: " + panos, 20 , 20);
  kierros();
  setInterval(kierros, 75);
}
}
function lopeta(){
  var panos =  document.getElementById('betamount').value;
  var profit = panos * numero
  if (numero <= numero3) {
  rahat = Math.round(profit) + Math.round(rahat);
  localStorage.setItem("rahat", Math.round(rahat));
  document.getElementById('rahat').innerHTML = Math.round(rahat);
  document.getElementById('submit').disabled = true;
  betamount.value="";
  document.getElementById('voitit').innerHTML = "You won " + Math.round(profit) + ". Wait for the next round to begin";
  document.getElementById('userprofit').value = Math.round(profit);
  document.getElementById('dadad').value = Math.round(numero3);
  return;
  }else{
  }
  localStorage.setItem("rahat", Math.round(rahat));
  document.getElementById('rahat').innerHTML = Math.round(rahat);
}


  function tarkista(){
  ctx.clearRect(0,0,300,300);
  var panos =  document.getElementById('betamount').value;
  if (panos <= 0) {
    ctx.font="12px Verdana";
    ctx.fillStyle = 'red';
    ctx.fillText("Your bet can't be 0 or under 0", 10 , 50);
    document.getElementById('playbutton').disabled = true;
  } else if (panos > rahat) {
      ctx.font="12px Verdana";
      ctx.fillStyle = 'red';
      ctx.fillText("Your bet can't be higher than your moneys", 5 , 50);
      document.getElementById('playbutton').disabled = true;
  } else {
    document.getElementById('playbutton').disabled = false;
  }
}
function lopetakierros(){
  setTimeout(function () {
  uusikierros();
  }, 3000);
  }
function uusikierros(){
setTimeout(function () {
location.reload();
}, 3000);
}
