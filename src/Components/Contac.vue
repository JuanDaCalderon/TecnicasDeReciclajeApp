<template>
    <!--FORM-->
 	<section class="contacto">
 				<div class="container">
 					<div class="row">

						<!-- FORM -->
						<div class="col-md-9 col-sm-9">

							<h3>¡Comunícate con nuestro <strong><em>Equipo!</em></strong></h3>

							<!-- Alert Success -->
							<div id="alert_success" class="alert alert-success margin-bottom-30">
								<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
								<strong>GRACIAS!</strong> Tu Mensaje fue correctamente enviado!
							</div><!-- /Alert Success -->


							<!-- Alert Failed -->
							<div id="alert_failed" class="alert alert-danger margin-bottom-30">
								<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
								<strong>[SMTP] Error!</strong> Error interno de servidor!
							</div><!-- /Alert Failed -->


							<!-- Alert Mandatory -->
							<div id="alert_mandatory" class="alert alert-danger margin-bottom-30">
								<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
								<strong>Lo sentimos!</strong> Necesitas completar todos los campos!
							</div><!-- /Alert Mandatory -->


							<form id="Formulario" action="https://formspree.io/webtecnicasdereciclaje@gmail.com" method="POST">
								<fieldset>
									<div class="row">
										<div class="form-group">
											<div class="col-md-6">
												<label for="contact:name">Nombre: <span class="R" v-if="!nombre">Requerido*</span></label>
												<input required type="text" value="" class="form-control" name="name" id="contact:name" v-model="nombre">
											</div>
											<div class="col-md-6">
												<label for="contact:phone">Telefono: <span class="R" v-if="!telefono">Requerido*</span></label>
												<input required type="text" value="" class="form-control" name="phone" id="contact:phone" v-model="telefono">
											</div>
										</div>
									</div>
									<div class="row">
										<div class="form-group">
											<div class="col-md-12">
												<label for="contact:email">Correo Electronico: <span class="R" v-if="!correo">Requerido*</span><span class="R" v-if="alto"> Formato Incorrecto</span></label>
												<input required type="email" value="" class="form-control email" name="email" id="contact:email" v-model="correo" @blur="validar">
											</div>
										</div>
									</div>
									<div class="row">
										<div class="form-group">
											<div class="col-md-12">
												<label for="contact:message">Mensaje: <span class="R" v-if="!mensaje">Requerido*</span></label>
												<textarea required maxlength="10000" rows="8" class="form-control" name="message" id="contact:message" v-model="mensaje"></textarea>
											</div>
										</div>
									</div>

								</fieldset>

								<div class="row">
									<div class="col-md-12">
										<button type="submit" class="btn btn-primary enviar">ENVIAR</button>
									</div>
								</div>
							</form>

						</div>
						<!-- /FORM -->


						<!-- INFO -->
						<div class="col-md-3 col-sm-3">

							<h2>Visitanos</h2>

							<p>
								Estamos ubicados en la Universidad Militar Nueva Granada, donde podrán encontrar a todo nuestro equipo de desarrollo multimedia.
							</p>

							<hr />

							<p class="info">
								<span class="block"><strong><i class="fa fa-map-marker"></i> Dirección:</strong> Carrera 11-101-80 | Bogotá - Colombia</span>
								<span class="block"><strong><i class="fa fa-phone"></i> Telefono:</strong> <a href="tel:314 4796056">314 4796056</a></span>
								<span class="block"><strong> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;	</strong> <a href="tel:315 3759440">315 3759440</a></span>
								<span class="block"><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong> <a href="tel:312 4066540">312 4066540</a></span>

								<span class="block"><strong><i class="fa fa-envelope"></i> Email:</strong> <a href="jsebastiancp@hotmailcom">jsebastiancp@hotmailcom</a></span>
								<span class="block"><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong> <a href="andresroberto1187@gmail.com">andresroberto1187@gmail.com</a></span>
								<span class="block"><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong> <a href="juandacalji@gmail.com">juandacalji@gmail.com</a></span>
							</p>

							<hr />
						</div>
						<!-- /INFO -->

					</div>
 				</div>
 	</section>		
    <!--/FORM-->
</template>

<script>
export default {
    data(){
        return{
            nombre:"",
 			telefono:"",
 			correo:"",
 			mensaje:"",
 			alto:""
        }
    },
 		methods:{
 			validar: function(){
 				var texto = $('.email').val();
 				var arroba =texto.indexOf("@");
 				var punto =texto.indexOf(".");
 				if (arroba == -1 || punto == -1) {
 					this.alto = true;
 				}else{
 					this.alto = false;
 				}
 			}
 		}
}
</script>