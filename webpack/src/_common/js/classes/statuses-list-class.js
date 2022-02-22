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


    filtraStatuses(text){
       /*  let statuses = this.statuses.filter((element)=>{
                return true;
        });
        return statuses; */

        let statuses= this.statuses.filter((element) => {
        
            // console.log(element.nom)
            if (element.name.match(new RegExp(text,"i")) ) return true;
        })
        return statuses;
        

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