import 'jquery'

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


import { ModelsList } from "./_common/js/classes/model-list-class.js" 


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

console.log("usuaris",user)
console.log("assets",assets)

export let Ticket,llista_autors,statuses, models, locations;

obtenirDades().then((data) => {
    console.log("data",data);

    const myArrClean = data[0].filter(Boolean)
    Ticket = new TicketsList (myArrClean);
    console.log("Data 0", data[0]);

    llista_autors = new AutorsList(data[1]);
    statuses = new StatuseList(data[3]);
    locations = new LocationsList(data[4]);
    models = new ModelsList(data[5]); 
    console.log("models",data[5])
    console.log("locations",data[4])
    console.log("statuses",data[3])
    console.log("autors",data[1])
    
   /* 
    let cos= document.createElement('div');
    cos.id="divllistar"
    cos.style.display="none"
    cos.className="container w-75"
    cos.innerHTML=creaHTMTicketsList(Ticket,llista_autors,statuses,models,locations);
    document.body.append(cos)

 

    cos = document.createElement('div');
    cos.id ="divafegir"
    cos.style.display="none"
    cos.className="container w-50"
    cos.innerHTML=creaHTMLFormulaariAfegir(llista_autors,statuses,models,locations)
    document.body.append(cos)

    let divfiltrar = document.createElement("div")
    divfiltrar.id="divfiltrar"
    divfiltrar.style.display="none"
    divfiltrar.className="container w-75"
    divfiltrar.innerHTML=crearFormulariFiltrar()
    document.body.insertBefore(divfiltrar,document.querySelector("#divllistar"))


   

    document.querySelector('#ferfiltre').addEventListener('click',(event)=>{


        const ele =document.querySelector('#filtrar').value
        const v = llista_autors.filtraAutorsPerText(ele);

    
        const eles =document.querySelector('#filtrar').value
        const w = statuses.filtraStatuses(eles)

        const eless =document.querySelector('#filtrar').value
        const b = locations.filtraLocations(eless)
        
        console.log("filtra autor",v)
        console.log("filtra statuses",w)
        console.log("filtra locations",b)

        const dv = v.map(ele=>ele.id)//users
        const dw = w.map(eles=>eles.id)//statuses
        const db = b.map(eless=>eless.name)//locations



        const l = Ticket.Filtrar(dv)
        const c = Ticket.Filtrar(dw)
        const t = Ticket.Filtrar(db)

        console.log("filtra autor",l)
        console.log("filtra statuses",c)
        console.log("filtra locations",t)

        let cos = document.querySelector("#divllistar")
        cos.innerHTML=creaHTMTicketsList(l,c,t,llista_autors,statuses,models,locations)



    }) 


    document.querySelector("#divllistar").addEventListener('click',(event) => {

            
        event.preventDefault();
        let index=-1;

        console.log("provant llista",event.target.className)
        
        if (event.target.className == "delete")
        {
            index=event.target.parentNode.parentNode.parentNode.id    
            console.log("Esborrar",event.target.src,index)
            Ticket.esborraTickets(parseInt(index));
        
            document.querySelector("#divllistar").innerHTML=creaHTMTicketsList(Ticket,llista_autors,statuses,models,locations);
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

        let title = document.querySelector("#title").value;
        let desc = document.querySelector("#desc").value;
        let autors =document.querySelector("#autors").value
        let models = document.querySelector("#models").value;
        let statuses = document.querySelector("#statuses").value;
        let locations = document.querySelector("#locations").value;     

        console.warn("Darrer element",Ticket.darrer_element()) 
        let nouindex = parseInt(Ticket.darrer_element())+1;

        let ticks = new ticket(nouindex,title,desc,autors,models,statuses,locations);
        Ticket.nouTickets(ticks);
        setTicket(ticks,nouindex);

        document.querySelector("#divllistar");
        let cos= document.createElement('div');
        cos.id="divllistar"
        cos.className="container w-75"
        cos.style.display="none"
    
        cos.innerHTML=creaHTMTicketsList(Ticket,llista_autors,models,statuses,locations);
        document.body.append(cos);
    
        alert (title + " " + nouindex)
    
    }) 



     document.querySelector("#afegir").addEventListener('click',(event) => {
    
        document.querySelector("#divafegir").style.display="block"
        document.querySelector("#divllistar").style.display="none"
    
    
    })
 
    

    document.querySelector("#llistar").addEventListener('click',(event) => {
    
        document.querySelector("#divafegir").style.display="none"
        document.querySelector("#divllistar").style.display="block"

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
    
    
    
    
    
    
    
    
    
    
    */

    //block=show
    //none = hide

    /**
     * 
     * Jquery
     */

 

    let cos = $("<div></div>", {

        id: "divllistar",
        
        class: "container w-75",
        
        hide: true,

        html:creaHTMTicketsList(Ticket,llista_autors,statuses,models,locations)
        
        
    })
    $("body").append(cos)
       

    let co = $("<div></div>", {

            id: "divafegir",
            
            class: "container w-75",
            
            hide: true,
    
            html:creaHTMLFormulaariAfegir(llista_autors,statuses,models,locations)
            
            
    })
            
        $("body").append(co)
    
    


    let divfiltrar = $("<div></div>", {

        id: "divfiltrar",
        
        class: "container w-75",
        
        hide: true,

        html:crearFormulariFiltrar()
        
        
    })
        
    $("body").append(divfiltrar) 

 


    $("#ferfiltre").on ({
        click: ((event) => {


            /**
             * Incidències: Per ubicacions, per autor, per estat
             */

            const ele =document.querySelector('#filtrar').value
            const v = llista_autors.filtraAutor(ele);//users

        
            const eles =document.querySelector('#filtrar').value
            const w = statuses.filtraStatuses(eles)//statuses

            const eless =document.querySelector('#filtrar').value
            const b = locations.filtraAssigned(eless)//location
            
            console.log("filtra autor",v)
            console.log("filtra statuses",w)
            console.log("filtra locations",b)

            const dv = v.map(ele=>ele.id)//users
            const dw = w.map(eles=>eles.id)//statuses
            const db = b.map(eless=>eless.name)//locations


            const l = Ticket.Filtrar(dv)
            const c = Ticket.Filtrar(dw)
            const t = Ticket.Filtrar(db)

            console.log("filtra autor",l)
            console.log("filtra statuses",c)
            console.log("filtra locations",t)

            $("#divllistar").html(creaHTMTicketsList(l,c,t,llista_autors,statuses,models,locations))

        })
    })




  
    $("#divllistar").on({
        click:((event)=>{
            event.preventDefault();
            let index=-1;

            console.log("provant llista",event.target.className)
            
            if (event.target.className == "delete")
            {
                index=event.target.parentNode.parentNode.parentNode.id    
                console.log("Esborrar",event.target.src,index)
                Ticket.esborraTickets(parseInt(index));
            
                $("#divllistar").html(creaHTMTicketsList(Ticket,llista_autors,statuses,models,locations));
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
    })




    $("#enviarTicket").on({
        click:((event)=>{
            let title     = $("#title").val();
            let desc      = $('#desc').val();
            let autors    = $('#autors').val();
            let assigned   = $('#assigned').val();
            let models    = $('#models').val();
            let statuses  = $('#statuses').val();
            let locations = $('#locations').val();
        
            
            console.warn("Darrer element",Ticket.darrer_element()) 
            let nouindex = parseInt(Ticket.darrer_element())+1;
        
        

            let co = $("<div></div>", {

                id: "divllistar",
                
                class: "container w-75",
                
                hide: true,
        
                html:creaHTMTicketsList(Ticket,llista_autors,models,statuses,locations)
                
                
            })
                
            $("body").append(co)

            let ticks = new ticket(nouindex,title,desc,autors,assigned,models,statuses,locations);
            Ticket.nouTickets(ticks);
            setTicket(ticks,nouindex);
        

            alert (title + " " + nouindex)

        })

    })


    $("#afegir").on("click",(event)=> {
        $("#divllistar").hide("slow");
            $("#divafegir").show("slow");

        $("button").on("click",function() {
            $("h1").css("color","red")
            
        })

    })



    $("#llistar").on({
        click:((event)=>{
            $("#divllistar").show("slow");
                $("#divafegir").hide("slow");
                
        })
    })

   

    $("#filtrar").on({
        click:((event)=>{
            const estat = ("#divfiltrar");
            const estatl = ("#divllistar");

            if (estat == "none" && estatl == "block"){
                $("#divfiltrar").hide("slow");
            }else{
                $("#divfiltrar").show("slow");
            }
                
        })
    })






    $("#esborraritems").on({
        click: ((event) => {
            let clicked= $(".esborrar")

            for (let i of clicked) 
            {
                
                if (i.checked == true){

                    llista.esborraTickets()
                    console.log(i.parentNode.parentNode.firstChild.innerHTML)   


                }


            }
        })
    })

    
    




}) 

    
