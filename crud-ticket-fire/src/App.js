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
      created: serverTimestamp(),
      

    })
   
    setId('')
    setTicket('')
    setDesc('')
    setAutor('')
    setAssig('')
    setAss('')
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
    setError(null)

    addDoc(tickCollectionRef,{
      title: ticket,
      desc: desc,
      author_id:author_id,
      assigned_id:assigned_id,
      status_id:status_id,
      asset_id:asset_id,
      created: serverTimestamp(),
      
    })
    
  

  }
 
  return (
   
  <div className="container mt-5">
    <h1 className="text-center">CRUD APP</h1>
    <hr/>
    <div className="row">

      <div className="col-8">
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
                    <table>
                    <tr style={{backgroundColor: 'aquamarine' }}>
                        <th>title </th>
                         
                         <th>desc </th>
                       
                         <th>author_id </th>
                   
                         <th>assigned_id </th>
                        
                         <th>status_id </th>
                        
                         <th>asset_id </th>
                    
                        </tr>
                        <tr style={{backgroundColor: 'white'}}>
                          
                          <th>{ v.title }</th>
                         
                          <th>{ v.desc }</th>
                        
                          <th>{ v.author_id }</th>
                    
                          <th>{ v.assigned_id }</th>
                         
                          <th>{ v.status_id }</th>
                         
                          <th>{ v.asset_id }</th>

                          
                        </tr>
                    </table> 

                        <button 
                        className="btn btn-sm btn-danger float-right mx-2"
                        onClick={ () => esborrarTicket(v.id) }
                        >Esborrar</button>

                        <button 
                        className="btn btn-sm btn-warning float-right"
                        onClick={ () => editar (v)}
                        >Editar</button>
               
                  </li>
  
                )
              })
            )
          }
          
        </ul>
      </div>

      <div className="col-4">
        <h4 className="text-center">
          {
            modeEdicio ? "Editar Ticket"  : "Afegir Ticket"
          }
       
       </h4>
        <form onSubmit={ modeEdicio ? editarTickets : afegirTickets }>
          <span className='text-danger'>{ error } </span>
          <label>title</label>
          <input 
            type="text" 
            className="form-control mb-2"
            placeholder="Afegeix Ticket"
            onChange={ e => setTicket(e.target.value)  }
            value = { ticket }
         />
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
            type="text" 
            className="form-control mb-2"
            placeholder="Afegeix author_id"
            onChange={ e => setAutor(e.target.value)  }
            value = { author_id }
         />
         <label>assigned_id</label>
          <input 
            type="text" 
            className="form-control mb-2"
            placeholder="Afegeix assigned_id"
            onChange={ e => setAssig(e.target.value)  }
            value = { assigned_id }
         />
         <label>status_id</label>
         <input 
            type="text" 
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
        
        </form>
      </div>

    </div>
  </div>



  )
}

export default App