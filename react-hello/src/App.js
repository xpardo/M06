import React from 'react'
import Tickets from './Tickets/Tickets'
import Footer from './Common/Footer'
import Header from './Common/Header'

const App = ({ tickets }) => {
  const { title, desc,author_id,assigned_id, status_id,asset_id,updated,created } = tickets
  return (
    <>
    
    <div><Header/></div>
    <div><Tickets/>
    

            <tr>
              <td> {title} </td> 
              <td> {desc} </td> 
              <td> {author_id} </td>
              <td> {assigned_id} </td> 
              <td> {status_id} </td> 
              <td> {asset_id} </td>  
              <td> {created} </td>  
              <td> {updated} </td>  

           <tr>
       
    
    </div>
    <div><Footer/></div>
    </>
  )
}

export default App