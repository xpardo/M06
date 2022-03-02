import Hello from "./Hello"

function HelloWorld() {
       
    return Hello.map((contacts, index) => {
       const { card, name, avatar, phone, email } = contacts 
       return (
         <table>  
            <tr key={card}>
               <td>{card}</td>
               <td>{name}</td>
               <td>{avatar}</td>
               <td>{phone}</td>
               <td>{email}</td>
            </tr>
          </table> 
       )
    })

 }


export default HelloWorld