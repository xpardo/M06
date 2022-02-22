import Autors  from './autors-class';

export class AutorsList {

    constructor(autors) {

        this.autors=autors;
        
    }

    nouAutor(autor) {

        this.autors.push(autor);
        this.desarLocalStorage();


    }
    cercaAutor(id) {

        for (let i of this.autors)
        {
            if (i.id == id)
                return i.username;
        }
        return "Autor Desconegut"
    }
 

    filtraAutorsPerText(text)
    {
        let autors= this.autors.filter((element) => {
        
            // console.log(element.nom)
            if (element.nom.match(new RegExp(text,"i")) 
                || element.cognoms.match(new RegExp(text,"i"))) return true;
        })
        return autors;
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