<template>
    		<!--HEADER-->
            <div id="header" class="sticky clearfix">
				<!-- TOP NAV -->
				<header id="topNav">
					<div class="container">

						<!-- Mobile Menu Button -->
						<button class="btn btn-mobile" data-toggle="collapse" data-target=".nav-main-collapse">
							<i class="fa fa-bars"></i>
						</button>

						<!-- Logo -->
						<a class="logo pull-left" href="/">
							<img src="Assets/images/Sources/logo.png" alt="" />
						</a>

						<div class="navbar-collapse pull-right nav-main-collapse collapse">
							<nav class="nav-main">
								<ul id="topMain" class="nav nav-pills nav-main">
									<!-- HOME -->
									<li id="auxhome" class="active">
										<a class="Home" href="/">
											<span class="theme-color">INICIO</span>
										</a>
									</li>
							
									<!-- ABOUT US -->
									<router-link tag="li" to="/AboutUs" active-class="active" exact><a class="About"><span class="theme-color">CONÓZCANOS</span></a></router-link>
												
									<!-- CONTACT US -->
									<router-link tag="li" to="/ContactUs" active-class="active" exact><a class="Contact"><span class="theme-color">CONTÁCTENOS</span></a></router-link>
								</ul>

							</nav>
						</div>

					</div>
				</header>
				<!-- /Top Nav -->
			</div>
 			<!--/HEADER-->		 
</template>

