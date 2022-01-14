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

    cercaTicket(id) {

        for (let i of this.tikets)
        {
            if (i.id == id)
                return i.title
        }
        return "Tiket Desconeguda"
    }


    Filtrar(usuaris,assets,status){
        const d = this.tikets.filtrer((element)=>{
            usuaris.map(ele => element.id_usuari.includes(ele)).includes(true)
            assets.map(ele => element.id_asset.includes(ele)).includes(true)
            status.map(ele=>element.id.includes(ele)).includes(true)
        });

        return d
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



