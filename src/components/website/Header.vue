<template>

<header class="banner overlay bg-cover" data-background="images/banner.jpg">
		<nav class="navbar navbar-expand-md navbar-dark">
			<div class="container">
				<RouterLink
          to="/"
          class="navbar-brand px-2"
          >Freelancing</RouterLink>
				
				<button class="navbar-toggler border-0" type="button" data-toggle="collapse" data-target="#navigation"
					aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>

				<div class="collapse navbar-collapse text-center" id="navigation">
					<ul class="navbar-nav ml-auto">
						<li class="nav-item">
							<RouterLink to="/" class="nav-link text-dark">Home</RouterLink>
						</li>
						<li class="nav-item">
							<RouterLink to="/faq" class="nav-link text-dark">Faq</RouterLink>
						</li>
						<li class="nav-item">
							<RouterLink to="/contact" class="nav-link text-dark">Contact</RouterLink>
						</li>
					</ul>
				</div>
			</div>
		</nav>
		<!-- banner -->
		<div class="container section">
			<div class="row">
				<div class="col-lg-8 text-center mx-auto">
					<h1 class="text-white mb-3">Support Center &amp; Knowledge base</h1>
					<p class="text-white mb-4">Find advice and answers from our support team fast or get in touch</p>
					<div class="position-relative">
						<input id="search" class="form-control" placeholder="Have a question? Just ask here or enter terms"><i
							class="ti-search search-icon"></i>
					</div>
				</div>
			</div>
		</div>
		<!-- /banner -->
	</header>
</template>
<script setup>
import { RouterLink, RouterView } from "vue-router";

</script>