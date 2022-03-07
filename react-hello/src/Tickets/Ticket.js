import React from 'react'
import Ticket from "./Ticket"
import dades from "./Common/bd.json"

class Ticket extends dades {
   Ticket = () => {
    <div>
        <table>
        {
            Ticket.map(( dades,ticket) => {
                return <Tickets key = { dades } ticket= {ticket}/>
            })}  
        </table>
    </div>
    }    
}


export default Ticket
