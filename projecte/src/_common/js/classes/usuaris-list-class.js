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

    cercaUsuari(id_usuari) {

        for (let i of this.user)
        {
            if (i.id == id_usuari)
                return i.username
        }
        return "usuari Desconegud"
    }

    

}