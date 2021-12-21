import { saludar } from './js/componentes';

import './styles.css';

import { formulariLogin,hideLogin } from "./vistes/loginView.js";

import { creaHTMLFormulaariAfegir } from './vistes/afegirTiket.js'

import { UsuarisList } from "./_common/js/classes/usuaris-list-class.js"  

import { AssetsList } from "./_common/js/classes/assets-list-class.js" 

import { obtenirDades } from "./js/firebase.js" 


import { creaHTMTicketsList, veureTicket} from './vistes/llistaTicket.js'


import { TicketsList } from "./_common/js/classes/ticket-list-class.js"

import { StatuseList } from "./_common/js/classes/statuses-list-class.js"

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


var ticket,tecnic;

obtenirDades().then((data) => {
    console.log(data);

    ticket = new TicketsList();
    tecnic = new StatuseList();

    
    let cos= document.createElement('div');
    cos.id="divllistar"
    cos.style.display="none"
    cos.className="container w-75"
    cos.innerHTML=creaHTMTicketsList(ticket,tecnic);
    document.body.append(cos)

    cos = document.createElement('div');
    cos.id ="divafeigir"
    cos.style.display="none"
    cos.className="container w-50"
    cos.innerHTML=creaHTMLFormulaariAfegir(ticket,tecnic)
    document.body.append(cos)


    document.querySelector("#divllistar").addEventListener('click',(event) => {


        event.preventDefault();
        let index=event.target.parentNode.previousElementSibling.innerHTML
        console.log(index)

        veureTicket(ticket.tickets[index])
        

    })




      document.querySelector("#enviarTicket").addEventListener('click', (event) => {


        let nom=[];
    
        let title=document.querySelector("#titol").value;
        let desc = document.querySelector("#descripcio").value;
        nom[0]=document.querySelector("#nom").value
        let assets = document.querySelector("#assets").value;
        let tecnic = document.querySelector("#tecnic").value;

         
        let nouindex = parseInt(ticket.darrer_element())+1;

        let tick = new ticket(title,desc,nom,assets,tecnic);
        ticket.novaticketncia(tick);
        setTicket(tick,nouindex);

        document.querySelector("#divllistar").remove();
        let cos= document.createElement('div');
        cos.id="divllistar"
        cos.className="container w-75"
        cos.style.display="none"
    
        cos.innerHTML=creaHTMTicketsList(ticket,desc,llista_usuari,llista_assets,tecnic);
        document.body.append(cos);
    
        alert (title+ " " + nouindex)
    
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

    document.querySelector("#esborraritems").addEventListener('click',(event) =>
    {

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

    