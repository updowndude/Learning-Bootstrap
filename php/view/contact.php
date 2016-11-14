<!-- by Correy WInke -->
<!-- 10/17/16 -->
<article id="contact" class="tab-pane fade">
  <div class="container">
    <div class="panel panel-info" id="contatThing">
      <div class="panel-heading">FeedBack</div>
      <div class="panel-body">
        <!-- handles feedback form the user -->
        <form action="../controller/action.php" method="post">
          <input type="hidden" name="action" value="done" />
          <div data-spy="scroll" data-target="#scrollSpy">
            <div class="form-group" id="fGroup1">
              <!-- gorups togther and a label -->
              <div class="col-sm-offset-1">
                <label class="text-warning" for="fName">
                  <a href="#" data-toggle="tooltip" data-placement="top" title="Require">
                    First Name
                  </a>
                </label>
              </div>
              <input type="text" onblur="mover(this)" class="textFnameInput form-control" name="fName" id="fName">
            </div>
            <div class="form-group" id="fGroup2">
              <div class="col-sm-offset-1">
                <label class="text-warning" for="lName">
                  <a href="#" data-toggle="tooltip" data-placement="top" title="Require">
                    Last Name
                  </a>
                  </label>
              </div>
              <input type="text" onblur="mover(this)" class="textLnameInput form-control" name="lName" id="lName">
            </div>
            <div class="form-group" id="fGroup3">
              <div class="col-sm-offset-1">
                <label class="text-warning" for="lName">
                  <a href="#" data-toggle="popover">
                    Over all experience
                  </a>
                </label>
              </div>
              <br />
              <!-- radios are inline and all togthere -->
                <div class="col-xs-offset-1">
                 <label class="radio-inline">
                   <input type="radio" onclick="mover(this)" class="radioInput" name="quality" value="Horrible">Horrible
                 </label>
                 <label class="radio-inline">
                   <input type="radio" onclick="mover(this)" class="radioInput" name="quality" value="Bad">Bad
                 </label>
                 <label class="radio-inline">
                   <input type="radio" onclick="mover(this)" class="radioInput" name="quality" value="OK">Ok
                 </label>
                 <label class="radio-inline">
                   <input type="radio" onclick="mover(this)" class="radioInput" name="quality" value="Good">Good
                 </label>
                 <label class="radio-inline">
                   <input type="radio" onclick="mover(this)" class="radioInput" name="quality" value="Great">Great
                 </label>
               </div>
            </div>
            <div class="form-group" id="fGroup4">
              <div class="col-sm-offset-1">
                <label class="text-warning">
                    <a href="#" data-toggle="popover">
                      Library new to you
                    </a>
                  </label>
              </div>
              <br />
              <div class="col-xs-offset-1">
                <!-- same thing for the checkbos -->
                <label class="checkbox">
                  <input type="checkbox" onclick="mover(this)" class="checkboxInput" name="checkboxs[]" value="Bootstrap.Native">Bootstrap.Native
                </label>
                <label class="checkbox">
                  <input type="checkbox" onclick="mover(this)" class="checkboxInput" name="checkboxs[]" value="Bootswatch">Bootswatch
                </label>
                <label class="checkbox">
                  <input type="checkbox" onclick="mover(this)" class="checkboxInput" name="checkboxs[]" value="React-Bootsrap">React-Bootsrap
                </label>
                <label class="checkbox">
                  <input type="checkbox" onclick="mover(this)" class="checkboxInput" name="checkboxs[]" value="React php">React Php
                </label>
                <label class="checkbox">
                  <input type="checkbox" onclick="mover(this)" class="checkboxInput" name="checkboxs[]" value="ReactJS.NET">ReactJS.NET
                </label>
              </div>
            </div>
            <div class="form-group" id="fGroup5">
              <div class="col-sm-offset-1">
                <label class="text-warning">
                  <a href="#" data-toggle="tooltip" data-placement="top" title="Require">
                    Favorite new library
                  </a>
                </label>
              </div>
              <!-- Select and options -->
              <select name="fav" class="selectInput form-control" onchange="mover(this)">
                <option>Bootstrap.Native</option>
                <option>Bootswatch</option>
                <option>React-Bootsrap</option>
                <option>React Php</option>
                <option>ReactJS.NET</option>
              </select>
            </div>
            <div class="form-group" id="fGroup6">
              <div class="col-sm-offset-1">
                <label  class="text-warning">
                    <a href="#" data-toggle="tooltip" data-placement="top" title="Require">
                      Comment:
                    </a>
                </label>
              </div>
              <textarea onblur="mover(this)" class="textareaInput form-control" name="message" rows="5"></textarea>
            </div>
            <div class="modal fade" id="contentSure" role="dialog">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    <h2 class="modal-title">Are you sure</h2>
                  </div>
                  <div class="modal-body alert alert-info">
                    <p>If so click the button</p>
                    <button type="submit" class="btn btn-default">Done</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a class="btn btn-default" data-toggle="modal" href="#contentSure">Sumbit</a>
        </form>
      </div>
      <!-- progress bar fills out whe completing the form -->
      <div class="panel-footer">
        <div class="progress">
          <div class="progress-bar progress-bar-info progress-bar-striped" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style="width:0%">
          </div>
        </div>
      </div>
    </div>
    <aside class="asider" id="socialMedia">
          <nav>
            <ul id="scrollSpy" class="nav nav-pills nav-stacked">
              <li class="active"><a href="#fGroup1">First Name</a></li>
              <li><a href="#fGroup2">Last Name</a></li>
              <li><a href="#fGroup3">Over all experience</a></li>
              <li><a href="#fGroup4">Library new to you</a></li>
              <li><a href="#fGroup5">Favorite new library</a></li>
              <li><a href="#fGroup6">Comment:</a></li>
            </ul>
        </nav>
    </aside>
  </div>
</article>
