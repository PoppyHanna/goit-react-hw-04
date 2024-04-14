// import { useState } from 'react'
import { HotToastProvider } from 'react-hot-toast';



import SearchBar from './components/search/SearchBar';
import Loader from './components/loader/Loader';
import ErrorMessage from './components/error/ErrorMessage';
import ImageGallery from './components/gallery/ImageGallery';
import ImageModal from './components/modal/ImageModal';
import LoadMoreBtn from './components/load/LoadMoreBtn';
// import ImageCard from './components/card/ImageCard';


import './App.css'


export default function App() {
 
  const handleSubmit = (query) => {
    // Додайте код для обробки відправленого значення форми тут
    console.log('Search value:', query);
  };

  return (
    <HotToastProvider>
      <>
        
      <SearchBar onSubmit={handleSubmit}/>
        <Loader />
        {/* <ImageCard/> */}
      <ErrorMessage />
      <ImageGallery />
      <ImageModal />
      <LoadMoreBtn />
        

    </>
    </HotToastProvider>
  )
}

 
