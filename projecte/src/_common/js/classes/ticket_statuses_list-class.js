/*  import Ticketstatuses  from './ticket_statuses-class';   */

export class TicketStatuseList {

    constructor(ticketstatuses) {

        this.ticketstatuses = ticketstatuses;

    }

    noutStatus(status) {

        this.ticketstatuses.push(status);
        this.desarLocalStorage();


    }
    cercatStatus(id) {

        for (let i of this.ticketstatuses)
        {
            if (i.id_status == id)
                return i.notes ;
        }
        return "TicketStatuse Desconegut"
    }

    

    filtratStatuses(){
        let torna = this.ticketstatuses.filter((element)=>{

            if(element.notes.match(new RegExp(text,"i"))) 
                return true;

        });
        return torna;
    }



    desarLocalStorage() {

        localStorage.setItem('ticketstatuses',JSON.stringify(this.ticketstatuses));
    }
    carregarLocalStorage() {


        this.ticketstatuses = ( localStorage.getItem('ticketstatuses') )
                        ? JSON.parse( localStorage.getItem('ticketstatuses') )
                        : [];

    }


}
