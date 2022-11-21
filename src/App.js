import { useState } from "react";
import './App.css';

function App() {
  const images = ['cat.jpg', 'cat_1.jpg', 'cat_2.jpg'];
  const [index, setIndex] = useState(0);
  const [currentImg, setCurrentImg] = useState(images[index]);

/*   const isNext = (next) => {
    let newIndex = 0;
    next ? 
    newIndex = (index +1)  % images.length
    : newIndex = (index + images.length -1)  % images.length;
    setIndex(newIndex);
    setCurrentImg(images[newIndex]);
  } */

  const isNext = (next) => {
    let newIndex = 0;
    const condition = index < images.length -1 ? true : false;
    const condition2 = index > 0 ? true : false;
    next ? 
      condition ? newIndex = index +1 : newIndex = 0
      : condition2 ? newIndex = index -1 : newIndex = images.length -1;
    setIndex(newIndex);
    setCurrentImg(images[newIndex]);
  }

  return (
    <>
      <h1>Cats</h1>
      <div className="container">
        <div className="img__container">
          <img src={require(`./images/${currentImg}`)} alt='cat' style={{maxWidth: '600px'}}></img>
        </div>
        <button onClick={() => isNext(false)}>Previous</button>
        <button onClick={() => isNext(true)}>Next</button>
      </div>
    </>
  );
}

export default App;
