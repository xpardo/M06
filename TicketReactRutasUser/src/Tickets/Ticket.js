import React from 'react'

const Ticket = ({ editar, esborrarTicket, v}) => {



  return (

    <>
       
        <li key = { v.id } className="list-group-item" >
                    <table style={{class:'table table-striped table-warning'}}>
                      <thead>
                        <tr style={{backgroundColor: '#676565', color:'white'}}>
                          <th>TITLE </th>
                          
                          <th>DESCRIPCIO </th>
                        
                          <th>AUTHOR_ID </th>
                    
                          <th>ASSIGNED_ID </th>
                          
                          <th>STATUS_ID </th>
                          
                          <th>ASSET_ID  </th>

                          <th>CREATED</th>

                          <th>UPDATED</th>
                          
                          <th></th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr style={{backgroundColor: 'white'}}>
                          
                          <td>{ v.title }</td>
                         
                          <td>{ v.desc }</td>
                        
                          <td>{ v.author_id }</td>
                    
                          <td>{ v.assigned_id }</td>
                         
                          <td>{ v.status_id }</td>
                         
                          <td>{ v.asset_id }</td>

                          <td>{ v.create }</td>

                         <td>{ v.update }</td>
                         

                                            
                            <td><button 
                            className="btn btn-sm btn-danger float-right mx-2"
                            onClick={ () => esborrarTicket(v.id) }
                            >Esborrar</button></td>
                            <td>
                            <button 
                            className="btn btn-sm btn-warning float-right"
                            onClick={ () => editar (v)}
                            >Editar</button></td>
                         
                        </tr>
                        </tbody>
                    </table>
                  </li>
           
        
    </> 
  )
}

export default Ticket