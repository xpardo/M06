import Ticket_statuses  from './ticket_statuses-class'; 

export class TicketStatuseList {

    constructor(statuses) {

        this.statuses = statuses;

    }

    nouStatus(status) {

        this.statuses.push(status);
        this.desarLocalStorage();

    }
   
    cercaStatus(id) {

        for (let i of 'this.statuses')
        {
            if (i.id == id)
                return i.notes;
        }
        return "Statuse Desconegut"
    }

    

    filtraStatuses(){
        let torna =this.status.filter((element)=>{
            if(element.ticket_id.match(new RegExp(text,"i"))) 
            return true;

        });
        return torna;
    }

    desarLocalStorage() {

        localStorage.setItem('statuses',JSON.stringify(this.statuses));
    }
    carregarLocalStorage() {


        this.statuses = ( localStorage.getItem('statuses') )
                        ? JSON.parse( localStorage.getItem('statuses') )
                        : [];

    }


}
