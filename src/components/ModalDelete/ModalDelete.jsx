import Modal from "react-modal";

Modal.setAppElement("#root");

const ModalDelete = ({ isOpen, onClose, onConfirm }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Delete Contact"
      style={{
        overlay: { backgroundColor: "rgba(0,0,0,0.5)" },
        content: {
          maxWidth: "400px",
          margin: "auto",
          borderRadius: "10px",
          padding: "20px",
          textAlign: "center",
        },
      }}
    >
      <h2>Confirm Deletion</h2>
      <p>Do you really want to delete this contact?</p>
      <div style={{ marginTop: "15px" }}>
        <button onClick={onConfirm} style={{ marginRight: "10px" }}>
          Delete
        </button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </Modal>
  );
};

export default ModalDelete;
