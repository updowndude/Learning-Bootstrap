<?php require_once('head.php') ?>
<!-- by Correy WInke -->
<!-- 10/17/16 -->
    <div class="container-fluid" id="beforeNav">
      <h2>Learning Bootsrap</h2>
      <p>This was done for Bootsrap class</p>
    </div>
    <nav>
      <!-- bootstrap nav in tabs -->
      <ul id="masterNav" class="nav nav-tabs" data-spy="affix" data-target="#beforeNav" data-offset-bottom="100">
        <li role="presentation" class="dropdown">
          <a class="dropdown-toggle" data-toggle="dropdown" href="#">
            Libraries <span class="caret"></span>
          </a>
          <ul class="dropdown-menu" data-toggle="tab">
            <li role="presentation" class="active">
              <a role="button" href="#bootsrap">Bootstrap</a>
            </li>
            <li role="presentation" class="myClass1">
              <a role="button" href="#react">React</a>
            </li>
          </ul>
        </li>
        <li role="presentation" class="myClass2" data-toggle="tab">
          <a role="button" href="#contact">Contact me</a>
        </li>
        <li role="presentation" class="myClass3" data-toggle="tab">
          <a role="button" href="#imgG">Image Gallery</a>
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
      <div class="tab-content">
        <?php require_once('bootsrap.php') ?>
        <?php require_once('react.php') ?>
        <?php require_once('contact.php') ?>
        <?php require_once('img.php') ?>
      </div>
    </section>
    <!-- home button -->
    <a href="../../index.php" class="btn btn-primary" role="button" data-original-text="Home" data-loading-text="Bye" id="btnHome">
      <span class="glyphicon glyphicon-home" aria-hidden="true"></span>
    </a>
    <!-- animation background -->
    <figure class="target">
    </figure>
<?php require_once('footer.php') ?>
