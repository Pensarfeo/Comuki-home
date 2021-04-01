export default function Footer() {
  return (
    <footer className="footer-classic bg-default text-center text-sm-left">
      <div className="section-sm">
        <div className="container">
          <div className="row row-30">
            <div className="col-sm-6 col-lg-3">
              <h4 className="footer-title">Company</h4>
              <ul className="list-sm footer-list">
                <li>
                  <span>Mail: </span>
                  <a href="mailto:#">camilla@comuki.com</a>
                </li>
                <li>
                  <a href="about-us.html">About us</a>
                </li>
                <li>
                  <a href="team.html">Team</a>
                </li>
                <li>
                  <a href="portfolio.html">Portfolio</a>
                </li>
                <li>
                  <a href="#">Pricing</a>
                </li>
              </ul>
            </div>
            <div className="col-sm-6 col-lg-3">
              <h4 className="footer-title">Our social networks</h4>
              <p>
                Join us on social media to receive the latest news and updates.
              </p>
              <ul className="list-social list-inline">
                <li className="list-inline-item">
                  <a className="icon fa-facebook-f" href="/#" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="section-xs">
        <div className="container">
          <div className="row row-30">
            <div className="col-md-6">
              <p className="rights">
                <span>©&nbsp; </span>
                <span className="copyright-year">2021</span>
                <span>&nbsp;</span>
                <span>Comuki</span>
                <span>.&nbsp; All Rights Reserved. &nbsp;</span>
              </p>
            </div>
            <div className="col-md-6 text-md-right">
              <ul className="footer-list-inline">
                <li>
                  <a href="privacy-policy.html">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">FAQ</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
