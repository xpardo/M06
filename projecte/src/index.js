import { saludar } from './js/componentes';

import './styles.css';

import { creaHTMLFormulaariAfegir } from './vistes/afegirTiket.js'
import { creaHTMTicketsList, veureTicket} from './vistes/llistaTicket.js'


import { UsuarisList } from "./_common/js/classes/usuaris-list-class.js"  

import { AssetsList } from "./_common/js/classes/assets-list-class.js" 

import { obtenirDades, setTicket, delTicket} from "./js/firebase.js" 


import { TicketsList } from "./_common/js/classes/ticket-list-class.js"


import { ticket } from "./_common/js/classes/tickets-class.js"

import { LocationsList } from "./_common/js/classes/locations-list-class.js" 


import { AutorsList } from "./_common/js/classes/autors-list-class.js"


import { StatuseList } from "./_common/js/classes/statuses-list-class.js"


import { crearFormulariFiltrar } from './vistes/filtra.js'

const nombre = 'Xenia';

saludar( nombre );

import head from "./_common/html/head.html";
let hed = document.createElement('div');
hed.innerHTML=head;
document.body.append(hed);

import header from "./_common/html/header.html";
let heder = document.createElement('div');
heder.innerHTML=header;
document.body.append(heder);

import footer from "./_common/html/footer.html";
let div = document.createElement('div');
div.innerHTML=footer;
document.body.append(div);

let user = new UsuarisList();
let assets = new AssetsList();

console.log(user)

export let Ticket,statuses,tick,llista_autors,locations;

obtenirDades().then((data) => {
    console.log(data);

    const myArrClean = data[0].filter(Boolean)
    Ticket = new TicketsList (myArrClean);
    console.log("Ticket", data[0]);

    llista_autors = new AutorsList(data[1]);
    statuses = new StatuseList(data[3]);
    locations = new LocationsList(data[4]);
    console.log("locations",data[4])
    console.log("statuses",data[3])
    console.log("autors",data[1])
    
    let cos= document.createElement('div');
    cos.id="divllistar"
    cos.style.display="none"
    cos.className="container w-75"
    cos.innerHTML=creaHTMTicketsList(Ticket,llista_autors,statuses,locations);
    document.body.append(cos)

    cos = document.createElement('div');
    cos.id ="divafeigir"
    cos.style.display="none"
    cos.className="container w-50"
    cos.innerHTML=creaHTMLFormulaariAfegir(llista_autors,statuses,locations)
    document.body.append(cos)

    /**
     * component de Filtratge
     */
    let divfiltrar = document.createElement("div")
    divfiltrar.id="divfiltrar"
    divfiltrar.style.display="none"
    divfiltrar.className="container w-75"
    divfiltrar.innerHTML=crearFormulariFiltrar()
    document.body.append(divfiltrar)

    /**
    * Filtratge
    */

    document.querySelector('#ferfiltre').addEventListener('click',(event)=>{
        const ele =document.querySelector('#filtrar').value
        const v = llista_autors.filtraAutorsPerText(ele)
        const b = llista_location.filtraLocations(ele)
        const w = llista_statuse.filtraStatuses(ele)
        
        console.log(v,b,w)

        const dv = v.map(ele=>ele.id_usuari,ele=>ele.id_asset,ele=>ele.id)
        console.log(dv)

        const l = llista.filtrar(dv)
        console.log(l)
        let cos = document.querySelector("#divllista")
        cos.innerHTML=creaHTMTicketsList(l,llista_autors,llista_location,llista_statuse)
    })



  

/**
 * llistar
 */

    document.querySelector("#divllistar").addEventListener('click',(event) => {

        /* event.preventDefault();
        let index=event.target.parentNode.previousElementSibling.innerHTML
        console.log(index)

        veureTicket(ticket.tickets[index]) */
        
        event.preventDefault();
        let index=-1;

        console.log(event.target.className)
        if (event.target.className == "delere")
        {
            index=event.target.parentNode.parentNode.parentNode.id    
            console.log("Esborrar",event.target.src,index)
            llista.esborraTickets(parseInt(index));
           
            document.querySelector("#divllistar").innerHTML=creaHTMLlistaLlibres(Ticket,llista_autors,statuses,locations);
            delTicket(index)
           
        }
        else if (event.target.className == "vide")
        {
            index=event.target.parentNode.parentNode.parentNode.id    
            console.log("Veure",event.target.src,index)
        }
        else if (event.target.className == "mutare")
        {
            index=event.target.parentNode.parentNode.parentNode.id    
            console.log("Modificar",event.target.src,index)
        }

    })




    document.querySelector("#enviarTicket").addEventListener('click', (event) => {

       

        let title=document.querySelector("#title").value;
        let desc = document.querySelector("#desc").value;
        let autor =document.querySelector("#author").value
        let assets = document.querySelector("#model").value;
        let statuses = document.querySelector("#statuses").value;
        let locations = document.querySelector("#locations").value;
         
        console.warn("Darrer element",llista.darrer_element()) 
        let nouindex = parseInt(llista.darrer_element())+1;

        let ticks = new ticket(title,desc,autor,nom,assets,statuses,location);
        llista.nouTickets(tick);
        setTicket(ticks,nouindex);


        document.querySelector("#divllistar");
        let cos= document.createElement('div');
        cos.id="divllistar"
        cos.className="container w-75"
        cos.style.display="none"
    
        cos.innerHTML=creaHTMTicketsList(Ticket,llista_autors,llista_assets,statuses,locations);
        document.body.append(cos);
    
        alert (title + " " + nouindex)
    
    })




    document.querySelector("#afegir").addEventListener('click',(event) => {
    
    
        // Visualitzar taula de tiket
    
        document.querySelector("#divafegir").style.display="block"
        document.querySelector("#divllistar").style.display="none"
    
    
    })


    
    document.querySelector("#llistar").addEventListener('click',(event) => {
    
       
        document.querySelector("#divafegir").style.display="none"
        document.querySelector("#divllistar").style.display="block"
        // Visualitzar taula de tiket
    
    })

   
    document.querySelector("#filtrar").addEventListener('click',(event) => {
        const estat = document.querySelector("#divfiltrar").style.display;
        const estatl = document.querySelector("#divllistar").style.display;

        if (estat == "none" && estatl == "block"){
            document.querySelector("#divfiltrar").style.display = "block";
        }else{
            document.querySelector("#divfiltrar").style.display = "none";
        }
    })

    document.querySelector("#esborrar").addEventListener('click',(event) => {
    
        let esborrables = document.querySelectorAll(".esborrar");

        for (let i of esborrables)
        { 
            i.classList.toggle('invisible')
            console.log(i.innerHTML)
        }
        /**Visualitzar taula de tickets */ 
    })




    document.querySelector("#esborraritems").addEventListener('click',(event) =>{

        let clicked= document.querySelectorAll(".esborrar")

        for (let i of clicked) 
        {    
            if (i.checked == true){

                llista.esborraTickets()
                console.log(i.parentNode.parentNode.firstChild.innerHTML)   

            }
        }
    })
}) 

    
