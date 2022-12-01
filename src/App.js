import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import Bookmarks from './bookmarks';

function App() {
  const [images, setImages] = useState(null)
  const [searchinput, setSearchinput] = useState("apple")
  const [bookmarks, setBookmarks] = useState([])

  const handleSubmit = () => {
    axios.get(`https://pixabay.com/api/?key=31754115-82ea9f6a517e747ca70dedde8&q=${searchinput}&image_type=photo
  `,).then(res => {
      setImages(res.data.hits)
    })
  }

  const handleBookmark = (item) => {
    let bookfil = bookmarks.some((img)=>{
     return img==item
    })
    if(!bookfil){
      setBookmarks([...bookmarks, item])
    }
    
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<>
            <div className="headingContainer">
              <h2>React Photo Search</h2>
              <button id="bookmarks"><Link id="linkbook" to="/bookmarks">Bookmarks</Link></button>
            </div>
            <div className="searchContainer">
              <input type="text" placeholder="Search free high resolution images" onChange={(e) => setSearchinput(e.target.value)} />
              <button id="search" onClick={e => handleSubmit(e)}>Search</button>
            </div>
            <div className="results">
              {images && images.map((image) => {
                return (
                  <>
                    <div className='imgcon' key={image}>
                      <i class="fa-regular fa-bookmark bkm" onClick={() => handleBookmark(image)}>
                      </i>
                      <img className='imgs' src={image.webformatURL} />
                    </div>
                  </>
                )
              })}
            </div>
          </>}></Route>
          <Route path='/bookmarks' element={<Bookmarks bookmarks={bookmarks} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
