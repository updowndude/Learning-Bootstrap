<article>
  <!-- jumbotron -->
  <div class="container">
    <header>
      <div class="jumbotron">
        <div class="page-header">
          <h2><strong>React</strong></h2>
        </div>
        <p>
          "A JAVASCRIPT LIBRARY FOR BUILDING USER INTERFACES"
          <span class="label label-info">
            <a  href="https://facebook.github.io/react/" target="_blank">From <abbr title="React">R</abbr> site</a>
          </span>
        </p>
      </div>
    </header>
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
      <div class="panel-footer">
        Simple compent layout
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
    <div class="panel panel-info">
      <div class="panel-heading">Parts</div>
      <div class="panel-body">
        <div class="table-responsive">
          <table class="table table-hover">
            <thead>
              <tr>
                <th>Features</th>
                <th>Languages</th>
                <th>Platform</th>
              </tr>
            </thead>
            <tbody>
              <tr class="success">
                <td>
                  "Learn Once, Write Anywhere"
                  <span class="label label-info">
                    <a  href="https://facebook.github.io/react/" target="_blank">From <abbr title="React">R</abbr> site</a>
                  </span>
                </td>
                <td>JSX</td>
                <td>Server</td>
              </tr>
              <tr class="warning">
                <td>Compents</td>
                <td>JSX or JS</td>
                <td>Server/Client</td>
              </tr>
              <tr class="success">
                <td>App building</td>
                <td>JSX or JS</td>
                <td>Server/Client</td>
              </tr>
            </tbody>
            <tfoot>
             <tr class="danger">
               <td>React new way of thinking</td>
               <td>JSX or JS</td>
               <td>Server/Client</td>
             </tr>
           </tfoot>
          </table>
        </div>
      </div>
    </div>
    <!-- well -->
    <div class="well">Thank you for reading this</div>
  </div>
</article>
