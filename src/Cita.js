function CardCita(prop)
{
    const eliminarCitas = (gid) => {
        let citas = prop.getCitas().filter(cita => cita.id !== gid);
        prop.setCitas([...citas]);
    }

    return (
        <div className= "cita">
              <p>id: <span>{prop.id}</span></p>
              <p>Mascota: <span>{prop.nombre}</span></p>
              <p>Dueño: <span>{prop.duenno}</span></p>
              <p>Fecha: <span>{prop.fecha}</span></p>
              <p>Hora: <span>{prop.hora}</span></p>
              <p>Sintomas: <span>{prop.sintomas}</span>
              </p><button onClick= {(e) => { eliminarCitas(prop.id) }} className= "button elimnar u-full-width">Eliminar ×</button>
            </div>
    )
}

export default CardCita;