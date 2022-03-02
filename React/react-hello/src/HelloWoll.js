import Hello from "./Hello"

function HelloWorld() {
           
    return Hello.map((contacts, index) => {
       const { id, name, imgURL, phone, email } = contacts 
       return (
          <tr key={id}>
             <td>{id}</td>
             <td>{name}</td>
             <td>{imgURL}</td>
             <td>{phone}</td>
             <td>{email}</td>
          </tr>
       )
    })

 }


export default HelloWorld