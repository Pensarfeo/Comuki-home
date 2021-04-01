import {useState} from 'react'
import styled from 'styled-components'
import mainImage from 'public/images/be.svg'

import Explainer from './explainer'

const MainImContainer = styled.div`
  visibility: visible;
`

const Title = styled.h1`
  visibility: visible;
`

const SubTitle = styled.p`
  visibility: visible;
`

const ButtonsContainer = styled.div`
  visibility: visible;
`


export default function Header() {
  const [showModal, toggleModal] = useState(false);
  const setModalState = () => toggleModal(!showModal)
  return (
    <>
      <Explainer toggleModal = {setModalState} showModal = {showModal}/>        
      <section className = "section-lg bg-default section-decoration-6 ">
        <div className = "container">
          <div className = "row row-50 align-items-lg-center justify-content-lg-between">
            <div className = "col-lg-6 order-lg-2">
              <div className = "animate-box">
                <MainImContainer
                  className = "wow slideInRight"
                >
                  <img
                    src={mainImage}
                    alt=""
                    width="584"
                    height="472"
                  />
                </MainImContainer>
              </div>
            </div>
            <div className = "col-lg-6 col-xl-5 order-lg-1">
              <div className = "animate-box">
                <Title>
                  Get back control of your life
                </Title>
                <SubTitle>
                  The first interactive parenting program focused on what you can
                  do rather than what you should do.
                </SubTitle>
                <button
                  className = "button button-primary button-shadow button-link button-video"
                  style = {{color: 'white'}}
                  onClick = {setModalState}
                >
                  <span>Listen to us</span>
                  <span className = "icon fa-play"></span>
                </button>
              </div>
              
            </div>
          </div>
        </div>
      </section>
    </>

  );
}
