<template>
   <body>
	<!-- header -->
	<Header> </Header>
      
	<!-- /header -->

	<!-- topics -->
	<section class="section">
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-12 text-center">
					<h2 class="section-title">Find your answer by subject</h2>
				</div>
				<!-- topic-item -->
			
			    <JopBox></JopBox>
			    <JopBox></JopBox>
			    <JopBox></JopBox>
			    <JopBox></JopBox>
			    <JopBox></JopBox>
			    <JopBox></JopBox>
			    <JopBox></JopBox>
			    <JopBox></JopBox>


              
			
			</div>
		</div>
	</section>
	<!-- /topics -->

	<!-- call to action -->
	<ContactBox></ContactBox>

	<!-- /call to action -->

	<!-- footer -->
	<Footer></Footer>

	<!-- /footer -->

</body>
</template>


<script setup>

import Header from '../../components/website/Header.vue'
import Footer from '../../components/website/Footer.vue'
import ContactBox from '../../components/website/ContactBox.vue'
import JopBox from '../../components/website/JopBox.vue'
import '../../assets/website/plugins/bootstrap/bootstrap.min.css'
import '../../assets/website/plugins/themify-icons/themify-icons.css'
import '../../assets/website/images/favicon.png'
import '../../assets/website/assets/style.css'
import '../../assets/website/plugins/jquery/jquery-1.12.4.js'
import '../../assets/website/plugins/match-height/jquery.matchHeight-min.js'
import '../../assets/website/assets/script.js'


</script>