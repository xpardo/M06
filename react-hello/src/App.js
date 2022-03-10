import React from 'react'
import Tickets from './Tickets/Tickets'
import Footer from './Common/Footer'
import Header from './Common/Header'

const App = ({ tickets }) => {
  const { title, desc, author_id, assigned_id, status_id, asset_id, updated, created } = tickets
  return (
    <div>
    
    <div><Header/></div>
    <div><Tickets/>
    
          <table>
            <tr>
              <td> {title} </td> 
              <td> {desc} </td> 
              <td> {author_id} </td>
              <td> {assigned_id} </td> 
              <td> {status_id} </td> 
              <td> {asset_id} </td>  
              <td> {created} </td>  
              <td> {updated} </td>  
            </tr>
          </table>    
        </div>
    
   
    <div><Footer/></div>
    </div>
  )
}

export default App