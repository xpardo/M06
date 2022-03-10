import PropTypes from 'prop-types'

function contador({  item }) {
    const zero = 0
    const incrementar = (e) =>{
        e.preventDefault();
        console.log(document.getElementById("#zero").value )
            if (valor.value < 10) valor.value++;
    }
    const decrementar = (d) =>{
        d.preventDefault();
        console.log(document.getElementById("#zero").value )
            if (valor.value > 0) valor.value--;
    }
    const makeAnOrder = (m) =>{
        m.preventDefault();
        console.log(document.getElementById("#zero").value )
        document.write("<h2>ok</h2>");
    }
    <div>
  
        <div onclick={incrementar}>
        0<input type={text} value={zero} id={item} name={item} disabled/>

            +
        </div>
    
        <div onclick={decrementar}>
        0<input type={text} value={zero} id={item} name={item} disabled/>

            -
        </div>
                
        <div onclick={makeAnOrder}>
        0<input type={text} value={zero} id={item} name={item} disabled/>

            Aceptar
        </div>
    </div>



}

export default contador