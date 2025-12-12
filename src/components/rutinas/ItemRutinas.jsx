

const ItemRutinas = ({rutina}) => {
  return (
    <>
      <tr>
          <td>{rutina.diaSeleccionado}</td>
          <td> {rutina.musculoSeleccionado} </td>
          <td>{rutina.ejercicioSeleccionado}</td>
          <td>{rutina.seriesRutina}</td>
          <td>{rutina.repeticionesRutina}</td>
        </tr>
    </>
  )
}

export default ItemRutinas
