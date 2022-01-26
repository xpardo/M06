import Statuses  from './statuses-class';

export class StatuseList {

    constructor(statuses) {

        this.statuses = statuses;

    }

    nouStatus(status) {

        this.statuses.push(status);
        this.desarLocalStorage();
    }

    cercaStatus(id) {

        for (let i of this.statuses)
        {
            if (i.id == id)
                return i.name;
        }
        return "statuses Desconegut"
    }


    filtraStatuses(){
        let torna = this.statuses.filter((element)=>{

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