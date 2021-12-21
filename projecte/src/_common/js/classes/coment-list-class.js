export class ComentList {

    constructor(coments) {

        this.coments = coments;
        console.log(this.coments);
    }

    nouComent(coment) {

        this.coments.push(coment);
        this.desarLocalStorage();


    }
    cercaComent(id) {

        for (let i of this.coments)
        {
            if (i.id == id)
                return i.msg
        }
        return "Coment Desconegut"
    }
    cercaComents(id_array) {
 
        let retorn='';

        for (let i of id_array)
        {
            retorn += this.cercaComent(i)+"-"
        }
        return retorn.slice(0,-1); 
    }

    desarLocalStorage() {

        localStorage.setItem('coments',JSON.stringify(this.coments));
    }
    carregarLocalStorage() {


        this.coments = ( localStorage.getItem('coments') )
                        ? JSON.parse( localStorage.getItem('coments') )
                        : [];

    }


}
