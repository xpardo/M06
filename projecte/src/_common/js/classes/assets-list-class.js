export class AssetsList {


    assets;

    constructor() {

        this.assets = [];
        this.obtenirDades().then ((data) =>  { this.assets=data; console.log(data) } );

    }
    async obtenirDades()
    {

        let data1 = await fetch('https://biblioteca-9f853-default-rtdb.europe-west1.firebasedatabase.app/assets.json')
        data1 = await data1.json();
        
        
        return data1;
    }

    cercaAssets(id) {

        for (let i of this.assets)
        {
            if (i.id_asset == id)
                return i.location;

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


        this.assets = ( localStorage.getItem('assets') )
                        ? JSON.parse( localStorage.getItem('assets') )
                        : [];

    }

}
