import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ListadoRutinas from "./ListadoRutinas";


const Rutinas = () => {
  
  const rutinasLocalStorage = JSON.parse(localStorage.getItem("rutinasKey")) || [];

  const [rutinas, setRutinas] = useState(rutinasLocalStorage);

  const {register, handleSubmit, reset, formState:{errors}} = useForm()

  const crearRutina = (data) => {
    setRutinas([...rutinas, data])
    reset()

    Swal.fire({
        title:"Rutina Creada!",
        text: `La Rutina ${data.nombreRutina} fue creada con exito!`,
        icon:"success"
    })
  };
  
  useEffect(() => {
    localStorage.setItem("rutinasKey", JSON.stringify(rutinas))
  }, [rutinas])

  
    return (
    <div>
        <Form onSubmit={handleSubmit(crearRutina)} className="mt-3 ">
      <Form.Group className="mb-3">
        <Form.Control type="text" placeholder="Nombre de la rutina" {...register("nombreRutina", {
            required:"Este campo es obligatorio"
        })} />
        <Form.Text> {errors.nombreRutina?.message} </Form.Text>
      </Form.Group>
      <Form.Select aria-label="Default select example" {...register("diaSeleccionado")} >
      <option>Selecciona un día</option>
      <option value="Dia 1">Día 1</option>
      <option value="Dia 2">Día 2</option>
      <option value="Dia 3">Día 3</option>
      <option value="Dia 4">Día 4</option>
      <option value="Dia 5">Día 5</option>
      <option value="Dia 6">Día 6</option>
    </Form.Select>
    <Form.Select aria-label="Default select example" {...register("musculoSeleccionado")} >
      <option>Selecciona un musculo</option>
      <option value="Biceps">Biceps</option>
      <option value="Triceps">Triceps</option>
      <option value="Pecho">Pecho</option>
      <option value="Piernas">Piernas</option>
      <option value="Espalda">Espalda</option>
      <option value="Abdominales">Abdominales</option>
    </Form.Select>
    <Form.Select aria-label="Default select example" {...register("ejercicioSeleccionado")} >
      <option>Selecciona un/mas ejercicios</option>
      <option value="Press Mancuerna">Press con mancuernas</option>
      <option value="Pecho Plano">Pecho Plano</option>
      <option value="Mariposa">Mariposa</option>
    </Form.Select>
    <Form.Control type="number" placeholder="Repeticiones" {...register("repeticionesRutina", {
            required:"Este campo es obligatorio"
        })} />
    <Form.Control type="number" placeholder="Series" {...register("seriesRutina", {
            required:"Este campo es obligatorio"
        })} />        
        <Button variant="success" type="submit" className="mt-2" >Agregar</Button>
    </Form>
     <ListadoRutinas rutinas={rutinas} ></ListadoRutinas>   
    </div>
  )
}

export default Rutinas
