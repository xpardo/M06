export const creaHTMLFormulaariAfegir = (llistaautors,statuses,locations) => {
    
    let optionsed='';
    let optionssed='';
    let optionsges='';
   


    for (let i of llistaautors.autors)  {
   
        optionsed += "<option value=" + i.id_autor + ">"+i.nom+" "+i.cognoms +"</option>"
    }

    for(let i of statuses.statuses) {
        optionssed += "<option value='"+i.status_id +"'>"+i.notes+"'</option>"
    }
  
    for(let i of locations.locations){
        optionsges += "<option value=' "+i.id+"'>" +i.name+"</option>"
    }

   
  
    let html=
        `
            <form class="row g-0">

                <div class="col-md-12 mb-3" >
                    <label for="title"  class="form-label"> title </label>
                    <input type="text" minlength="3" required pattern="[A-Za-z0-9]+" class="form-control" id="title" placeholder="id">
                </div>
            
                <div class="col-md-12 mb-3" >
                    <label for="Desc"  class="form-label">Desc</label>
                    <input type="text" minlength="4" class="form-control" id="desc" placeholder="id">
                    
                </div>
      
                <div class="col-md-4 mb-3">
                    <label for="author" class="form-label">author</label>
                    <select id="author" class="form-select" name="author">
                        ${ optionsed }
                    </select>
                </div>

                <div class="col-md-12 mb-3">
                    <label for="statuses" class="form-label">Estat</label>
                    <select id="statuses" class="form-select" name="statuses">
                        ${ optionssed }    
                    </select>
                </div>
            
                <div class="col-md-4 mb-3">
                    <label for="model" class="form-label">model</label>
                    <input type="text" class="form-control" id="model" name="model">

                    </select>
                </div>

                <div class="col-md-4 mb-3">
                    <label for="locations" class="form-label">localitzacio</label>
                    <select id="locations" class="form-select" name="locations">
                        ${ optionsges }
                    </select>
                </div>
    
                <div class="col-md-8 mb-3">
                    <button id="enviarTicket" type="button" class="btn btn-warning">Enviar</button>
                </div>

            </form>
        `
    return html
}