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


    Filtrar(autor,statuses,locations){
        const d = this.tickets.filtrer((element)=>{
            autor.map(ele => element.id_autor.includes(ele)).includes(true)
            statuses.map(eless=>element.id.includes(eless)).includes(true)
            locations.map(eles=>element.id.includes(eles)).includes(true)
        });

        return d
    }

  
    esborraTickets(id) {
        this.tickets.foreach( (v,i) => {

            if (v.id==id)
            {
                delete this.tickets[i];
                console.log (this.tickets)
            }
        })
        
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



