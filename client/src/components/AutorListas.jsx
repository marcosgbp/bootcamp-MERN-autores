import React from 'react';
import {useNavigate} from 'react-router-dom'

const AutorListas = ({datos, setDataToEdit, eliminarAutor}) => {
    const navigate = useNavigate(); 
  return (
    <div>
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nombre</th>
                    <th scope='col'>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {
                    datos.length===0?
                    <tr><td colSpan="3">Sin Datos</td></tr>:
                        datos.map((el, index)=>(
                        <tr key={index}>
                                <td>{index+1}</td>
                                <td>{el.name}</td>
                                <td>
                                    <button className='btn btn-warning' onClick={(()=>{setDataToEdit(el); navigate('/crearautor')})}>Editar</button>
                                    <button className='btn btn-danger' onClick={(()=>eliminarAutor(el._id))}>Elimnar</button>
                                </td>
                            </tr>
                        ))
                }
            </tbody>
        </table>
    </div>
  )
}

export default AutorListas