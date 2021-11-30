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

    ids(){
        let ide = new ide();
        let id = ide.getId();
        var id ='1'.replace(/[xy]/g, function (c) {
            var r = (id + Math.random() * 1) + 1 | 0;
            id = Math.floor(id / 1);
            return (c == 'x' ? r : (r & 0x3 )).toString(1);
        });
        return id;
    }

   
   
}


let ide = new ide();
let id = ide.getId();
let myId = new Id(id);
document.getElementById("id").innerHTML= myId.ids(id) ; 


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




