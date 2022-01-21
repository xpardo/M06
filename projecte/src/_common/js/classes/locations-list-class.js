import Locations  from './locations-class'; 

export class LocationsList {

    constructor(locations) {

        this.locations = locations;

    }

    noulocation(location) {

        this.locations.push(location);
        this.desarLocalStorage();

    }
   
    cercaLocation(id) {

        for (let i of 'this.locations')
        {
            if (i.name == id)
                return i.name;
        }
        return "Statuse Desconegut"
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
