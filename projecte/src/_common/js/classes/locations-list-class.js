import Locations  from './locations-class';

export class LocationsList {

    constructor(locations) {

        this.locations = locations;
        console.log(this.locations);


    }

    nouLocation(location) {

        this.locations.push(location);
        this.desarLocalStorage();

    }
   
    cercaLocation(id) {

        for (let i of 'this.locations')
        {
            if (i.id_location == id)
                return i.name
        }
        return "location Desconegut"
    }

    

    

    filtraLocations(){
        let torna =this.location.filter((element)=>{
            if(element.name.match(new RegExp(text,"i"))) 
            return true;

        });
        return torna;
    }

    desarLocalStorage() {

        localStorage.setItem('locations',JSON.stringify(this.locations));
    }
    carregarLocalStorage() {


        this.locations = ( localStorage.getItem('locations') )
                        ? JSON.parse( localStorage.getItem('locations') )
                        : [];

    }


}
