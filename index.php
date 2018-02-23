<?php
require('steamauth/steamauth.php');
require('config/config.php');
require('config/db.php');

if(isset($_SESSION['steamid'])){
  $id = $_SESSION['steamid'];
} else {
  //Ei kirjauduttu sisään
}

$query = "SELECT * FROM rounds ORDER BY played_at DESC LIMIT 10";

$result = mysqli_query($conn, $query)
or die("Error: ".mysqli_error($conn));

//Fetch data
$rounds = mysqli_fetch_all($result, MYSQLI_ASSOC);

//free result
mysqli_free_result($result);

//Close connection
mysqli_close($conn);

?>

<!DOCTYPE html>

<html>
  <head>
    <meta charset="utf-8">
    <script src="scripts/jquery.min.js"></script>
    <script src="scripts/refresh.js"></script>
    <link rel="stylesheet" href="https://bootswatch.com/4/cyborg/bootstrap.min.css">
    <link rel="stylesheet" href="css/style.css">
    <title>B1gd1ckb3ts</title>
  <?php include "inc/header.php"; ?>
  </head>
  <?php if(isset($_SESSION['steamid'])){?>
  <body onload="lataa()">
      <div class="well" style="overflow-y: scroll; height:500px; width:400px; float:left; margin-left:10px;">
        <h3>History</h3>
        <?php foreach ($rounds as $round): ?>
          <small>Played at: <?php echo $round['played_at']; ?></small><br>
          <small>Steamid: <?php echo $round['steamid']; ?></small><br>
          <a>Bet amount: <?php echo $round['user_bet']; ?></a><br>
          <a>Profit made: <?php echo $round['user_profit']; ?></a><br>
          <a>Crashed at: <?php echo $round['crashed_at']; ?></a><br>
          <br>
        <?php endforeach; ?>
      </div>

    <div class="container text-center">
      <h6 id ="voitit"></h6>
    <canvas style="border: 1px solid white" id="crash" width="300" height="300"></canvas>
    </div>
    <div style="width:335px;" class="container text-center">
      <input onkeypress="tarkista()" onkeyup="tarkista()" type="number" style="background-color:black; color: white; border: 1px solid white;" id="betamount" class="form-control"  name="bet" placeholder="Bet amount">
    </div>
    <div class="container text-center">
      <form name="form" id="form" target="asd" method="post">
        <input type="hidden" name="steamid" id="steamid" value="<?php echo ($_SESSION['steamid']); ?>">
        <input type="hidden" name="dadad" id="dadad">
        <input type="hidden" name="userprofit" id="userprofit">
        <input type="hidden" name="userbet" id="userbet">
        <button class="btn btn-default" type="submit" onclick="pelaa()" id="playbutton" name="button">Play</button>
        <button class="btn btn-default" type="submit" onclick="lopeta()" id="submit" name="button" disabled>Cashout</button>
        <button class="btn btn-default" type="button" onclick="moneys()" id="moneybutton" name="button">Add moneys</button>
      </form>
    </div>
    <?php include "inc/modal.php"; ?>

    <script src="scripts/crash.js"></script>
  <?php } else { ?>
    <body>
      <div class="container">
          <h3>Login with steam so you can play</h3>
      </div>
<?php }?>
  </body>
</html>
