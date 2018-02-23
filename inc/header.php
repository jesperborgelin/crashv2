<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#">B1gd1ckb3ts</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <?php if(isset($_SESSION['steamid'])): ?>
    <?require('steamauth/userInfo.php');?>
  <div class="collapse navbar-collapse" id="navbarColor02">
    <?php echo logoutbutton(); ?>
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="index.php">Crash <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="coinflip.php">Coinflip <span class="sr-only"></span></a>
      </li>

      <li class="nav-item active">
        <a class="nav-link">Moneys: <span id="rahat"></span></a>
      <?php  else: ?>
          <?php echo loginbutton(); ?>
        <?php endif ?>
      </li>
    </ul>
  </div>
</nav>
