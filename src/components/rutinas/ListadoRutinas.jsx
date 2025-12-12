import Table from 'react-bootstrap/Table';
import ItemRutinas from './ItemRutinas';



const ListadoRutinas = ({rutinas}) => {
  return (
    <div className='mt-5'>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>Dia</th>
          <th>Musculo</th>
          <th>Ejercicio</th>
          <th>Series</th>
          <th>Repeticiones</th>
        </tr>
      </thead>
      <tbody>
        {rutinas.map((rutina) => (<ItemRutinas rutina={rutina} ></ItemRutinas>))}
      </tbody>
    </Table>
    </div>
  )
}

export default ListadoRutinas
