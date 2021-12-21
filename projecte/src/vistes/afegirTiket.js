export const creaHTMLFormulaariAfegir = (ticket) =>{
    
    let optionsed='';
    let optionssed='';
    let optionsge='';
    let optionsges='';
  
   
   

    for(let i of ticket.autor){
        optionsed += "<option value='"+ i.id_usuari + "'>"+i.username+""+"</option>"
    }



    for(let i of ticket.tecnic){
        optionssed += "<option value='"+i.assigned_id +"'> </option>"
    }


    for(let i of ticket.nom){
        optionsge += "<option value=' "+i.id_asset+"'>" + i.model + "'></option>"
    }
    for(let i of ticket.localitzacio ){
        optionsges += "<option value=' "+i.id_asset+"'>" +i.location+""+"</option>"
    }
  
  
    let html=
        `
            <form class="row g-0">

                <div class="col-md-12 mb-3" >
                    <label for="title"  class="form-label">   title  </label>
                    <input type="text" minlength="3" required pattern="[A-Za-z0-9]+" class="form-control" id="title" placeholder="id">
                     
                </div>
            
                <div class="col-md-12 mb-3" >
                    <label for="Desc"  class="form-label">Desc</label>
                    <input type="text" minlength="4" class="form-control" id="Desc" placeholder="id">
                    
                </div>

            
        
                <div class="col-md-4 mb-3">
                    <label for="author" class="form-label">author_id</label>
                    <select id="author" class="form-select" name="author">
                        ${ optionsed }
                    </select>
                </div>

                <div class="col-md-12 mb-3">
                    <label for="tecnic" class="form-label">Tecnic</label>
                    <select id="tecnic" class="form-select" name="tecnic">
                        ${ optionssed }    
                    </select>
                </div>
            

                <div class="col-md-8 mb-3">
                    <label for="model" class="form-label">nom</label>
                    <select id="model" class="form-select" name="model">
                        ${ optionsge }
                    </select>
                </div>

                <div class="col-md-4 mb-3">
                    <label for="location" class="form-label">localitzacio</label>
                    <select id="location" class="form-select" name="location">
                        ${ optionsges }
                    </select>
                </div>

                
                <div class="col-md-8 mb-3">
                    <button id="enviar" type="button" class="btn btn-warning">Enviar</button>
                </div>

    
            </form>
        `
    return html
}