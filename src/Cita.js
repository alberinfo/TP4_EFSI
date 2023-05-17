function CardCita(prop, citas, setCitas)
{
    const eliminarCitas = (gid) => {
        console.log(citas);
        //setCitas([...citas.filter(cita => cita.id !== gid)]);
    }

    return (
        <div className= "cita">
              <p>id: <span>{prop.id}</span></p>
              <p>Mascota: <span>{prop.nombre}</span></p>
              <p>Dueño: <span>{prop.duenno}</span></p>
              <p>Fecha: <span>{prop.fecha}</span></p>
              <p>Hora: <span>{prop.hora}</span></p>
              <p>Sintomas: <span>{prop.sintomas}</span>
              </p><button onClick= {eliminarCitas(prop.id)} className= "button elimnar u-full-width">Eliminar ×</button>
            </div>
    )
}

export default CardCita;