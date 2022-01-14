import { saludar } from './js/componentes';

import './styles.css';

import { creaHTMLFormulaariAfegir } from './vistes/afegirTiket.js'

import { UsuarisList } from "./_common/js/classes/usuaris-list-class.js"  

import { AssetsList } from "./_common/js/classes/assets-list-class.js" 

import { obtenirDades } from "./js/firebase.js" 

import { creaHTMTicketsList, veureTicket} from './vistes/llistaTicket.js'

import { TicketsList } from "./_common/js/classes/ticket-list-class.js"

import { StatuseList } from "./_common/js/classes/statuses-list-class.js"

import { crearFormulariFiltrar } from './vistes/filtra.js';

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

var ticket,Estat;

obtenirDades().then((data) => {
    console.log(data);

    const myArrClean = data[0].filter(Boolean)
    ticket = new TicketsList();
    Estat = new StatuseList();
    
    let cos= document.createElement('div');
    cos.id="divllistar"
    cos.style.display="none"
    cos.className="container w-75"
    cos.innerHTML=creaHTMTicketsList(ticket,Estat);
    document.body.append(cos)

    cos = document.createElement('div');
    cos.id ="divafeigir"
    cos.style.display="none"
    cos.className="container w-50"
    cos.innerHTML=creaHTMLFormulaariAfegir(ticket,Estat)
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

    document.querySelector('#ferfiltrar').addEventListener('click',(event)=>{
        const ele =document.querySelector('#filtrar').value
        const v = llista_usuari.filtraUsuari(ele)
        const b = llista_assets.filtraAssets(ele)
        const w = llista_statuse.filtraStatuses(ele)
        
        console.log(v,b,w)

        const dv = v.map(ele=>ele.id_usuari,ele=>ele.id_asset,ele=>ele.id)
        console.log(dv)

        const l = llista.filtrar(dv)
        console.log(l)
        let cos = document.querySelector("#divllista")
        cos.innerHTML=creaHTMTicketsList(l,llista_usuari,llista_assets,llista_statuse)
        

    })


    document.querySelector("filtrar").addEventListener('click',(event) =>{
        const estat = document.querySelector("#divfiltrar").style.display;
        const estatl = document.querySelector("#divllistar").style.display;

        if (estat == "none" && estatl == "block"){
            document.querySelector("#divfiltrar").style.display = "block";
        }else{
            document.querySelector("#divfiltrar").style.display = "none";
        }
    });


    document.querySelector("#divllistar").addEventListener('click',(event) => {

        event.preventDefault();
        let index=event.target.parentNode.previousElementSibling.innerHTML
        console.log(index)

        veureTicket(ticket.tickets[index])
        
    })

    document.querySelector("#enviarTicket").addEventListener('click', (event) => {

    
        let title=document.querySelector("#title").value;
        let desc = document.querySelector("#desc").value;
        let nom =document.querySelector("#author").value
        let assets = document.querySelector("#model").value;
        let Estat = document.querySelector("#estat").value;
        let location = document.querySelector("#location").value;
         
        let nouindex = parseInt(ticket.darrer_element())+1;

        let tick = new ticket(title,desc,nom,assets,Estat,location);
        ticket.nouTickets(tick);
        setTicket(tick,nouindex);

        document.querySelector("#divllistar").remove();
        let cos= document.createElement('div');
        cos.id="divllistar"
        cos.className="container w-75"
        cos.style.display="none"
    
        cos.innerHTML=creaHTMTicketsList(ticket,llista_usuari,llista_assets,Estat);
        document.body.append(cos);
    
        alert (title + " " + nouindex)
    
    })

    document.querySelector("#afegir").addEventListener('click',(event) => {
       
        /**Visualitzar taula de tikets*/ 
    
        document.querySelector("#divafegir").style.display="block"
        document.querySelector("#divllistar").style.display="none"
    
    })
    
    document.querySelector("#llistar").addEventListener('click',(event) => {
      
        document.querySelector("#divafegir").style.display="none"
        document.querySelector("#divllistar").style.display="block"
        /** Visualitzar taula de tickets*/
    
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

    
