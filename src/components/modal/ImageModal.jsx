import Modal from 'react-modal';

const ImageModal = ({ isOpen, image, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Image Modal"
      ariaHideApp={false}
    >
      <button onClick={onClose}>Close</button>
      {image && (
        <>
          <img src={image.urls.full} alt={image.alt_description} /> {/* Змінено urls.regular на urls.full */}
          <p>Author: {image.user.name}</p>
          <p>Likes: {image.likes}</p>
          <p>Description: {image.description || 'No description available'}</p>
        </>
      )}
    </Modal>
  );
};

export default ImageModal;
