export class UsuarisList {

    usuaris;

    constructor() {

   
        this.usuaris = [];
        this.obtenirDades().then ((data) =>  this.usuaris=data );


    }
    async obtenirDades()
    {

        let data1 = await fetch('https://usuaris-85906-default-rtdb.firebaseio.com/usuaris.json')
        data1 = await data1.json();
        return data1;
    }

}