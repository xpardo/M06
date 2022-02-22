class Incidencies{
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
        this.incide = (localStorage.getItem('incide'))
        ? JSON.parse(localStorage.getItem('incide'))
        :[];
    }
}



inciden = new Incidencies();

tick = new ticket(id,title,desc,author_id,assigned_id,assets_id,created,update);

inciden.novaIncidencia(tick);


 