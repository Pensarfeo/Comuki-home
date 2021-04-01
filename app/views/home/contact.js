import connectIm from 'public/images/connect.svg'
export default function Contact() {
  return(
    <section id="contact" className="section-lg bg-default section-decoration-2">
      <div className="container">
        <div className="row row-30 align-items-lg-center justify-content-center">
          <div className="col-lg-6 text-center">
            <div className="animate-box">
              <div
                className="wow slideInLeft"
                data-wow-delay="0.2s"
              >
              <img
                src={connectIm}
                alt=""
                width="499"
                height="550"
              />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div
              className="box-contact-form wow fadeIn"
              data-wow-delay="0.2s"
            >
              <h4 className="font-weight-light">
                We would love to get to know you!
              </h4>
              <p className="font-weight-light">
                Hi Im Debbie, I have helped hundreds of parents gain
                back control of their life, tell me what you need and I will
                work hard to help you.
              </p>
              <form
                className="rd-form rd-mailform"
                data-form-output="form-output-global"
                data-form-type="contact"
                method="post"
                action="https://getform.io/f/0200877d-bcc8-4f9e-bf13-033a2baebe99"
              >
                <div className="row row-20">
                  <div className="col-12">
                    <div className="form-wrap">
                      <input
                        className="form-input"
                        id="contact-name"
                        type="text"
                        name="name"
                        data-constraints="@Required"
                        placeholder = 'Your Name'
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-wrap">
                      <input
                        className="form-input"
                        id="contact-phone"
                        type="email"
                        name="email"
                        required
                        placeholder = 'Your Email'
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-wrap">
                      <textarea
                        className="form-input form-control-last-child"
                        id="contact-message"
                        name="message"
                        placeholder = "Your Message"
                        data-constraints="@Required"
                      />
                      
                    </div>
                  </div>
                  <div className="col-12">
                    <button
                      className="button button-sm button-primary"
                      type="submit"
                    >
                      send
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}