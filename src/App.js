import { useState } from "react";
import './App.css';

function App() {
  const images = ['cat.jpg', 'cat_1.jpg', 'cat_2.jpg'];
  const [index, setIndex] = useState(0);
  const [currentImg, setCurrentImg] = useState(images[index]);

  const next = () => {
    const condition = index < images.length -1 ? true : false;
    condition ? setIndex(index +1) : setIndex(0);
    setCurrentImg(images[index]); 
  }

  const previous = () => {
    const condition = index > 0 ? true : false;
    condition ? setIndex(index -1) : setIndex(images.length -1);
    setCurrentImg(images[index]);
  }


  return (
    <>
      <h1>Cats</h1>
      <div className="container">
        <div className="img__container">
          <img src={require(`./images/${currentImg}`)} alt='cat' style={{maxWidth: '600px'}}></img>
        </div>
        <button onClick={() => previous()}>Previous</button>
        <button onClick={() => next()}>Next</button>
      </div>
    </>
  );
}

export default App;
