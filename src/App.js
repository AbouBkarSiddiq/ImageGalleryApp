import React, { useEffect, useState } from 'react';
import Loader from "react-loader-spinner";
import ImageCard from './components/ImageCard';
import './App.css';
import { ImageSearch } from './components/ImageSearch';

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState('');

  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`)
      .then(res => res.json())
      .then(data => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch(err => console.log(err));
  }, [term]);

  return (
    <div className="px-4 md:px-16 lg:px-20">
      <ImageSearch searchText={(text) => setTerm(text)} />
      {!isLoading && images.length === 0 && <h1 className="text-4xl text-center mx-auto mt-32">No images Found</h1>}
      {isLoading ? <div className='flex justify-center'><Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={8000} //8 secs
      /> </div>: 
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 object-contain">
        {images.map(image => (
          <ImageCard key={image.id} image={image} />
        ))}
      </div>}
    </div>
  );
}

export default App;
