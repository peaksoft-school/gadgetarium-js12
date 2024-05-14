interface ModalProps {
  children: React.ReactNode;
  open: boolean;
}

const Modal_Styles: React.CSSProperties = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#ffffff",
  zIndex: 1000
}

const Overlay_Styles: React.CSSProperties = {
  position: "fixed",
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 7)",
  zIndex: 1000
}

const ModalWindow: React.FC<ModalProps> = ({ open, children }) => {
  if(!open) return null
  return (
    <>
    <div style={Overlay_Styles}/>
    <div style={Modal_Styles}>
      {children}
    </div>
    </>
  )
}

export default ModalWindow