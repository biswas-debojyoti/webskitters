import React from 'react'
import './Navbar.css';
export default function Navbar() {
  return (
    // <a class="navbar-brand" id="logo" href="#">Light <span id="logo1">  UP</span></a>
    <div>
      <div className='main_navbar'>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" id="logo" href="#">Light <span id="logo1">  UP</span></a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Features</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Pricing</a>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled">Disabled</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div id="carousel_image" class="carousel-inner">
          <div class="carousel-item active">
            <img className="image1" src="https://fastly.picsum.photos/id/350/536/354.jpg?hmac=_FW1TlZ0o-vFFUN5WZgMtGCyi221yogDpsLGwvV28uk" class="d-block w-100" alt="1st_img" />
          </div>
          <div class="carousel-item">
            <img className="image1" src="https://fastly.picsum.photos/id/350/536/354.jpg?hmac=_FW1TlZ0o-vFFUN5WZgMtGCyi221yogDpsLGwvV28uk" class="d-block w-100" alt="2nd_img" />
          </div>
          <div class="carousel-item">
            <img className="image1" src="https://fastly.picsum.photos/id/870/536/354.jpg?blur=2&grayscale&hmac=A5T7lnprlMMlQ18KQcVMi3b7Bwa1Qq5YJFp8LSudZ84" class="d-block w-100" alt="3rd_img" />
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-target="#carouselExampleIndicators" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-target="#carouselExampleIndicators" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </button>
      </div>

      <div className='text'>
        <h1>Our Services</h1>
        <h5>WenTo creative technology company providing key digital services for everyone.</h5>
      </div>
      <div class="container">
        <div className='box' >
          <img className='logosize' src="https://webthemez.com/demo/lightup-Interior-design-bootstrap-template/assets/img/services/4.svg" alt="logo" />
          <h2>Home Interior</h2>
          <p>Achieve virtually any look and layout design within one UI Kit solution.</p>
        </div>
        <div className='box' >
          <img className='logosize' src="https://webthemez.com/demo/lightup-Interior-design-bootstrap-template/assets/img/services/4.svg" alt="logo" />
          <h2>Home Interior</h2>
          <p>Achieve virtually any look and layout design within one UI Kit solution.</p>
        </div>
        <div className='box' >
          <img className='logosize' src="https://webthemez.com/demo/lightup-Interior-design-bootstrap-template/assets/img/services/4.svg" alt="logo" />
          <h2>Home Interior</h2>
          <p>Achieve virtually any look and layout design within one UI Kit solution.</p>
        </div>
        <div className='box' >
          <img className='logosize' src="https://webthemez.com/demo/lightup-Interior-design-bootstrap-template/assets/img/services/4.svg " alt="logo" />
          <h2>Home Interior</h2>
          <p>Achieve virtually any look and layout design within one UI Kit solution.</p>
        </div>
        <div className='box' >
          <img className='logosize' src="https://webthemez.com/demo/lightup-Interior-design-bootstrap-template/assets/img/services/4.svg" alt="logo" />
          <h2>Home Interior</h2>
          <p>Achieve virtually any look and layout design within one UI Kit solution.</p>
        </div>
        <div className='box' >
          <img className='logosize' src="https://webthemez.com/demo/lightup-Interior-design-bootstrap-template/assets/img/services/4.svg" alt="logo" />
          <h2>Home Interior</h2>
          <p>Achieve virtually any look and layout design within one UI Kit solution.</p>
        </div>

      </div>
      <div className='about_us'>
        <div className="about_head">
          <h1>About Us</h1>
          <h5>WenTo creative technology company providing key </h5>
          <h5 className='h52nd'>digital services for everyone.</h5>
        </div>
        <div className='about_detail'>

          <img className='aboutUsImage' src="https://webthemez.com/demo/lightup-Interior-design-bootstrap-template/assets/img/about/1.jpg" alt="aboutUsImage" />
          <div className='about_detail_sub'><h1>Who We Are</h1>
            <h5>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius eligendi fugiat!</h5></div>
        </div>
      </div>
      <div className='about_detail_1'>


        <div className='about_detail_sub_1'><h1>Who We Are</h1>
          <h5>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius eligendi fugiat!</h5></div>
        <img className='aboutUsImage_1' src="https://webthemez.com/demo/lightup-Interior-design-bootstrap-template/assets/img/about/2.jpg" alt="aboutUsImage" />
      </div>


    </div>

  )
}

