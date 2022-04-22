import React, { useContext, useEffect, useRef } from 'react'
import { useState } from 'react'
import { nanoid } from 'nanoid'
import { db } from "./firebase.js"
import { collection , where, doc, getDocs, deleteDoc,setDoc, query, orderBy , onSnapshot, addDoc,serverTimestamp} from 'firebase/firestore';
import { UserContext } from '../UserContext'
import Ticket from './Ticket';




const Tickets = () => {

  const estat = useContext(UserContext)

  const {usuari, setUsuari } = estat

  const inputTicket = useRef()

  const estaMuntat = useRef(true)

  const [ticket, setTicket] = useState("")

  const [desc, setDesc] = useState("")
  const [author_id, setAutor] = useState("")
  const [assigned_id, setAssig] = useState("")
  const [status_id, setStat] = useState("")
  const [asset_id, setAss] = useState("")
  const [create, setcrea] = useState("")
  const [update, setupd] = useState("")


  const [tiket, setTciket] = useState({
    ticket:"",
    desc:"",
    author_id:"",
    assigned_id:"",
    status_id:"",
    asset_id:"",
    create:"",
    update:"",
  })




  const [tickets, setTickets] = useState([])
  const [modeEdicio, setModeEdicio] = useState(false)
  const [id, setId] = useState("")
  const [error, setError] = useState(null)


  const tickCollectionRef = collection(db, "tickets")

  /* const q =query(tickCollectionRef, orderBy('created','desc'));  */


  const q = query(tickCollectionRef,where ('username','==' , usuari));

  const handleInputChange = ({target}) =>{
  

    
    console.log("aaa")
  
      setTciket({
        ...tiket,
        [target.name]:target.value

      })
   
  }

  useEffect( () => {

    const unTick = onSnapshot(q, (data)=>{

   

        if(estaMuntat.current === true)
        {

          setTickets (data.docs.map ( (v)=>{
            return ({...v.data(),id:v.id })
          }))

        }
        else  console.log("Ey, que ja no existeixo")

        console.log("He canviat coses")
      
    })

    return ()=>{
      unTick()
      estaMuntat.current=false
      console.log("Adeu me piro")
    }
    

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
   
   
    setTciket({
      ...tiket,
      ticket: item.title,
      desc:item.desc,
      author_id:item.author_id,
      assigned_id:item.assigned_id,
      status_id:item.status_id,
      asset_id:item.asset_id,
      create:item.create,
      update:item.update,
      username:item.usuari,
    })
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
      title:tiket.ticket,
      desc: tiket.desc,
      author_id:tiket.author_id,
      assigned_id:tiket.assigned_id,
      status_id:tiket.status_id,
      asset_id:tiket.asset_id,
      create:tiket.create,
      update:tiket.update,
      username:usuari,
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
    inputTicket.current.focus()

  }

  const esborrarTicket = (id) => {

    console.log(id)

    
    deleteDoc(doc(db,'tickets',id))

  }


  const afegirTickets = (e) => {

    e.preventDefault();

    if (!tiket.ticket.trim())
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
      title:tiket.ticket,
      desc: tiket.desc,
      author_id:tiket.author_id,
      assigned_id:tiket.assigned_id,
      status_id:tiket.status_id,
      asset_id:tiket.asset_id,
      create:tiket.create,
      update:tiket.update,
      username: usuari,
      created: serverTimestamp(),
      
    })
    
   
    setTciket({
      ticket:"",
      desc:"",
      author_id:"",
      assigned_id:"",
      status_id:"",
      asset_id:"",
      create:"",
      update:"",
    
    })

    inputTicket.current.focus()

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
  
                    <Ticket 
                    key = { v.id } 
                    v={v}
                    esborrarTicket = { esborrarTicket }
                    editar= {editar}
                    />

                )
              })
            )
          }
          
        </ul>
      </div>
         
     
     
          
             
              <div className="col-12">
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
                      name="ticket"
                      className="form-control mb-2"
                      placeholder="Afegeix Ticket"
                      onChange={ handleInputChange }
                      value = { tiket.ticket } />

                    <label>desc</label>
                    <input 
                      type="text" 
                      name="desc"
                     
                      className="form-control mb-2"
                      placeholder="Afegeix descripcio"
                      onChange={ handleInputChange  }
                      value = { tiket.desc }
                    />
                    <label>author_id</label>
                    <input 
                      type="number" 
                      name="author_id"
                     
                      className="form-control mb-2"
                      placeholder="Afegeix author_id"
                      onChange={ handleInputChange  }
                      value = { tiket.author_id }
                    />
                    <label>assigned_id</label>
                    <input 
                      type="number"
                      name="assigned_id" 
                     
                      className="form-control mb-2"
                      placeholder="Afegeix assigned_id"
                      onChange={ handleInputChange  }
                      value = { tiket.assigned_id }
                    />
                    <label>status_id</label>
                    <input 
                      type="number"
                      name="status_id" 
                      className="form-control mb-2"
                      placeholder="Afegeix status_id"
                      onChange={ handleInputChange  }
                      value = { tiket.status_id }
                    />
                    <label>asset_id</label>
                    <input 
                      type="text" 
                      name="asset_id"
                     
                      className="form-control mb-2"
                      placeholder="Afegeix asset_id"
                      onChange={ handleInputChange  }
                      value = { tiket.asset_id }
                    />

                    <label>create</label>
                    <input 
                      type="date" 
                      name="create"
                     
                      className="form-control mb-2"
                      placeholder="Afegeix asset_id"
                      onChange={ handleInputChange  }
                      value = { tiket.create }
                    />

                    <label>update</label>
                    <input 
                      type="date"
                      name="update" 
                      ref ={ inputTicket }
                      className="form-control mb-2"
                      placeholder="Afegeix asset_id"
                      onChange={ handleInputChange  }
                      value = { tiket.update }
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

export default Tickets
