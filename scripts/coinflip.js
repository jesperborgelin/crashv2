var bet = document.getElementById("betamount");
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

function pelaa(){
  var kuva = document.getElementById('kuva');
  var arvo = Math.floor((Math.random() * 100));
  var panos =  document.getElementById('betamount').value;
  rahat = rahat - panos;
  document.getElementById('rahat').innerHTML = rahat * 1;
  localStorage.setItem("rahat", rahat);
  if (arvo >= 50) {
      kuva.src = "kuvat/kolikko1.png";
      var profit = rahat = rahat + panos * 2;
      document.getElementById('rahat').innerHTML = rahat * 1;
      localStorage.setItem("rahat", rahat);
      document.getElementById('voitit').innerHTML = "You won " + profit + ".";
    } else {
      kuva.src = "kuvat/kolikko2.png";
      document.getElementById('voitit').innerHTML = "You lost " + panos + ".";
    }
}
function pelaared(){
  var kuva = document.getElementById('kuva');
  var arvo = Math.floor((Math.random() * 100));
  var panos =  document.getElementById('betamount').value;
  rahat = rahat - panos;
  document.getElementById('rahat').innerHTML = rahat * 1;
  localStorage.setItem("rahat", rahat);
  if (arvo >= 50) {
      kuva.src = "kuvat/kolikko1.png";
      document.getElementById('voitit').innerHTML = "You lost " + panos + ".";
    } else {
      kuva.src = "kuvat/kolikko2.png";
      var profit = rahat = rahat + panos * 2;
      document.getElementById('rahat').innerHTML = rahat * 1;
      localStorage.setItem("rahat", rahat);
      document.getElementById('voitit').innerHTML = "You won " + profit + ".";
    }
  }
