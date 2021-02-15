<template>
    <div>
            <section class="row nomargin">
			</section>
			<!-- Member -->
			<section class="nopadding">
				
				<div class="row nomargin">
				
					<!-- LEFT -->
					<div class="col-md-6 col-sm-6 nopadding nomargin">

						<img class="img-responsive" src="assets/images/Sources/andres.jpg" alt="Director" />

					</div>

					<!-- RIGHT -->
					<div class="col-md-6 col-sm-6 nopadding nomargin">
					
						<div class="padding-40">
				
							<h2>Andrés Roberto Solano Ricaurte</h2>
							<p>Me destaco en diferentes áreas de la multimedia, 
							experiencia en modelado y texturizado arte 3D,
							animaciones 3D, integración en Unity3D de bajos
							polígonos, creación de videos, diseño de imágenes,
							audio, tecnologías web y programación C++ y Java.</p>


							<div class="row margin-top-100">
								
								

								<!-- skills -->
								<div class="col-md-10 col-sm-6 skills" id="BarM1">

							

									<h5 class="nomargin"><span class="pull-right"></span>PÁGINA WEB</h5>
									<div class="progress"><!-- progress bar -->
										<div class="progress-bar progress-bar-info" role="progressbar" aria-valuemin="0" aria-valuemax="100" v-bind:style="{width:percentage_web+'%'}"></div>
									</div><!-- /progress bar -->

									<h5 class="nomargin"><span class="pull-right"></span>MODELADO Y TEXTURIZADO 3D </h5>
									<div class="progress"><!-- progress bar -->
										<div class="progress-bar progress-bar-info" role="progressbar" aria-valuemin="0" aria-valuemax="100" v-bind:style="{width:percentage_Modelado+'%'}"></div>
									</div><!-- /progress bar -->

									<h5 class="nomargin"><span class="pull-right"></span>PROGRAMACIÓN </h5>
									<div class="progress"><!-- progress bar -->
										<div class="progress-bar progress-bar-info" role="progressbar" aria-valuemin="0" aria-valuemax="100" v-bind:style="{width:percentage_Programacion+'%'}"></div>
									</div><!-- /progress bar -->

									<h5 class="nomargin"><span class="pull-right"></span>EDICIÓN VIDEO Y AUDIO</h5>
									<div class="progress"><!-- progress bar -->
										<div class="progress-bar progress-bar-info" role="progressbar" aria-valuemin="0" aria-valuemax="100" v-bind:style="{width:percentage_Video+'%'}"></div>
									</div><!-- /progress bar -->
									
									<h5 class="nomargin"><span class="pull-right"></span>ANIMACIÓN 3D</h5>
									<div class="progress"><!-- progress bar -->
										<div class="progress-bar progress-bar-info" role="progressbar" aria-valuemin="0" aria-valuemax="100" v-bind:style="{width:percentage_Anim+'%'}"></div>
									</div><!-- /progress bar -->


									

								</div>
								<!-- skills -->

							</div>
							
							<hr />

							<!-- social icons -->
							<div class="text-center" >

								<a href="#" class="social-icon social-icon-transparent social-facebook" data-toggle="tooltip" data-placement="top" title="Facebook">
									<i class="icon-facebook"></i>
									<i class="icon-facebook"></i>
								</a>

								<a href="#" class="social-icon social-icon-transparent social-twitter" data-toggle="tooltip" data-placement="top" title="Twitter">
									<i class="icon-twitter"></i>
									<i class="icon-twitter"></i>
								</a>

								<a href="#" class="social-icon social-icon-transparent social-linkedin" data-toggle="tooltip" data-placement="top" title="Linkedin">
									<i class="icon-linkedin"></i>
									<i class="icon-linkedin"></i>
								</a>
							
							</div>
							<!-- /social icons -->

							</div>


						</div>
					</div>
			</section>
			<!-- /Member -->
    </div>
</template>

<script>
export default {
    data(){
        return{
			percentage_web: 0,
			percentage_Modelado: 0,
			percentage_Programacion: 0,
			percentage_Video: 0,
			percentage_Anim: 0
        }
    },
    created(){
        var intval=setInterval(()=>{
						if (this.percentage_web <= 68) this.percentage_web+=1;
						if (this.percentage_Modelado < 99) this.percentage_Modelado+=1;
						if (this.percentage_Programacion < 65) this.percentage_Programacion+=1;
						if (this.percentage_Video < 80) this.percentage_Video+=1;
						if (this.percentage_Anim < 80) this.percentage_Anim+=1;
					})
    }
}
</script>


