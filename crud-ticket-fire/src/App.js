import React, { useEffect } from 'react'
import { useState } from 'react'
import { nanoid } from 'nanoid'



import { db } from "./firebase"


import { collection, query, addDoc, doc,  serverTimestamp, deleteDoc, setDoc, orderBy, onSnapshot } from 'firebase/firestore'



const App = () => {

  const [ticket, setTicket] = useState("")
  const [desc, setDesc] = useState("")
  const [author_id, setAutor] = useState("")
  const [assigned_id, setAssig] = useState("")
  const [status_id, setStat] = useState("")
  const [asset_id, setAss] = useState("")
  const [create, setcrea] = useState("")
  const [update, setupd] = useState("")
  const [tickets, setTickets] = useState([])
  const [modeEdicio, setModeEdicio] = useState(false)
  const [id, setId] = useState("")
  const [error, setError] = useState(null)


  const tickCollectionRef = collection(db, "tickets")

  const q =query(tickCollectionRef, orderBy('created','desc')); 
  useEffect(() => {
    onSnapshot(q,(data)=>{

      setTickets (data.docs.map ( (v)=>{
        return ({...v.data(),id:v.id })
      }))
    })
    

  },[])



  const editar = (item) => {


    console.log(item)
    setModeEdicio(true)
    setTicket(item.title)
    setDesc(item.desc)
    setAutor(item.author_id)
    setAssig(item.assigned_id)
    setStat(item.status_id)
    setAss(item.asset_id)
    setcrea(item.create)
    setupd(item.update) 
    setId(item.id)
   

  }

  const editarTickets = (e) => {


    console.log("edito")
    e.preventDefault();

    if (!ticket.trim())
    {
      console.log("Element buit")
      setError("Introdueix algun valor")
      return
    }
   
    setDoc (doc(db,"tickets",id),
    {
      title:ticket,
      desc: desc,
      author_id:author_id,
      assigned_id:assigned_id,
      status_id:status_id,
      asset_id:asset_id,
      create:create,
      update:update,
      created: serverTimestamp(),
      

    })
   
    setId('')
    setTicket('')
    setDesc('')
    setAutor('')
    setAssig('')
    setAss('')
    setcrea('')
    setupd('')
    setModeEdicio(false)
    setError(null)


  }

  const esborrarTicket = (id) => {

    console.log(id)

    
  deleteDoc(doc(db,'tickets',id))
  }


  const afegirTickets = (e) => {

    e.preventDefault();

    if (!ticket.trim())
    {
      console.log("Element buit")
      setError("Introdueix algun valor")

      return
    }
    console.log(ticket)
    setTicket('')
    setDesc('')
    setAutor('')
    setAssig('')
    setAss('')
    setcrea('')
    setupd('')
    setError(null)

    addDoc(tickCollectionRef,{
      title: ticket,
      desc: desc,
      author_id:author_id,
      assigned_id:assigned_id,
      status_id:status_id,
      asset_id:asset_id,
      create:create,
      update:update,
      created: serverTimestamp(),
      
    })
    
  

  }
 
  return (
   
  <div className="container mt-5">
    <h1 className="text-center">CRUD TICKET</h1>
    <hr/>
    <div className="row">

      <div className="col-11">
        <h4 className="text-center">Llista de Tickets</h4>
         
        <ul className="list-group">
          {
       
            tickets.length === 0 ? (
            
              <li className='list-group-item'>No hi ha tickets actives</li>

            ) :
            (
              tickets.map ( (v) => {
                return (
  
                  <li key = { v.id } className="list-group-item" >
                    <table style={{class:'table table-striped table-warning'}}>
                
                    <tr style={{backgroundColor: '#676565', color:'white'}}>
                          <th>TITLE </th>
                          
                          <th>DESCRIPCIO </th>
                        
                          <th>AUTHOR_ID </th>
                    
                          <th>ASSIGNED_ID </th>
                          
                          <th>STATUS_ID </th>
                          
                          <th>ASSET_ID  </th>

                          <th>CREATED</th>

                          <th>UPDATED</th>
                          
                          <th></th>
                          <th></th>
                        </tr>
                     
                        <tr style={{backgroundColor: 'white'}}>
                          
                          <td>{ v.title }</td>
                         
                          <td>{ v.desc }</td>
                        
                          <td>{ v.author_id }</td>
                    
                          <td>{ v.assigned_id }</td>
                         
                          <td>{ v.status_id }</td>
                         
                          <td>{ v.asset_id }</td>

                          <td>{ v.create }</td>

                         <td>{ v.update }</td>
                         

                          <td><button 
                          className="btn btn-sm btn-danger float-right mx-2"
                          onClick={ () => esborrarTicket(v.id) }
                          >Esborrar</button></td>
                          
                          <td><button 
                          className="btn btn-sm btn-warning float-right"
                          onClick={ () => editar (v)}
                          >Editar</button></td>
                        </tr>
                    </table>
                  </li>
  
                )
              })
            )
          }
          
        </ul>
      </div>
          <br></br>
          <br></br>
      <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div class="p-6 bg-white border-b border-gray-200">
             
              <div className="col-12">
                <h4 className="text-center">
                  {
                    modeEdicio ? "Editar Ticket"  : "Afegir Ticket"
                  }
              
                </h4>
                  <form onSubmit={ modeEdicio ? editarTickets : afegirTickets }>
                    <center>
                    <span className='text-danger'>{ error } </span>
                    <label>title</label>
                    <input 
                      type="text" 
                      className="form-control mb-2"
                      placeholder="Afegeix Ticket"
                      onChange={ e => setTicket(e.target.value)  }
                      value = { ticket } />
                    <label>desc</label>
                    <input 
                      type="text" 
                      className="form-control mb-2"
                      placeholder="Afegeix descripcio"
                      onChange={ e => setDesc(e.target.value)  }
                      value = { desc }
                    />
                    <label>author_id</label>
                    <input 
                      type="number" 
                      className="form-control mb-2"
                      placeholder="Afegeix author_id"
                      onChange={ e => setAutor(e.target.value)  }
                      value = { author_id }
                    />
                    <label>assigned_id</label>
                    <input 
                      type="number" 
                      className="form-control mb-2"
                      placeholder="Afegeix assigned_id"
                      onChange={ e => setAssig(e.target.value)  }
                      value = { assigned_id }
                    />
                    <label>status_id</label>
                    <input 
                      type="number" 
                      className="form-control mb-2"
                      placeholder="Afegeix status_id"
                      onChange={ e => setStat(e.target.value)  }
                      value = { status_id }
                    />
                    <label>asset_id</label>
                    <input 
                      type="text" 
                      className="form-control mb-2"
                      placeholder="Afegeix asset_id"
                      onChange={ e => setAss(e.target.value)  }
                      value = { asset_id }
                    />

                    <label>create</label>
                    <input 
                      type="date" 
                      className="form-control mb-2"
                      placeholder="Afegeix asset_id"
                      onChange={ e => setcrea(e.target.value)  }
                      value = { create }
                    />

                    <label>update</label>
                    <input 
                      type="date" 
                      className="form-control mb-2"
                      placeholder="Afegeix asset_id"
                      onChange={ e => setupd(e.target.value)  }
                      value = { update }
                    />


                    {
                      modeEdicio ? (

                        <button 
                        className="btn btn-warning btn-block" 
                        type="submit">
                          Editar
                        </button>

                      )  :
                      (
                        <button 
                        className="btn btn-secondary" 
                        type="submit">
                          Afegir
                        </button>
                      )

                    }
                  </center>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>



  )
}

export default App