import React from 'react'
import Contador from './contador'
import { useState } from 'react'
import { nanoid } from 'nanoid'

const App = () => {
//Activitat 2
  const [producta, setproducta] = useState('')
  const [productes, setproductes] = useState([])
  const [modeEdicio , setModeEdicio ] = useState(false)
  const [id, setId] = useState("")
  const editarproducta = (e) => {

    e.preventDefault();
    console.log(producta) 

    if (!producta.trim())
    {
      console.log('producta buida');
      return 
    } 

    const arrayEditat = productes.map ( (v) => {
        // id:id --> id  
      return (
            v.id === id ? { id:id , producta: producta  } : v 
      )
    })



  setproductes(arrayEditat)

    setModeEdicio(false)
    setproducta("")
    setId("")
  }


  const afegirproducta = (e) => {

    e.preventDefault();
    console.log(producta) 

    if (!producta.trim())
    {
      console.log('producta buida');
      return 
    }

    setproductes([...productes,
      { id: nanoid() ,producta:producta }
    ])

    setproducta('')
  }


  const eliminarproducta = (id) => {

    const arrayFiltrat = productes.filter ( (v)=> {

      return (v.id !== id)
    })

    setproductes(arrayFiltrat) 

  }



  const editar = (item) => {

    setModeEdicio(true)
    setproducta(item.id,item.producta)
    setId(item.id)

  }
  



  return (
    
    <div>
      {/* Activitat1 */}
      <p>Activitat 3</p>
      <Contador zero = "0"/>
      {/* Activitat2 */}
      <p>Activitat 2</p>
      <div className="container mt-5">
        <h1 className="text-center">Cistella</h1>
        <hr/>
        <div className="row">
          <div className="col-8">
            <h4 className="text-center">Llista de Productes</h4>
            <ul className="list-group">
            {
              productes.map( item => {

                return (


                  <li className="list-group-item" key={ item.id  }>
                    <span className="lead">{ item.id}</span>
                    <span className="lead">{ item.producta}</span>
                    <button 
                      className="btn btn-sm btn-outline-danger float-right mx-2"
                      onClick={ ()=> eliminarproducta(item.id)}>
                      Esborrar
                    </button>
                    <button 
                      className="btn btn-sm btn-outline-warning float-right"
                      onClick={ () => editar(item)}>
                        Editar
                    </button>
                  </li>

                  )  
              } )
            }
            
            </ul>
          </div>
      
          <div className="col-4">
            <h4 className="text-center">   
              { modeEdicio ? "Editar producta ":"Afegir producta"}
            </h4>
            <form onSubmit={ modeEdicio ? editarproducta : afegirproducta }>
              <input 
                type="text" 
                className="form-control mb-2"
                placeholder="Ingrese Tarea"
                onChange={e => setproducta(e.target.value)}
                value = { producta }
              />
            {
              modeEdicio ? (

                <button className="btn btn-outline-success btn-block" type="submit">Editar</button>
              ) : (
                 <button className="btn btn-outline-primary btn-block" type="submit">Afegir</button> 
              )
            }
            </form>
          </div>
        </div>
      </div>
    </div>
  )    
   
}

export default App