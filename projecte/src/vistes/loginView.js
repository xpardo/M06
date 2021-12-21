var login;



export const formulariLogin = () => {
    
    let html = `
                  
		<div class="row text-center login-page">
			<div class="col-md-12 login-form">
				<div class="row">
					<div class="col-md-12 login-form-header">
						<p class="login-form-font-header">Biblioteca</p>
					</div>
				</div>
			<div class="row">
				<div class="col-md-12 login-from-row">
						<input name="usuario" type="text" placeholder="Usuario" required/>
					</div>
				</div>
			<div class="row">
				<div class="col-md-12 login-from-row">
					<input name="password" type="password" placeholder="Contraseña" required/>
				</div>
			</div>
			<div class="row">
				<div class="col-md-12 login-from-row">
					<button id="login" class="btn btn-info">Entrar</button>
				</div>
			</div>
			</form>
		</div>
	</div>
         
         `   
        
         login = document.createElement('div');
         login.innerHTML=html;
         login.style.display="block"
         login.className="container w-50"
         document.body.append(login)


		 document.querySelector("#login").addEventListener("click",() => {


			console.log("He fet login");

				


		 });


}

export const hideLogin = () => {

	login.style.display ="none"
		
}