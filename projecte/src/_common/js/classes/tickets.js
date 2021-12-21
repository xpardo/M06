import { NoEmitOnErrorsPlugin } from "webpack";

export class ticketsList{


    constructor(id,title,desc,author_id,assigned_id,assets_id,created,update){
        this.id=id;
        this.title=title;
        this.desc=desc;
        this.author_id=author_id;
        this.assigned_id=assigned_id;
        this.assets_id=assets_id;
        this.created=created;
        this.update=update;

    }

  
   
   
}


export class incidencies{
    incide;
    constructor(){
        this.carregarLocalStorage();
    }
    novaIncidencia(inci){
        this.incide.push(inci);
        this.desarLocalStorege();
    }
    desarLocalStorege(){
        localStorage.setItem('incide',JSON.stringify(this.incide));
    }
    carregarLocalStorage(){
        this.llibres = (localStorage.getItem('incide'))
                        ? JSON.parse(localStorage.getItem('incide'))
                        :[];
    }
}



inciden = new incidencies();

tick = new tickets(id,title,desc,author_id,assigned_id,assets_id,created,update);

inciden.novaIncidencia(tick);




