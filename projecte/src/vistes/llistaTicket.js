export const ocultaLlistaTicket = () => {
   

}

export const creaHTMTicketsList = (TicketsList, llistaautors, estat ,models, localitat) =>{

    let html=`
    <table class='table'>
        <thead>
            <tr>
                <th>id</th>
                <th>title</th>
                <th>Desc</th>
                <th>Autors</th>
                <th>localitzacio</th>
                <th>model</th>
                <th>Estat</th>
                <th class='esborrar invisible'>
                <button id="esborraritems" type="button" class="btn btn-outline-danger btn-sm">Esborrar</button></th>
            </tr>
        </thead>
    <tbody>
    `

    TicketsList.tickets.forEach( (v,i,array) => {
        

        let cad_desc = TicketsList.cercaTicket(v.id) 

        let cad_usuari= llistaautors.cercaAutor(v.id)

        let cad_Estat = estat.cercaStatus(v.id)

        let cad_model = models.cercaModel(v.id)  

        let cad_localitation = localitat.cercaLocation(v.id)

        html += 
        `
        <tr >
            <td>${v.id}</td>
            <td><a href="">${v.title}</a></td>
            <td>${cad_desc}</td>
            <td>${cad_usuari}</td>
            <td>${cad_localitation}</td>
            <td>${cad_model}</td>
            <td>${cad_Estat}</td>

            <td>


            <a href=""><img class="delere" width=80 height=80 src="./assets/img/pape.png"></a>

            <input class="esborrar form-check-input invisible" type="checkbox" value="" id="esb${v.id}""></td>
        </tr>
        `
            
    });
        
    html +=`</tbody></table>`
    return html;
}


export const veureTicket = (tickets) => {

    console.log("ticketssssss",tickets);

}




