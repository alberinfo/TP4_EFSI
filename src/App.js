import logo from './logo.svg';
import './App.css';
import CardCita from './Cita.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>ADMINISTRADOR DE PACIENTES</h1>
      <div className= "container">
        <div className= "row">
          <div className= "one-half column">
            <h2>Crear mi Cita</h2>
            <form>
              <label>Nombre Mascota</label>
              <input type="text" name="mascota" className= "u-full-width" placeholder="Nombre Mascota" value=""></input>
              
              <label>Nombre Dueño</label>
              <input type="text" name="propietario" className= "u-full-width" placeholder="Nombre dueño de la mascota" value=""></input>
              
              <label>Fecha</label>
              <input type="date" name="fecha" className= "u-full-width" value=""></input>
  
              <label>hora</label>
              <input type="time" name="hora" className= "u-full-width" value=""></input>

              <label>Sintomas</label>
              <textarea name="sintomas" className= "u-full-width"></textarea>
              <button type="submit" className= "u-full-width button-primary">Agregar Cita</button>
            </form>
          </div>
          <div className= "one-half column">
            <h2>Administra tus citas</h2>
            <CardCita nombre="Nina" duenno="Martin" fecha="2021-08-05" hora="08:20" sintomas="Le duele la pierna"/>
            <CardCita nombre="Sifon" duenno="Flecha" fecha="2023-08-05" hora="09:24" sintomas="Duerme mucho"/>
            <CardCita nombre="Floki" duenno="Ari" fecha="2023-08-05" hora="16:15" sintomas="No está comiendo"/>
          </div>
        </div>
      </div>
      </header>
    </div>
  );
}

export default App;
