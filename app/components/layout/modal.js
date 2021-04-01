const modalContainer = {
  marginTop: 'calc(50vh - 220px)'
}

const modalButtonStyle = {
  position: 'absolute',
  top: '-6px',
  right: '-6px',
  height: "26px",
  width: "26px",
  fontSize: '20px',
  lineHeight: '26px',
  
}

export function CloseModalButton({toggleModal}) {
  return(
    <i className="button-tight fas fa-times" style = {modalButtonStyle} onClick = {toggleModal}/>
  )
}
export default function Modal({showModal, toggleModal, children}) {
  if (!showModal) return ""
  return(
    <div className="modal" onClick = {toggleModal}>
      <div className="container" style = {{height: '100vh'}}>
        <div className="row" style = {{height: '100vh'}}>
          <div className="modal-dialog align-self-center" style = {{width: "100%"}} onClick = {(e) => e.stopPropagation()}>
                
            {children}
          </div>
        </div>
      </div>
    </div>  
  )
}