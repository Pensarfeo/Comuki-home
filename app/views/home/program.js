import {Join} from "views/layout/contactModal";
import danceIm from 'public/images/dance.svg'
import { useState } from 'react';


function JoinButton () {
  const [showModal, toggleModal] = useState(false);
  return(
    <>
      <Join toggleModal = {() => toggleModal(!showModal)} showModal = {showModal}/>        
      <button className = "button button-primary button-shadow" onClick={() => toggleModal(!showModal)} >
        Join
      </button>
    </>
  )
}


export default function Program() {
  return (
    <section className = "section-lg bg-default bg-gray-100">
      <div className = "container">
        <div className = "row row-30 align-items-lg-center">
          <div className = "col-lg-7 text-center text-lg-left">
            <div className = "animate-box">
              <div
                className = "wow slideInLeft"
              >
                <img
                  src={danceIm}
                  alt=""
                  width="563"
                  height="509"
                />
              </div>
            </div>
          </div>
          <div className = "col-lg-5 col-xl-5">
            <div className = "animate-box">
              <h2
                className = "wow slideInRight"
              >
                Our program
              </h2>

              <p
                className = "wow slideInRight"
              >
                Our belief is that we are all doing what we can. While all books
                and programs tell you how you should be, we will tell you what
                you should do. You don't need go through decades of
                psychotherapy in order to become a better parent, you can do it
                now, with few simple changes.
              </p>
            </div>
            <div className = "button-block group-lg wow fadeIn">
              <JoinButton/>
              <a className = "button button-default-outline" href="#contact">
                Contact us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
