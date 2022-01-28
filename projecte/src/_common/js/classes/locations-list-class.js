import Locations  from './locations-class'; 

export class LocationsList {

    constructor(locations) {

        this.locations = locations;
    }

    nouLocation(location) {

        this.locations.push(location);
        this.desarLocalStorage();

    }
   
    cercaLocation(id) {

        console.log(this.locations)
        
        for (let i of this.locations)
        {
            if (i.id_location == id)
                return i.name
        }
        return "location Desconegut"
    }

    

    

    filtraLocations(){
        let locations =this.locations.filter((element)=>{
            return true;

        });
        return locations;
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
