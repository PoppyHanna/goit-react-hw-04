// import { useState } from 'react'
import SearchBar from './components/search/SearchBar';
import Loader from './components/loader/Loader';
import ErrorMessage from './components/error/ErrorMessage';
import ImageGallery from './components/gallery/ImageGallery';
import ImageModal from './components/modal/ImageModal';
import LoadMoreBtn from './components/load/LoadMoreBtn';


import './App.css'

function App() {
 

  return (
    <>
      <SearchBar />
      <Loader />
      <ErrorMessage />
      <ImageGallery />
      <ImageModal />
      <LoadMoreBtn />
    </>
  )
}

export default App
