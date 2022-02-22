export class AssetsList {


    assets;

    constructor(assets) {

        this.assets = [];
        this.obtenirDades().then ((data) =>  { this.assets=data; console.log("assets",data) } );

    }
    async obtenirDades()
    {

        let data1 = await fetch('https://assets-806fa-default-rtdb.firebaseio.com/assets.json')
        data1 = await data1.json();
        
        
        return data1;
    }


    nouAssets(assets) {

        this.assets.push(assets);
        this.desarLocalStorage();


    }
    cercaAssets(id) {

        for (let i of this.assets)
        {
            if (i.id_asset == id)
                return i.model;

        }
        return "assets Desconeguda"
    }


    filtraAssets()
    {
        let torna = this.assets.filter((element)=>{
            console.log(element.location.match(new RegExp(text,"i")))
            return true;
        });
        return torna;
    }



    desarLocalStorage() {

        localStorage.setItem('assets',JSON.stringify(this.assets));
    }
    carregarLocalStorage() {


        this.autors = ( localStorage.getItem('assets') )
                        ? JSON.parse( localStorage.getItem('assets') )
                        : [];

    }
 

}
