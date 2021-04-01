const modalContainer = {
  marginTop: 'calc(50vh - 220px)'
}

const modalButtonStyle = {
  position: 'absolute',
  top: '-12px',
  right: '-12px',
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
      <div className="modal-dialog" style={modalContainer} onClick = {(e) => e.stopPropagation()}>
        <div className="modal-content">
          <div className="modal-body">
            <div className=" container-sm">
              <div className="row" style={{justifyContent: 'center'}}>
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>  
  )
}