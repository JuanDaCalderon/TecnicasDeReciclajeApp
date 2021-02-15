<template>
    		<!-- VIDEOGAME -->
			<section class="alternate Videogame">
				<div class="container">
					
					<div class="row">
    					<div class="webgl-content">
      						<div id="unityContainer" style="width: 100%; height: auto; margin: auto"></div>
      						<div class="footer">
        
        						<div class="fullscreen" onclick="unityInstance.SetFullscreen(1)"></div>
        
      						</div>
    					</div>

					<!--	<div id="gameContainer" style="width: 100%; height: auto; margin: auto"></div>-->
					</div>

				</div>
			</section>
			<!-- /VIDEOGAME -->
</template>

<style>
div.webgl-content{
	position: relative;
    top: 0px !important;
    left: 0px !important;
    transform: none !important;

}
</style>