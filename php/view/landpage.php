<!-- by Correy WInke -->
<!-- 10/17/16 -->

<?php require_once('head.php') ?>
    <nav>
      <!-- bootstrap nav in tabs -->
      <ul class="nav nav-tabs">
        <li role="presentation" class="dropdown">
          <a class="dropdown-toggle" data-toggle="dropdown" href="#">
            Libraries <span class="caret"></span>
          </a>
          <ul class="dropdown-menu">
            <li role="presentation" class="active" onclick="navClicker(this)">
              <a role="button" href="#">Bootstrap</a>
            </li>
            <li role="presentation" class="myClass1" onclick="navClicker(this)">
              <a role="button" href="#">React</a>
            </li>
          </ul>
        </li>
        <li role="presentation" class="myClass2" onclick="navClicker(this)">
          <a role="button" href="#">Contact me</a>
        </li>
        <li role="presentation" class="myClass3" onclick="navClicker(this)">
          <a role="button" href="#">Image Gallery</a>
        </li>
        <li role="presentation" class="disabled">
          <a role="button" href="#">
            Pages viewed <span class="badge">0</span>
          </a>
        </li>
      </ul>
    </nav>
    <section>
<!-- different parts of page and nav sections -->
<?php require_once('bootsrap.php') ?>
<?php require_once('react.php') ?>
<?php require_once('contact.php') ?>
<?php require_once('img.php') ?>
    </section>
    <!-- home button -->
    <a href="../../index.php" class="btn btn-primary" role="button" id="btnHome">
      <span class="glyphicon glyphicon-home" aria-hidden="true"></span>
    </a>
    <!-- animation background -->
    <figure class="target">
    </figure>
<?php require_once('footer.php') ?>
