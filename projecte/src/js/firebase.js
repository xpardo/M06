
export async function obtenirDades()  {

    let data1,data2;
    

    try {

        data1 = await fetch('https://biblioteca-9f853-default-rtdb.europe-west1.firebasedatabase.app/usuaris.json')
        data1 = await data1.json();
        
        data2 = await fetch('https://biblioteca-9f853-default-rtdb.europe-west1.firebasedatabase.app/assets.json')
        data2 = await data2.json();

    


        return ([data1,data2]);



    }
    catch {

        console.log("Cagado la hemos")
        return "null"
    }
   

}

