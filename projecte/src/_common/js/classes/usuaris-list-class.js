export class UsuarisList {

    usuaris;

    constructor() {

   
        this.usuaris = [];
        this.obtenirDades().then ((data) =>  this.usuaris=data );


    }
    async obtenirDades()
    {

        let data1 = await fetch('https://biblioteca-9f853-default-rtdb.europe-west1.firebasedatabase.app/usuaris.json')
        data1 = await data1.json();
        return data1;
    }

    cercaUsuari(id) {

        for (let i of this.username)
        {
            if (i.id_usuari == id)
                return i.username
        }
        return "usuari Desconegud"
    }

    filtraUsuari(){
        let torna= this.usuaris.filter((element)=>{
            console.log(element.username)
            if(element.username.match(new RegExp(text,"i")))
            return true;
        });
        return torna;
    }

    desarLocalStorage() {

        localStorage.setItem('usuaris',JSON.stringify(this.usuaris));
    }
    carregarLocalStorage() {


        this.usuaris = ( localStorage.getItem('usuaris') )
                        ? JSON.parse( localStorage.getItem('usuaris') )
                        : [];

    }

    

}