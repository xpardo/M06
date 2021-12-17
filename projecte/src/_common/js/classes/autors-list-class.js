import Autors  from './autors-class';

export class AutorsList {

    constructor(autors) {

        this.autors=autors;
        //this.carregarLocalStorage();
        //console.log(this.autors);
    }

    nouAutor(autor) {

        this.autors.push(autor);
        this.desarLocalStorage();


    }
    cercaAutor(id) {

        for (let i of this.autors)
        {
            if (i.id_autor == id)
                return i.cognoms + ", "+i.nom;
        }
        return "Autor Desconegut"
    }
    cercaAutors(id_array) {
        
        let retorn='';

        for (let i of id_array)
        {
            retorn += this.cercaAutor(i)+"-"
        }
        return retorn.slice(0,-1); // Elimina el darrer '-'
    }

    desarLocalStorage() {

        localStorage.setItem('autors',JSON.stringify(this.autors));
    }
    carregarLocalStorage() {


        this.autors = ( localStorage.getItem('autors') )
                        ? JSON.parse( localStorage.getItem('autors') )
                        : [];

    }


}

