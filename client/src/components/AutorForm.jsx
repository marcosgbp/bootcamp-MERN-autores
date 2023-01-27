import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const initialForm = {
  name: "",
  _id:null
};
const AutorForm = ({crearAutor, editarAutor, dataToEdit, error}) => {
  const [form, setForm] = useState(initialForm);
    useEffect(()=>{
        if(dataToEdit){
            setForm(dataToEdit)
        }else{
            setForm(initialForm)
        }
    },[])
    const handlerChange = (e)=> {
        setForm({
            ...form,
            [e.target.name]:e.target.value
        })
    }
    const handlerSubmit = (e) => {
        e.preventDefault();
        // if(!form.name){
        //     alert("Por favor completa el campo");
        //     return;
        // }

        if(form._id===null){
            crearAutor(form);
        }else{
            editarAutor(form);
        }
    }
  return (
    <div className="col-6 mx-auto">
      <h3>Formulario</h3>
      <form onSubmit={handlerSubmit}>
        <label htmlFor="name">Nombre:</label>
        <input
          type="text"
          className="form-control"
          name="name"
          autoComplete="off"
          onChange={handlerChange}
          value={form.name}
        />
        {error.name?<p className="text-danger">{error.name.message}</p>:null}
        <Link to={'/listaautores'} className="btn btn-warning  mt-2">Atras</Link>
        <input type="submit" className="btn btn-info mt-2" value="Enviar" />
      </form>
    </div>
  );
};

export default AutorForm;
