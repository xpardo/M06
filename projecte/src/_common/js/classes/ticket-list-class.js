export class TicketsList {

    constructor(tickets) {

        this.tickets=tickets;
        console.log(this.tickets);

    }

    darrer_element() {

        return this.ctikets.at(-1).id
    }

    nouTickets(id) {


        this.tikets.foreach( (v,i) => {

            if (v.id==id)
            {
                delete this.tickets[i];
                console.log (this.tickets)
            }
        })

    }



    esborraTickets(id) {
        this.tikets.foreach( (v,i) => {

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
        this.tikets = ( localStorage.getItem('tickets') )
            ? JSON.parse( localStorage.getItem('tickets') )
            : [];

    }
}

