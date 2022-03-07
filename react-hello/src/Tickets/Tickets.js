import React from 'react'
import "../Common/styles.css"
import data from "./Common/bd.json"
import Tickets from "./Tickets"

const Tickets = () => {
 

    return Hello.map((valor, index) => {
        const { assets, locations, tickets, usuaris } = data
        console.log(tickets)


        return (
            <div className='centre'>
                <Tickets/>

        <table>
        <tbody > {
            tickets.map((valor, index) => {
                // return <tr key={valor.id}><td> { valor.title }</td><td> { valor.desc }</td></tr>

                return <Ticket key = { index }ticket = { valor }/>

            })
        } </tbody> </table>

        </div>

        )
    })
}




export default Tickets