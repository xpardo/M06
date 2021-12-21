export class StatuseList {

    constructor(statuses) {

        this.statuses = statuses;
        console.log(this.statuses);
    }

    nouStatuse(Statuse) {

        this.statuses.push(statuse);
        this.desarLocalStorage();


    }
    cercaStatuse(id) {

        for (let i of this.statuses)
        {
            if (i.id == id)
                return i.name
        }
        return "Statuse Desconegut"
    }
    cercaStatuses(id_array) {
 
        let retorn='';

        for (let i of id_array)
        {
            retorn += this.cercaStatuse(i)+"-"
        }
        return retorn.slice(0,-1); 
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
