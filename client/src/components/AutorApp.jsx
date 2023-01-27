import React, { useState, useEffect } from "react";
import AutorForm from "./AutorForm";
import axios from "axios";
import BarraNavegacion from "./BarraNavegacion";
import { Routes, Route, useNavigate } from "react-router-dom";
import AutorListas from "./AutorListas";
import Swal from 'sweetalert2';
import Toast from "../extras/functions";


const AutorApp = () => {
  const [datos, setDatos] = useState([]);
  const [dataToEdit, setDataToEdit] = useState(null);
  const [error, setError] = useState({})

  useEffect(() => {
    listarAutores();
  }, []);

    //Redireccionamiento
  const navigate = useNavigate();
  const crearAutor = (form) => {
    let { name } = form;
    axios.post("http://localhost:8000/api/crearautor", { name })
      .then((resultado) => {
        console.log(resultado)
        listarAutores();
        navigate("/listaautores");
        setDataToEdit(null)
      })
      .catch((error) => {
        console.log(error);
        setError(error.response.data.errors)
      });
  };
  const editarAutor = (form) => {
    console.log(form);
   const {_id, name} = form;
   axios.put(`http://localhost:8000/api/editarautor/${_id}`, {name})
   .then((resultado)=>{
        Toast.fire({
            icon: 'success',
            title: 'Los datos se han editado exitosamente'
        })
        listarAutores()
        navigate("/listaautores");
        setDataToEdit(null);
   }).catch((error)=>{
        Toast.fire({
            icon: 'danger',
            title: 'Los datos no se han podido editar'
        })
   })
  };
  const listarAutores = () => {
    axios
      .get("http://localhost:8000/api/listarautores")
      .then((resultado) => {
        setDatos(resultado.data);
      })
      .catch((error) => {
        console.log("Error al querer listar los autores");
      });
  };

  const eliminarAutor = (_id) => {
    Swal.fire({
        title: 'Estas seguro/a de eliminar?',
        text: "Una vez confirmado el borrado ya no se podra recuperar lo borrado",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, estoy seguro!',
        cancelButtonText: 'Cancelar Borrado'
      }).then((result) => {
        if (result.isConfirmed) {
            axios.delete(`http://localhost:8000/api/eliminarautor/${_id}`)
            .then((resultado)=> {
                Toast.fire({
                        icon: 'success',
                        title: 'Se ha eliminado correctamente'
                    })
                    listarAutores()
            }).catch((error)=>{
                Toast.fire({
                        icon: 'danger',
                        title: 'No se ha podido eliminar. Contacte con el desarrollador'
                    })
            })
        }
      })
  }
  return (
    <div>
        <BarraNavegacion />
        <Routes>
          <Route
            path="/crearautor"
            element={
              <AutorForm
                crearAutor={crearAutor}
                editarAutor={editarAutor}
                dataToEdit={dataToEdit}
                setDataToEdit={setDataToEdit}
                error={error}
              />
            }/>
          <Route 
            path="/listaautores" 
            element={<AutorListas 
                        datos={datos} 
                        setDataToEdit={setDataToEdit}
                        eliminarAutor={eliminarAutor}/>
                    } />
        </Routes>
    </div>
  );
};

export default AutorApp;
