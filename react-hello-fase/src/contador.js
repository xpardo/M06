import PropTypes from 'prop-types'

function contador({  item }) {
    const zero = 0
    const incrementar = (e) =>{
        e.preventDefault();
        console.log(document.getElementById("#zero").value )
            if (zero.value < 10) zero.value++;
    }
    const decrementar = (d) =>{
        d.preventDefault();
        console.log(document.getElementById("#zero").value )
            if (zero.value > 0) zero.value--;
    }
    const makeAnOrder = (m) =>{
        m.preventDefault();
        console.log(document.getElementById("#zero").value )
        document.write({zero});
    }
    <div>
  
        <div onclick={incrementar}>
       {0} <input  value={zero} id={zero}  disabled/>

            +
        </div>
    
        <div onclick={decrementar}>
        {0} <input  value={zero} id={zero}  disabled/>
            -
        </div>
                
        {0}<div onclick={makeAnOrder}>
        <input  value={zero} id={zero}  disabled/>

        </div>
    </div>



}

export default contador