<?php
require('steamauth/steamauth.php');

if(isset($_SESSION['steamid'])){
  $id = $_SESSION['steamid'];
} else {
  //Ei kirjauduttu sisään
}
 ?>
<!DOCTYPE html>

<html>
  <head>
    <meta charset="utf-8">
    <script src="scripts/jquery.min.js"></script>
    <link rel="stylesheet" href="https://bootswatch.com/4/cyborg/bootstrap.min.css">
    <link rel="stylesheet" href="css/style.css">
    <title>B1gd1ckb3ts</title>
  <?php include "inc/header.php"; ?>
  </head>
  <?php if(isset($_SESSION['steamid'])){?>
  <body>
    <div class="container text-center">
      <h6 id ="voitit"></h6>
    <img src="kuvat/kolikko1.png" id="kuva" alt="">
    </div>
    <div style="width:335px;" class="container text-center">
      <input type="number" style="background-color:black; color: white; border: 1px solid white;" id="betamount" class="form-control"  name="bet" placeholder="Bet amount">
    </div>
    <div class="container text-center">
        <button class="btn btn-default" type="submit" onclick="pelaa()" id="playbutton" name="button">Bet blue</button>
        <button class="btn btn-default" type="submit" onclick="pelaared()" id="playbutton" name="button">Bet red</button>
        <button class="btn btn-default" type="submit" onclick="moneys()" id="moneybutton" name="button">Add moneys</button>
    </div>
    <?php include "inc/modal.php"; ?>

    <script src="scripts/coinflip.js"></script>
  <?php } else { ?>
    <body>
      <div class="container">
          <h3>Login with steam so you can play</h3>
      </div>
<?php }?>
  </body>
</html>
