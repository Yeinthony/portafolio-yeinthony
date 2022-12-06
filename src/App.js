import './App.css';
import NavBar from './components/NavBar'
import Inicio from './components/Inicio'
import SobreMi from './components/SobreMi'
import imagen from './imagenes/yeinthony2R.png';
import imagen1 from './imagenes/yeinthony2.png';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Inicio imagen={imagen} nombre="Yeinthony" especialidad="Full Stack Developer"/>
      <SobreMi 
        imagen={imagen1} 
        parrafo1="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam nobis repellendus odio, minus nostrum molestias laborum molestiae laboriosam qui perferendis? Impedit et id veniam perferendis soluta accusamus reprehenderit sunt obcaecati!"
        parrafo2="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam nobis repellendus odio"
      />
    </div>
  );
}

export default App;


