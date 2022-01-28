export class UsuarisList {

    usuaris;

    constructor() {

   
        this.usuaris = [];
        this.obtenirDades().then ((data) =>  this.usuaris=data );


    }
    async obtenirDades()
    {

        let data1 = await fetch('https://ticket-ec38b-default-rtdb.firebaseio.com/usuaris.json')
        data1 = await data1.json();
        return data1;
    }

}