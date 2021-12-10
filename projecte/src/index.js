import { saludar } from './js/componentes';


import './styles.css';

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




import { AssetsList } from "./_common/js/classes/assets-list-class.js"

let assets = new AssetsList();
 

import { UsuarisList } from "./_common/js/classes/usuaris-list-class.js"


let user = new UsuarisList();


import { creaHTMLFormulaariAfegir } from './js/componentes';


let cos = document.createElement('div');
    cos.id ="divafeigir"
    cos.className="container w-50"
    cos.innerHTML=creaHTMLFormulaariAfegir(user,assets)
    document.body.append(cos)

