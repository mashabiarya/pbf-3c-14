import React, {Component} from 'react';

class Contact extends React.Component{
    render(){
        return(

            <div>
                
    {/* Page Content */}
  {/* Banner Starts Here */}
  <div className="heading-page header-text">
    <section className="page-heading">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-content">
              <h4>contact us</h4>
              <h2>let’s stay in touch!</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  {/* Banner Ends Here */}
  <section className="contact-us">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="down-contact">
            <div className="row">
              <div className="col-lg-8">
                <div className="sidebar-item contact-form">
                  <div className="sidebar-heading">
                    <h2>Send us a message</h2>
                  </div>
                  <div className="content">
                    <form id="contact" action method="post">
                      <div className="row">
                        <div className="col-md-6 col-sm-12">
                          <fieldset>
                            <input name="name" type="text" id="name" placeholder="Your name" required />
                          </fieldset>
                        </div>
                        <div className="col-md-6 col-sm-12">
                          <fieldset>
                            <input name="email" type="text" id="email" placeholder="Your email" required />
                          </fieldset>
                        </div>
                        <div className="col-md-12 col-sm-12">
                          <fieldset>
                            <input name="subject" type="text" id="subject" placeholder="Subject" />
                          </fieldset>
                        </div>
                        <div className="col-lg-12">
                          <fieldset>
                            <textarea name="message" rows={6} id="message" placeholder="Your Message" required defaultValue={""} />
                          </fieldset>
                        </div>
                        <div className="col-lg-12">
                          <fieldset>
                            <button type="submit" id="form-submit" className="main-button">Send Message</button>
                          </fieldset>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="sidebar-item contact-information">
                  <div className="sidebar-heading">
                    <h2>contact information</h2>
                  </div>
                  <div className="content">
                    <ul>
                      <li>
                        <h5>090-484-8080</h5>
                        <span>PHONE NUMBER</span>
                      </li>
                      <li>
                        <h5>info@company.com</h5>
                        <span>EMAIL ADDRESS</span>
                      </li>
                      <li>
                        <h5>123 Aenean id posuere dui, 
                          <br />Praesent laoreet 10660</h5>
                        <span>STREET ADDRESS</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-12">
          <div id="map">
            <iframe src="https://maps.google.com/maps?q=Av.+L%C3%BAcio+Costa,+Rio+de+Janeiro+-+RJ,+Brazil&t=&z=13&ie=UTF8&iwloc=&output=embed" width="100%" height="450px" frameBorder={0} style={{border: 0}} allowFullScreen />
          </div>
        </div>
      </div>
    </div>
  </section>

            </div>

            )
        }
}
export default Contact;