
export const ocultaLlistaTicket = () => {
   

}

export const creaHTMTicketsList = (TicketsList, llistaUsuari,Assets, Tecnic) =>{

    let html=`
    <table class='table'>
        <thead>
            <tr>
                <th>#id</th>
                <th>title</th>
                <th>Autors</th>
                <th>Desc</th>
                <th>Assets</th>
                <th>Tecnic</th>
                <th class='esborrar invisible'><button id="esborraritems" type="button" class="btn btn-outline-danger btn-sm">Esborrar</button></th>
            </tr>
        </thead>
    <tbody>
    `

    
    TicketsList.tickets.forEach( (v,i,array) => {
        
        let cad_usuari= llistaUsuari.cercaUsuari(v.id_usuari)
        let cad_assets= Assets.cercaAssets(v.id_asset)
        let cad_Tec = Tecnic.ceraDesc(v.id)

        html += `
        <tr >
        <td>${v.id}</td>
        <td><a href="">${v.title}</a></td>
        <td>${cad_usuari}</td>
        <td>${v.dec}</td>
        <td>${cad_assets}</td>
        <td>${cad_Tec}</td>
        <td><input class="esborrar form-check-input invisible" type="checkbox" value="" id="esb${v.id}""></td>
        </tr>
        `
        console.log(v.title)
    });
    

    
    html +=`</tbody></table>`
    return html;


}


export const veureTicket = (tickets) => {

    console.log(tickets);

}