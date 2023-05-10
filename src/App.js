import logo from './logo.svg';
import './App.css';
import CardCita from './Cita.js'
import FormMascotas from './form';

var Cardcitas =
  [
    {
      nombre: "Nina",
      duenno: "Martin",
      fecha: "2021-08-05",
      hora: "08:20",
      sintomas: "Le duele la pierna"
    },
    {
      nombre: "Sifon",
      duenno: "Flecha",
      fecha: "2023-08-05",
      hora: "09:24",
      sintomas: "Duerme mucho"
    },
    {
      nombre: "Floki",
      duenno: "Ari",
      fecha: "2023-08-05",
      hora: "16:15",
      sintomas: "No está comiendo"
    }
  ];

export {Cardcitas};

function App() {
  //NO ENTIENDO COMO SE SUPONE QUE SE RE-RENDEREE LA LA LISTA DE CARTAS CUANDO CARDCITAS RECIBE UN NUEVO ELEMENTO. USEEFFECT, USEHOOK, LO QUE SEA NO TIENEN SENTIDO. REACT, PORFA DESAPARECE.0

  return (
    <div className="App">
      <header className="App-header">
      <h1>ADMINISTRADOR DE PACIENTES</h1>
      <div className= "container">
        <div className= "row">
          <div className= "one-half column">
            <h2>Crear mi Cita</h2>
            <FormMascotas/>
          </div>
          <div className= "one-half column">
            <h2>Administra tus citas</h2>
            {Cardcitas.map((element) => (
              <CardCita nombre={element.nombre} duenno={element.duenno} fecha={element.fecha} hora={element.hora} sintomas={element.sintomas}></CardCita>
            ))}
          </div>
        </div>
      </div>
      </header>
    </div>
  );
}

export default App;
