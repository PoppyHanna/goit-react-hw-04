// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import ImageCard from '../card/ImageCard';
// import ErrorMessage from '../error/ErrorMessage';
// import Loader from '../loader/Loader';

// const ImageGallery = () => {
//   const [images, setImages] = useState([]);
//  const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');
    
    
//   useEffect(() => {
//     const fetchImages = async () => {
//       try {
//         const response = await axios.get(
//           'https://api.unsplash.com/photos/?client_id=DbWHxSigq1c_dvzotJhjcSYPRMx6hz8wPZYRoQgApMQ'
//         );
//           setImages(response.data);
//           setLoading(false);
//       } catch (error) {
//           setError('Error fetching images. Please try again later.');
//           setLoading(false);
//       }
//     };

//     fetchImages();
//   }, []);

//       if (loading) {
//     return <Loader />;
//   }
    
//   if (images.length === 0) {
//       // return <p>No images to display</p>;
//        return <ErrorMessage message={error} />;
//   }

//   return (
//     <ul>
//       {images.map((image) => (
//         <li key={image.id}>
//           <ImageCard imageUrl={image.urls.small} altText={image.alt_description} />
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default ImageGallery;



import ImageCard from '../card/ImageCard';
import ErrorMessage from '../error/ErrorMessage';
import LoadMoreBtn from '../load/LoadMoreBtn';
import Loader from '../loader/Loader';


const ImageGallery = ({ images, loading, error, onLoadMore }) => {
  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }

  return (
    <>
      <ul>
        {images.map((image) => (
          <li key={image.id}>
            <ImageCard imageUrl={image.urls.small} altText={image.alt_description} />
          </li>
        ))}
      </ul>
      <LoadMoreBtn onClick={onLoadMore} />
    </>
  );
};

export default ImageGallery;
