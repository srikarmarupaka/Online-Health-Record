import React from 'react'

export default function headers() {
    return (
        <div>
  <header id="header" className="fixed-top">
    <div className="container d-flex align-items-center">
      
      <a href="index.html" className="logo mr-auto"><img src="assets/img/logo.png" alt="" /></a>
      {/* <!-- Uncomment below if you prefer to use an image logo --> */}
      {/* <!-- <h1 className="logo mr-auto"><a href="index.html">Medicio</a></h1> --> */}
      
      <nav className="nav-menu d-none d-lg-block">
        <ul>
          <li className="active"><a href="index.html">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#departments">Departments</a></li>
          <li><a href="#doctors">Doctors</a></li>
           {/* <li className="drop-down"><a href="">Drop Down</a>
            <ul>
              <li><a href="#">Drop Down 1</a></li>
              <li className="drop-down"><a href="#">Deep Drop Down</a>
                <ul>
                  <li><a href="#">Deep Drop Down 1</a></li>
                  <li><a href="#">Deep Drop Down 2</a></li>
                  <li><a href="#">Deep Drop Down 3</a></li>
                  <li><a href="#">Deep Drop Down 4</a></li>
                  <li><a href="#">Deep Drop Down 5</a></li>
                </ul>
              </li>
              <li><a href="#">Drop Down 2</a></li>
              <li><a href="#">Drop Down 3</a></li>
              <li><a href="#">Drop Down 4</a></li>
            </ul>
          </li>  */}
          <li><a href="#contact">Contact</a></li>
          
        </ul>
                    </nav>
                    {/* <!-- .nav-menu --> */}
      
      <a href="#appointment" className="appointment-btn scrollto"><span className="d-none d-md-inline">Make an</span> Appointment</a>
      
    </div>
            </header>
            {/* <!-- End Header --> */}
            
        </div>
    )
}
