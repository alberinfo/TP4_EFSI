import citas from './App.js'
import setCitas from './App.js'
function CardCita(prop)
{
    function elimnarCita(citas, SetCitas){ 
        
        setCitas
    }
    return (
        <div className= "cita">
              <p>Mascota: <span>{prop.nombre}</span></p>
              <p>Dueño: <span>{prop.duenno}</span></p>
              <p>Fecha: <span>{prop.fecha}</span></p>
              <p>Hora: <span>{prop.hora}</span></p>
              <p>Sintomas: <span>{prop.sintomas}</span>
              </p><button className= "button elimnar u-full-width">Eliminar ×</button>
            </div>
    )
}

export default CardCita;