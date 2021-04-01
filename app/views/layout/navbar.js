import logo from 'public/images/logo.svg'

function NavItem({text, href}) {
  return(
    <li className="nav-item">
      <a className="nav-link" href={href}>
        {text}
      </a>
    </li>  
  )
}




export default function NavBar() {
  return (
    <header className="section page-header">
      <nav className="navbar navbar-expand-lg navbar-light">
        <a className="navbar-brand" href="/#" style={{position: "relative", top: "-7px"}}>
          <img
            className="brand-logo-light"
            src={logo}
            alt=""
            width="125"
            height="50"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse" id="navbarTogglerDemo02" style={{"justifyContent": "flex-end"}}>
          <ul className="navbar-nav mt-2 mt-lg-0" style={{"paddingLeft": "15px"}}>
            <NavItem text = "About Us" href="#aboutUs"/>
            <NavItem text = "Curriculum" href="#curriculum"/>
            <NavItem text = "Testimonials" href="#testimonials"/>
            <NavItem text = "How it Works" href="#howItWorks"/>
            <NavItem text = "Get in Touch" href="#contact"/>
            <li className="nav-item">
              <div className="rd-navbar-button-block">
                <a
                  className="button button-default-outline"
                  href="#subscride"
                  data-custom-scroll-to="subscride"
                >
                  Join Now
                </a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
