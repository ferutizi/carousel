import { useState } from "react";

function App() {
  const images = ['cat.jpg', 'cat_1.jpg', 'cat_2.jpg'];
  const [index, setIndex] = useState(0);
  const [currentImg, setCurrentImg] = useState(images[index]);

  const next = () => {
    debugger;
    const condition = index < images.length -1 ? true : false;
    if(condition) {
      setIndex(index +1);
    } else {
      setIndex(0);
    }
    setCurrentImg(images[index])
  }


  return (
    <div className="App">
      <h1>Carousel</h1>
      <img src={require(`./images/${currentImg}`)} alt='cat' style={{maxWidth: '400px'}}></img>
      <button onClick={() => next()}>next</button>
    </div>
  );
}

export default App;
