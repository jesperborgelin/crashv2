<?php
$conn = mysqli_connect("localhost", "root", "");
$db = mysqli_select_db($conn, "crashv2");

if(isset($_REQUEST))
{
  var_dump($_POST);
  $steamidzzz = mysqli_real_escape_string($conn, $_POST['steamid64']);
  $profit = mysqli_real_escape_string($conn, $_POST['userprofit']);
  $crashed_at = mysqli_real_escape_string($conn, $_POST['dadad']);
  $user_bet = mysqli_real_escape_string($conn, $_POST['userbet']);
  $query = "INSERT INTO rounds(steamid, user_profit, user_bet, crashed_at) VALUES ('$steamidzzz','$profit','$user_bet','$crashed_at')";

  if (mysqli_query($conn, $query)) {
  } else {
    echo 'ERROR '. mysqli_error($conn) ;
  }

  mysqli_close($conn);
}
?>
