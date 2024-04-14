

const ImageModal = ({ imageUrl, altText, author, likes, description, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button onClick={onClose}>Close</button>
        <img src={imageUrl} alt={altText} />
        <p>Author: {author}</p>
        <p>Likes: {likes}</p>
        <p>Description: {description}</p>
      </div>
    </div>
  );
};

export default ImageModal;
