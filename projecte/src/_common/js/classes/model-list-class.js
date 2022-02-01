import Models  from './model-class'; 

export class ModelsList {

    constructor(models) {

        this.models = models;
    }

    nouModel(model) {

        this.models.push(model);
        this.desarLocalStorage();

    }
   
    cercaModel(id) {


        for (let i of this.models)
        {
            if (i.id == id)
                return i.model
        }
        return "model Desconegut"
    }

    

    desarLocalStorage() {

        localStorage.setItem('models',JSON.stringify(this.models));
    }
    carregarLocalStorage() {


        this.models = ( localStorage.getItem('models') )
                        ? JSON.parse( localStorage.getItem('models') )
                        : [];

    }


}
