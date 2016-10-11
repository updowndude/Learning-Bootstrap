<article>
  <div class="container">
    <div class="panel panel-info firstThing">
      <div class="panel-heading">FeedBack</div>
      <div class="panel-body">
        <form action="../controller/action.php" method="post">
          <input type="hidden" name="action" value="done" />
          <div class="form-group">
            <div class="col-sm-offset-1">
              <label class="text-warning" for="fName">First Name</label>
            </div>
            <input type="text" oninput="mover(this)" class="textFnameInput form-control" name="fName" id="fName">
          </div>
          <div class="form-group">
            <div class="col-sm-offset-1">
              <label class="text-warning" for="lName">Last Name</label>
            </div>
            <input type="text" oninput="mover(this)" class="textLnameInput form-control" name="lName" id="lName">
          </div>
          <div class="form-group">
            <div class="col-sm-offset-1">
              <label class="text-warning" for="lName">Over all experience</label>
            </div>
            <br />
              <div class="col-xs-offset-1">
               <label class="radio-inline">
                 <input type="radio" onchange="mover(this)" class="radioInput" name="quality" value="Horrible">Horrible
               </label>
               <label class="radio-inline">
                 <input type="radio" onchange="mover(this)" class="radioInput" name="quality" value="Bad">Bad
               </label>
               <label class="radio-inline">
                 <input type="radio" onchange="mover(this)" class="radioInput" name="quality" value="OK">Ok
               </label>
               <label class="radio-inline">
                 <input type="radio" onchange="mover(this)" class="radioInput" name="quality" value="Good">Good
               </label>
               <label class="radio-inline">
                 <input type="radio" onchange="mover(this)" class="radioInput" name="quality" value="Great">Great
               </label>
             </div>
          </div>
          <div class="form-group">
            <div class="col-sm-offset-1">
              <label class="text-warning">Library new to you</label>
            </div>
            <br />
            <div class="col-xs-offset-1">
              <label class="checkbox">
                <input type="checkbox" onchange="mover(this)" class="checkboxInput" name="checkboxs[]" value="Bootstrap.Native">Bootstrap.Native
              </label>
              <label class="checkbox">
                <input type="checkbox"  onchange="mover(this)" class="checkboxInput" name="checkboxs[]" value="Bootswatch">Bootswatch
              </label>
              <label class="checkbox">
                <input type="checkbox" onchange="mover(this)" class="checkboxInput" name="checkboxs[]" value="React-Bootsrap">React-Bootsrap
              </label>
              <label class="checkbox">
                <input type="checkbox" onchange="mover(this)" class="checkboxInput" name="checkboxs[]" value="React php">React Php
              </label>
              <label class="checkbox">
                <input type="checkbox" onchange="mover(this)" class="checkboxInput" name="checkboxs[]" value="ReactJS.NET">ReactJS.NET
              </label>
            </div>
          </div>
          <div class="form-group">
            <div class="col-sm-offset-1">
              <label class="text-warning" for="sel1">Favorite new library</label>
            </div>
            <select name="fav" class="selectInput form-control" onchange="mover(this)">
              <option>Bootstrap.Native</option>
              <option>Bootswatch</option>
              <option>React-Bootsrap</option>
              <option>React Php</option>
              <option>ReactJS.NET</option>
            </select>
          </div>
          <div class="form-group">
            <div class="col-sm-offset-1">
              <label  class="text-warning" for="comment">Comment:</label>
            </div>
            <textarea oninput="mover(this)" class="textareaInput form-control" name="message" rows="5"></textarea>
          </div>
          <button type="submit" class="btn btn-default">Submit</button>
        </form>
      </div>
      <div class="panel-footer">
        <div class="progress">
          <div class="progress-bar progress-bar-info progress-bar-striped" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style="width:0%">
          </div>
        </div>
      </div>
    </div>
  </div>
<article>
