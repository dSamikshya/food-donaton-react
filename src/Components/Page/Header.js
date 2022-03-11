import React from 'react'

const Header = () => {
  return (
   <>
    <nav className="navbar navbar-expand-lg navbar-scroll fixed-top shadow-0 border-bottom border-dark">
  <div className="container">
    <a className="navbar-brand" href="#!"><i className="fab fa-mdb fa-4x" /></a>
    <button className="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <i className="fas fa-bars" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <a className="nav-link" href="#!">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#!">About </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#!">Contact</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#!">Event</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#!">Login</a>
        </li>
       
      </ul>
    </div>
  </div>
</nav>

<div id="carouselExampleControls" className="carousel slide mt-5" data-mdb-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp" className="d-block w-100" alt="Wild Landscape" />
    </div>
    <div className="carousel-item">
      <img src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp" className="d-block w-100" alt="Camera" />
    </div>
    <div className="carousel-item">
      <img src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp" className="d-block w-100" alt="Exotic Fruits" />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-mdb-target="#carouselExampleControls" data-mdb-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-mdb-target="#carouselExampleControls" data-mdb-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>
<section className="mb-4 mx-4" style={{backgroundColor:"#daf5db"}}>
  <h2 className="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
  <p className="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
    a matter of hours to help you.</p>
  <div className="row">
    <div className="col-md-9 mb-md-0 mb-5 ">
      <form id="contact-form" name="contact-form" action="mail.php" method="POST">
        <div className="row">
          <div className="col-md-6">
            <div className="md-form mb-0">
            <label htmlFor="name" className>Your name</label>
              <input type="text" id="name" name="name" className="form-control" />
             
            </div>
          </div>
          <div className="col-md-6">
            <div className="md-form mb-0">
            <label htmlFor="email" className>Your email</label>
              <input type="text" id="email" name="email" className="form-control" />
              
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="md-form mb-0">
            <label htmlFor="subject" className>Subject</label>
              <input type="text" id="subject" name="subject" className="form-control" />
            
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="md-form">
              <label htmlFor="message">Your message</label>
              <textarea type="text" id="message" name="message" rows={2} className="form-control md-textarea" defaultValue={""} />
              
            </div>
          </div>
        </div>
      </form>
      <div className="text-center text-md-left">
        <a className="btn btn-primary" onclick="document.getElementById('contact-form').submit();">Send</a>
      </div>
      <div className="status" />
    </div>
    <div className="col-md-3 text-center">
      <ul className="list-unstyled mb-0">
        <li><i className="fas fa-map-marker-alt fa-2x" />
          <p>San Francisco, CA 94126, USA</p>
        </li>
        <li><i className="fas fa-phone mt-4 fa-2x" />
          <p>+ 01 234 567 89</p>
        </li>
        <li><i className="fas fa-envelope mt-4 fa-2x" />
          <p>contact@mdbootstrap.com</p>
        </li>
      </ul>
    </div>
  </div>
</section>




   
</>

  )
}

export default Header