<!-- by Correy WInke -->
<!-- 10/17/16 -->
<!-- image gallery I built -->
<article id="imgG" class="tab-pane fade">
  <div class="container">
    <div class="panel panel-info firstThing">
      <div class="panel-heading" data-toggle="collapse" data-target="#ImgImgG">Image Gallery</div>
      <div class="panel-body collapse" id="ImgImgG">
        <div class="media">
          <div class="media-left">
            <p onmouseover="imgHover(this)" class="Bootstrap"><abbr title="Hover over Me">Bootstrap logo</abbr></p>
            <p onmouseover="imgHover(this)" class="React"><abbr title="Hover over Me">React logo</abbr></p>
            <p onmouseover="imgHover(this)" class="Me"><abbr title="Hover over Me">Developer of site</abbr></p>
          </div>
          <div class="media-body">
            <div class="row">
              <div class="col-xs-offset-1">
                <img class="img-responsive img-rounded" src="../../public/images/Boostrap_logo.svg" alt="Bootstrap logo">
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="panel-footer">
        <div class="btn-group">
          <!-- different buttons to change how the images is styled -->
          <button type="button" onclick="btnClik(this)" data-toggle="button" class="btn btn-info active">Rounded</button>
          <button type="button" onclick="btnClik(this)" data-toggle="button" class="btn btn-info">Circle</button>
          <button type="button" onclick="btnClik(this)" data-toggle="button" class="btn btn-info">Thumbnail</button>
        </div>
      </div>
    </div>
    <div class="panel-group" id="imgData">
      <div class="panel panel-info">
        <div class="panel-heading">
          <h3 class="panel-title">
            <a data-toggle="collapse" data-parent="#imgData" href="#effectData">
              Picture effects
            </a>
          </h3>
        </div>
        <div id="effectData" class="panel-collapse collapse">
          <div class="panel-body text-info">
            The effects that are applied are Bootsrap stand image effects.
          </div>
        </div>
      </div>
      <div class="panel panel-info">
        <div class="panel-heading">
          <h3 class="panel-title">
            <a data-toggle="collapse" data-parent="#imgData" href="#logoData">
              Different picture
            </a>
          </h3>
        </div>
        <div id="logoData" class="panel-collapse collapse">
          <div class="panel-body text-info">
            The information on the left hand side telll what the image is about.
          </div>
        </div>
      </div>
    </div>
    <div class="panel panel-info">
      <div class="panel-heading" data-toggle="collapse" data-target="#allImgImgG">
        <h3 class="panel-title">
          All of Images
        </h3>
      </div>
        <div class="panel-body collapse" id="allImgImgG">
          <div id="allImgCarousel" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
              <li data-target="#allImgCarousel" data-slide-to="0" class="active"></li>
              <li data-target="#allImgCarousel" data-slide-to="1"></li>
              <li data-target="#allImgCarousel" data-slide-to="2"></li>
              <li data-target="#allImgCarousel" data-slide-to="3"></li>
              <li data-target="#allImgCarousel" data-slide-to="4"></li>
              <li data-target="#allImgCarousel" data-slide-to="5"></li>
              <li data-target="#allImgCarousel" data-slide-to="6"></li>
              <li data-target="#allImgCarousel" data-slide-to="7"></li>
            </ol>

            <div class="carousel-inner" role="listbox">
              <div class="item active">
                <img src="../../public/images/Boostrap_logo.svg" alt="Bootsrap logo">
              </div>

              <div class="item">
                <img src="../../public/images/dkBG1.png" alt="Background">
              </div>

              <div class="item">
                <img src="../../public/images/dkBG2.png" alt="Background">
              </div>

              <div class="item">
                <img src="../../public/images/dkBG3.png" alt="Background">
              </div>

              <div class="item">
                <img src="../../public/images/dkBG4.png" alt="Background">
              </div>

              <div class="item">
                <img src="../../public/images/dkBG5.png" alt="Background">
              </div>

              <div class="item">
                <img src="../../public/images/me.jpg" alt="Author of the site">
              </div>

              <div class="item">
                <img src="../../public/images/reactLogo.png" alt="React logo">
              </div>
            </div>

            <!-- Left and right controls -->
            <a class="left carousel-control" href="#allImgCarousel" role="button" data-slide="prev">
              <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="right carousel-control" href="#allImgCarousel" role="button" data-slide="next">
              <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    </div>
</article>
