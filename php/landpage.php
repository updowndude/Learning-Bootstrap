<?php require_once('head.php') ?>
    <nav>
      <!-- bootstrap nav in tabs -->
      <ul class="nav nav-tabs">
        <li role="presentation" class="active" onclick="navClicker(this)">
          <a role="button" href="#">Bootstrap</a>
        </li>
        <li role="presentation" class="myClass" onclick="navClicker(this)">
          <a role="button" href="#">React</a>
        </li>
        <li role="presentation" class="disabled">
          <a role="button" href="#">
            Pages viewed <span class="badge">0</span>
          </a>
        </li>
      </ul>
    </nav>
    <section>
<?php require_once('bootsrap.php') ?>
<?php require_once('react.php') ?>
    </section>
    <!-- home button -->
    <a href="../index.php" class="btn btn-primary" role="button" id="btnHome">
      <span class="glyphicon glyphicon-home" aria-hidden="true"></span>
    </a>
    <!-- animation background -->
    <figure class="target">
    </figure>
<?php require_once('footer.php') ?>
