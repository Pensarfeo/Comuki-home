import { Route, Switch } from "react-router"; // react-router v4/v5

import Spinner from "components/spinner"

import NavBar from './views/layout/navbar'
import Header from './views/home/header'
import Program from './views/home/program'

import AboutUs from './views/home/aboutUs'
import Curriculum from './views/home/curriculum'
import Testimonials from './views/home/testimonials'
import HowItWorks from './views/home/howItWorks'
import Contact from './views/home/contact'
import Subscribe from './views/home/subscribe'
import Footer from './views/home/footer'

function App({ history, context, signedIn, loaded }) {
  return (
    <div className="App">
      <NavBar/>
      <Header/>
      <Program/>
      <AboutUs/>
      <Curriculum/>
      <Testimonials/>
      <HowItWorks/>
      <Contact/>
      <Subscribe/>
      <Footer/>
    </div>
  );
}



export default App;
