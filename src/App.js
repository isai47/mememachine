import html2canvas from 'html2canvas';
import { useState } from 'react';
import './App.css';

function App() {

  const [textosup, setTextosup] = useState('');
  const [textoinf, setTextoinf] = useState('');
  const [imagen, setImagen] = useState('');

  const onChangeTextosup = function (evento) {
    
    setTextosup(evento.target.value)
  }

  const onChangeTextoinf = function (evento) {

    setTextoinf(evento.target.value)

  }
  const onChangeImagen = function (evento) {

    setImagen(evento.target.value)

  }

  const onClickExportar = function (evento) {
    html2canvas(document.querySelector("#meme")).then(canvas => {
      var img = canvas.toDataURL("image/png");
      var link = document.createElement('a');
      link.download = 'meme.png';
      link.href = img;
      link.click();
    });
  }

  return (
    <div className="App">
      Seleccionar meme
      <select onChange={onChangeImagen}>
        <option value="futurama">FUTURAMA</option>
        <option value="videogames">VIDEOGAMES</option>
        <option value="peliculas">PELICULAS</option>
        <option value="otros">OTROS</option>
      </select> <br />

      <input onChange={onChangeTextosup} type="text" placeholder='texto superior' /> <br />
      <input onChange={onChangeTextoinf} type="text" placeholder='texto inferior' /> <br />
      <button onClick={onClickExportar}>Exportar</button>

      <div className="meme" id="meme">
        <span>{textosup}</span> <br />
        <span>{textoinf}</span>
        <img src={"/img/" + imagen + ".jpg" } />
      </div>
    </div>
  );
}

export default App;
