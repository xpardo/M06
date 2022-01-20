export async function obtenirDades()  {

    let data1,data2,data3,data4;

    try {

        data1 = await fetch('https://ticket-ec38b-default-rtdb.firebaseio.com/ticket.json')
        data1 = await data1.json();
        
        data2 = await fetch('https://ticket-ec38b-default-rtdb.firebaseio.com/usuaris.json')
        data2 = await data2.json();

        data3 = await fetch('https://ticket-ec38b-default-rtdb.firebaseio.com/assets.json')
        data3 = await data3.json();

        data4 = await fetch('https://ticket-ec38b-default-rtdb.firebaseio.com/status.json')
        data4 = await data4.json();


        return ([data1,data2,data3,data4]);

    }
    catch {

        cconsole.log("...Error")
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
 

///https://ticket-ec38b-default-rtdb.firebaseio.com/autors.json