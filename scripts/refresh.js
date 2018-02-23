$(document).ready(function() {
  $("#submit").click(function() {
    var steamid1 = $("#steamid").val();
    var user_bet1 = $("#userbet").val();
    var crashed_at1 = $("#dadad").val();
    var user_profit1 = $("#userprofit").val();
    // Returns successful data submission message when the entered information is stored in database.
    $.post("scripts/tallenna.php", {
      steamid64: steamid1,
      userbet: user_bet1,
      dadad: crashed_at1,
      userprofit: user_profit1
    }, function(data) {
      $('#form')[0].reset(); // To reset form fields
    });
  });
});
