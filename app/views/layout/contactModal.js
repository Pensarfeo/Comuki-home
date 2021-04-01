import { Children } from "react";
import Modal, {CloseModalButton} from 'components/layout/modal'


const modalContainerCenter = {
  height: '100%',
  alignItems: 'center',
  justifyContent: 'center'
}




export function Join({showModal, toggleModal}) {
  // showModal = true
  return (
    <Modal showModal = {showModal} toggleModal = {toggleModal}>
      <div className="joinModal col-md-8 align-self-center">
        <CloseModalButton  toggleModal = {toggleModal}/>
        <div
          className="d-flex flex-column"
          style={modalContainerCenter}
        >
          <h4 style={{textAlign: 'center'}}>
            Hi, we are in private beta
          </h4>
          <span style={{textAlign: 'center'}}>
            Let us know if you want to join and we will send you an
            invite
          </span>

          <form
            id="subscribeForm"
            className="rd-form rd-mailform rd-form-inline"
            data-form-output="form-output-global"
            data-form-type="subscribe"
            method="post"
            action="https://getform.io/f/0200877d-bcc8-4f9e-bf13-033a2baebe99"
            style={{marginTop: '60px'}}
          >
            <div className="form-wrap">
              <input
                className="form-input form-input-shadow form-control-has-validation"
                id="subscribe-form-email"
                type="email"
                name="email"
                placeholder="Your E-mail"
                required
              />
              <span className="form-validation"></span>
            </div>
            <div className="form-button">
              <button
                className="button button-primary button-lg button-shadow"
                type="submit"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </Modal>

  );
}
