<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <!-- by Correy WInke -->
  <!-- info to understand the page -->
  <meta name="author" content="Correy Winke">
  <meta name="language" content="english">
  <meta name="description" content="Bootstrap assigments">
  <meta name="abstract" content="Main page">
  <!-- mobile friendly -->
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <!-- links to rescoures -->
  <link rel="stylesheet" type="text/css" href="../public/dist/myStyle.css">
  <link rel="icon", type="image/x-icon", href="../public/images/favicon.ico">
  <link rel="shortcut icon", type="image/x-icon", href="../public/images/favicon.ico">
  <title>Landing Page</title>
</head>
<body id="myBody">
  <main>
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
      <article>
        <!-- jumbotron -->
        <div class="container">
          <div class="jumbotron">
            <div class="page-header">
              <h1><strong>Bootstrap</strong></h1>
            </div>
            <p>
              "Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.
              Download Bootstrap"
              <span class="label label-info">
                <a  href="http://getbootstrap.com/" target="_blank">From <abbr title="Bootstrap">BS</abbr> site  &nbsp; </a>
              </span>
            </p>
          </div>
          <!-- panel and its three different parts -->
          <div class="panel panel-info">
            <div class="panel-heading">Panel</div>
            <div class="panel-body">&lt;div class=&quot;panel panel-info&quot;&gt;&lt;/div&gt;</div>
            <div class="panel-footer">
              <div class="row">
                <div class="col-md-4 col-xs-4">&lt;div class=&quot;panel-heading&quot;&gt;&lt;/div&gt;</div>
                <div class="col-md-4 col-xs-4">&lt;div class=&quot;panel-body&quot;&gt;&lt;/div&gt;</div>
                <div class="col-md-4 col-xs-4">&lt;div class=&quot;panel-footer&quot;&gt;&lt;/div&gt;</div>
              </div>
            </div>
          </div>
          <!-- panel -->
          <div class="panel panel-info">
            <div class="panel-heading">Well</div>
            <div class="panel-body">&lt;div class=&quot;well&quot;&gt;&lt;/div&gt;</div>
          </div>
          <ul class="list-group">
            <li class="list-group-item list-group-item-info active">Libraries using Bootstrap</li>
            <li class="list-group-item list-group-item-info">
              <a  href="http://thednp.github.io/bootstrap.native/" target="_blank">Bootstrap<mark>.Native</mark></a>
            </li>
            <li class="list-group-item list-group-item-info">
              <a  href="https://bootswatch.com/" target="_blank"><mark>Bootswatch</mark></a>
            </li>
            <li class="list-group-item list-group-item-info">
              <a  href="https://react-bootstrap.github.io/" target="_blank"><mark>React-</mark>Bootstrap</a>
            </li>
          </ul>
          <!-- well -->
          <div class="well">Thank you for reading this</div>
        </div>
      </article>
      <article>
        <!-- jumbotron -->
        <div class="container">
          <div class="jumbotron">
            <div class="page-header">
              <h1><strong>React</strong></h1>
            </div>
            <p>
              "A JAVASCRIPT LIBRARY FOR BUILDING USER INTERFACES"
              <span class="label label-info">
                <a  href="https://facebook.github.io/react/" target="_blank">From <abbr title="React">R</abbr> site</a>
              </span>
            </p>
          </div>
          <!-- panel -->
          <div class="panel panel-info">
            <div class="panel-heading">Simple Example</div>
            <div class="panel-body myReactCode">
              <!-- if use code tag looks bad -->
              <p>
                import React from 'react';

                class Thanks extends React.Component {
                  render() {
                    return (
                    &lt;article id=&quot;reactThank&quot; class=&quot;pageContent&quot;&gt;
                    &lt;h1&gt;Thank you&lt;/h1&gt;
                    &lt;/article&gt;
                    );
                  }
                }
              </p>
            </div>
          </div>
          <!-- panel and three different parts -->
          <div class="panel panel-info">
            <div class="panel-heading">Layout Example</div>
            <div class="panel-body myReactCode">
              <p>
              import React from 'react';
              import About from './about.jsx';
              import Form from './form.jsx';
              import Game from './game.jsx';
              import Home from './home.jsx';
              import Programming from './programming.jsx';
              import Reverse from './reverse.jsx';
              import Nav from './nav.jsx';

              class Layout extends React.Component {
                render() {
                  return (
                    &lt;section&gt;
                      &lt;Nav/&gt;
                      &lt;Home img=&quot;images/fm.png&quot;/&gt;
                      &lt;About img=&quot;images/me.jpg&quot;/&gt;
                      &lt;Programming/&gt;
                      &lt;Reverse/&gt;
                      &lt;Game/&gt;
                      &lt;Form/&gt;
                    &lt;/section&gt;
                  );
                }
              }
            </p>
            </div>
            <div class="panel-footer">
              <div class="row">
                <div class="col-md-6 col-xs-6">Layout for Page</div>
                <div class="col-md-6 col-xs-6">ReactDOM will render this compent</div>
              </div>
            </div>
          </div>
          <ul class="list-group">
            <li class="list-group-item list-group-item-info active">Libraries using React</li>
            <li class="list-group-item list-group-item-info">
              <a  href="https://react-bootstrap.github.io/" target="_blank">React<mark>-Bootstrap</mark></a>
            </li>
            <li class="list-group-item list-group-item-info">
              <a  href="http://reactphp.org/" target="_blank">React <mark>Php</mark></a>
            </li>
            <li class="list-group-item list-group-item-info">
              <a  href="https://reactjs.net/" target="_blank">ReactJS<mark>.NET</mark></a>
            </li>
          </ul>
          <!-- well -->
          <div class="well">Thank you for reading this</div>
        </div>
      </article>
    </section>
    <!-- home button -->
    <button id="btnHome" type="button" class="btn btn-primary"><a href="../index.php">
      <span class="glyphicon glyphicon-home" aria-hidden="true"></span>
    </a></button>
    <!-- animation background -->
    <figure class="target">
    </figure>
    <!-- page footer -->
    <footer>
      <p> Correy Winke, &copy; 2016.</p>
    </footer>
  </main>
<!-- add the recouse for nav click -->
<script src="../public/dist/my-com.js" type="text/javascript"></script>
</body>
</html>
