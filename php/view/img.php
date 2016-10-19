<!-- by Correy WInke -->
<!-- 10/17/16 -->
<!-- image gallery I built -->
<article>
  <div class="container">
    <div class="panel panel-info firstThing">
      <div class="panel-heading">Image Gallery</div>
      <div class="panel-body">
        <div class="media">
          <div class="media-left">
            <!-- labels for the different images -->
            <p onmouseover="imgHover(this)" class="Bootstrap"><abbr title="Hover over Me">Bootstrap logo</abbr></p>
            <p onmouseover="imgHover(this)" class="React"><abbr title="Hover over Me">React logo</abbr></p>
            <p onmouseover="imgHover(this)" class="Me"><abbr title="Hover over Me">Developer of site</abbr></p>
          </div>
          <div class="media-body">
            <div class="row">
              <div class="col-xs-offset-1">
                <!--- change out the img for another or changes part of image -->
                <img class="img-responsive img-rounded" src="../../public/images/Boostrap_logo.svg" alt="Bootstrap logo">
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="panel-footer">
        <div class="btn-group">
          <!-- different buttons to change how the images is styled -->
          <button type="button" onclick="btnClik(this)" class="btn btn-info active">Rounded</button>
          <button type="button" onclick="btnClik(this)" class="btn btn-info">Circle</button>
          <button type="button" onclick="btnClik(this)" class="btn btn-info">Thumbnail</button>
        </div>
      </div>
    </div>
  </div>
<article>
