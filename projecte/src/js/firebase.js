export async function obtenirDades()  {

    let data1,data2,data3,data4,data5,data6;

    try {

        data1 = await fetch('https://ticket-ec38b-default-rtdb.firebaseio.com/ticket.json')
        data1 = await data1.json();
        
        data2 = await fetch('https://ticket-ec38b-default-rtdb.firebaseio.com/autors.json')
        data2 = await data2.json();

        data3 = await fetch('https://ticket-ec38b-default-rtdb.firebaseio.com/assets.json')
        data3 = await data3.json();

        data4 = await fetch('https://ticket-ec38b-default-rtdb.firebaseio.com/statuses.json')
        data4 = await data4.json();

        data5 = await fetch('https://ticket-ec38b-default-rtdb.firebaseio.com/locations.json')
        data5 = await data5.json();

        data6 = await fetch('https://ticket-ec38b-default-rtdb.firebaseio.com/tickets.json')
        data6 = await data6.json();

        console.log("ticket",data1)
        console.log("autors",data2)
        console.log("assests",data3)
        console.log("statuses",data4)
        console.log("locations",data5)
        console.log("Tickets guardats",data6)
        return ([data1,data2,data3,data4,data5,data6]);

    }
    catch {

        console.log("...Error")
        return "null"
    }
   
}


export async function setTicket(ticket,id) {

    try {
        const res= await  fetch('https://ticket-ec38b-default-rtdb.firebaseio.com/ticket/'+ id+'.json',
        {
             method: 'PUT',
             headers: {
                 'Content-Type': 'application/json'
             },
             body: JSON.stringify(ticket)
        })
    }
    catch (error) {

    }
}


 export async function delTicket(id)
{
    try {

        const res= await  fetch('https://ticket-ec38b-default-rtdb.firebaseio.com/ticket/'+ id+'.json',
    {
        method: 'DELETE',
                      
    })

    }
    catch (error) {

    }
}
 
