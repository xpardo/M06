import Ticket_statuses  from './ticket_statuses-class'; 

export class TicketStatuseList {

    constructor(statuses) {

        this.statuses = statuses;
        console.log(this.statuses);
    }

    nouStatuse(statuse) {

        this.statuses.push(statuse);
        this.desarLocalStorage();

    }
   
    cercaStatuse(id) {

        for (let i of this.statuses)
        {
            if (i.ticket_id == id)
                return i.ticket_id;
        }
        return "Statuse Desconegut"
    }

    

    filtraStatuses(){
        let torna =this.name.filter((element)=>{
            console.log(element.name)
            if(element.name.match(new RegExp(text,"i"))) 
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
