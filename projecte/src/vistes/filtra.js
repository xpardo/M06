export const crearFormulariFiltrar = () => {


    const html = `
    
    <div class="row g-0 mb-3 mt-3" id="filtratge"> 
        <div class="col-md-8 mb-3" >
            
            <input type="text" class="form-control" id="filtrar" placeholder="filtrar">          
        </div>
        <div class="col-md-4">
            <button class="btn btn-info" id="ferfiltre">Filtrar</button>
        </div>
    </div> 
    `

    

    return html;



}



//filtrar

///ubicació,autor,estat -> location,autor,estat