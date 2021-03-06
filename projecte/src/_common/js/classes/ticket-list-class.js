export class TicketsList {

    constructor(tickets) {

        this.tickets=tickets;


    }

    darrer_element() {


        return this.tickets.slice(-1)[0].id

    }

    nouTickets(ticket) {


        this.tickets.push(ticket);
        return this.darrer_element();

    }

    cercaTicket(id) {

        for (let i of this.tickets)
        {
            if (i.id == id)
                return i.desc
                
        }
        return "Tiket Desconeguda"
    }
    cercaAssigned(id) {

        for (let i of this.tickets)
        {
            if (i.id == id)
                return i.assigned_id
                
        }
        return "assignacio Desconeguda"
    }
    cercaAutor(id) {

        for (let i of this.tickets)
        {
            if (i.id == id)
                return i.id_autors
                
        }
        return "assignacio Desconeguda"
    }
    cercaAssets(id) {

        for (let i of this.tickets)
        {
            if (i.id == id)
                return i.assets_id
                
        }
        return "assignacio Desconeguda"
    }



    /**
     * filtrar
     */
    
    filtraAutors(id)
    {
        let tickets= this.tickets.filter((element) => {
        
            // console.log(element.nom)
            if (element.nom.match(new RegExp(id,"i")));
        })
        return tickets;
    }

    filtraAssigned(id)
    {
        let assigned= this.tickets.filter((element) => {
        
            // console.log(element.nom)
            if (element.assigned_id.match(new RegExp(id,"i")));
        })
        return assigned;
    }



    Filtrar(autor,statuses,locations){
        const d = this.tickets.filter((element)=>
            autor.map(ele => element.id_autor.includes(ele)).includes(true)||
            statuses.map(eles=>element.assigned_id.includes(eles)).includes(true)||
            locations.map(eless=>element.id.includes(eless)).includes(true)//assigned
        )


        return d;
    }

  
    esborraTickets(id) {
        /* this.tickets.foreach( (v,i) => {

            if (v.id==id)
            {
                delete this.tickets[i];
                console.log (this.tickets)
            }
        }) */
      
        const trobat = this.tickets.find (element => element.id === id)
        console.log("trobat",trobat)
        const trobatindex = this.tickets.findIndex (element => element.id === id)
        console.log("trobat",trobatindex)
        this.tickets.splice(trobatindex,1)
        console.log(this.tickets)
        
    }

    desarLocalStorage() {

        localStorage.setItem('tickets',JSON.stringify(this.tickets));
    }
    carregarLocalStorage() {

        console.log("Aqui no entro")
        this.tickets = ( localStorage.getItem('tickets') )
            ? JSON.parse( localStorage.getItem('tickets') )
            : [];

    }
}



