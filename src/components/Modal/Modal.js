import Modal from 'react-modal';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  Modal.setAppElement('#root');

export const ModalWindow = ({largeImageURL, alt, closeModal, modalIsOpen}) => {
    return (
        <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <button onClick={closeModal}>close</button>
        <div>
        <img src={largeImageURL} alt={alt} />
        </div>
    
      </Modal>
    //     <div className="overlay">
    //     <div className="modal">
    //       <img src={largeImageURL} alt={alt} />
    //     </div>
    //   </div>
            )
}