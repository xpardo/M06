export const ocultaLlistaTicket = () => {
   

}

export const creaHTMTicketsList = (TicketsList, llistaautors, estat ,model, localitat) =>{

    let html=`
    <table class='table'>
        <thead>
            <tr>
                <th>id</th>
                <th>title</th>
                <th>Desc</th>
                <th>id_autors</th>
                <th>assigned_id</th>
                <th>assets_id</th>
                <th>model</th>
                <th>Estat</th>
                <th class='esborrar'><button id="esborraritems" type="button" class="btn btn-outline-danger btn-sm">Esborrar</button>
                </tr>
        </thead>
    <tbody>
    `

    TicketsList.tickets.forEach( (v,i,array) => {
        

        let cad_desc = TicketsList.cercaTicket(v.id) 

        let cad_autor= TicketsList.cercaAutor(v.id)

        let cad_localitation = TicketsList.cercaAssigned(v.id)//location

        let cad_asset = TicketsList.cercaAssets(v.id) 

        let cad_model = model.cercaModel(v.id)  
       
        let cad_Estat = estat.cercaStatus(v.id)

        html += 
        `
        <tr >
            <td>${v.id}</td>
            <td><a href="">${v.title}</a></td>
            <td>${cad_desc}</td>
            <td>${cad_autor}</td>
            <td>${cad_localitation}</td>
            <td>${cad_asset}</td>
            <td>${cad_model}</td>
            <td>${cad_Estat}</td>

            <td>


            <a class="delere" href=""><i class="fas fa-trash-alt"></i></a>
            <a class="update" href=""><i class="fas fa-duotone fa-wrench"></i></a>
            <a class="created" href=""><i class="fas fa-solid fa-calendar-circle-plus"></i></a>
          

            <input class="esborrar form-check-input invisible" type="checkbox" value="" id="esb${v.id}""></td>
        </tr>
        `
            
    });
        
    html +=`</tbody></table>`
    return html;
}



//filtrar

///ubicació,autor,estat -> location,author,estatus

export const veureTicket = (tickets) => {

    console.log("ticketssssss",tickets);

}




