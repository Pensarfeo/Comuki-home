
export default function subscribe() {
  return (
    <section className="section-md bg-gray-100 section-decoration-1" id="subscride">
      <div className="container">
        <div className="row row-30 justify-content-center">
          <div className="col-sm-8 col-lg-7 text-center">
            <div className="block-sm animate-box">
              <h2 className="wow fadeInDown">
                Subscribe to our news and regular updates
              </h2>
            </div>
          </div>
          <div className="col-md-7 col-lg-6">
            <div
              className="wow fadeInUp"
              data-wow-delay=".2s"
            >
              <form
                className="rd-form rd-mailform rd-form-inline"
                data-form-output="form-output-global"
                data-form-type="subscribe"
                method="post"
                action="https://getform.io/f/0200877d-bcc8-4f9e-bf13-033a2baebe99"
              >
                <div className="form-wrap">
                  <input
                    className="form-input form-input-shadow form-control-has-validation"
                    id="subscribe-form-email"
                    type="email"
                    name="email"
                    required
                    placeholder='Your Email'
                  />

                </div>
                <div className="form-button">
                  <button
                    className="button button-primary button-lg button-shadow"
                    type="submit"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
