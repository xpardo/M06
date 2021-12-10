import tickets  from './tickets-class';

export class AutorsList {

    constructor(tickets) {

        this.tickets=tickets;
        //this.carregarLocalStorage();
        //console.log(this.autors);
    }

    nouTecnic(tickets) {

        this.tickets.push(tickets);
        this.desarLocalStorage();


    }

    cercaTecnic(id) {

        for (let i of this.tickets)
        {
            if (i.assigned_id == id)
                return i.title + ", "+i.desc;
        }
        return " Tecnic Desconegut"
    }

    cercaTecnics(id_array) {
        
        let retorn='';

        for (let i of id_array)
        {
            retorn += this.cercaTecnic(i)+"-"
        }
        return retorn.slice(0,-1); // Elimina el darrer '-'
    }

    
}
