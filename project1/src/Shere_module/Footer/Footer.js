import React from 'react'
import { Link } from 'react-router-dom'
// import "./Footer.css"

function Footer() {
  return (
    <>
      <footer id="footer" className="top-space" backgroundColor="grey">
        <div className="footer1 ">
          <div className="container  ">
            <div className="row" >
              <div className="col-md-5 panel" style={{ marginTop: "60px" }}>
                <h3 className="panel-title">Lates News</h3>
                <div className="panel-body">
                  <p>Lorem ipsum dolor amet, consectetur adipiscing elit. Aenean leo lectus sollicitudin convallis eget libero. Aliquam laoreet tellus ut libero semper, egestas velit malesuada. Sed non risus eget dolor amet vestibulum ullamcorper. Integer feugiat molestie.</p>
                </div>
              </div>
              <div className="col-md-4 panel contact" style={{ marginTop: "60px" }}>
                <h3 className="panel-title">
                  Contact Info
                </h3>
                <div className="panel-body">
                  <p>Lorem ipsum dolor amet, consectetur adipiscing ipsum dolor.</p>
                  <ul>
                    <li><i className="fa fa-phone"></i>1-123-345-6789</li>
                    <li><Link href="#"><i className="fa fa-envelope-o"></i> mailto:contact@webthemez.com</Link></li>
                    <li><i className="fa fa-flag"></i>123 Smith Drive, Baltimore, MD 21212</li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3 panel" style={{ marginTop: "60px" }}>
                <h3 className="panel-title">Follow Us</h3>
                <div className="panel-body">

                </div>
              </div>
            </div>

          </div>
        </div>

        <hr style={{ backgroundColor: "white" }} />
        <div className="footer2">
          <div className="container">
            <div className="row">
              <div className="col-md-6 panel">
                <div className="panel-body">
                  <p className="simplenav"> <a href="index.html">Home</a> | <a href="about.html">About</a> | <a href="services.html">Services</a> | <a href="portfolio.html">Portfolio</a> | <a href="contact.html">Contact</a> </p>
                </div>
              </div>
              <div className="col-md-6 panel">
                <div className="panel-body">
                  <p className="text-right"> Copyright © 2014. Template by <a href="http://webthemez.com/" rel="develop">WebThemez.com</a> </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
