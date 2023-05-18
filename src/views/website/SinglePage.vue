<template>
    <body>
  <!-- header -->
    <Header> </Header>
  
  <!-- /header -->

  <!-- details page -->
  <section class="single section-sm pb-0">
    <div class="container">
      <div class="row">
        <div class="col-lg-3">
         



       <JobStatus></JobStatus>



        </div>
        


       <JobContent></JobContent>







      </div>
    </div>
  </section>
  <!-- /details page -->

  <!-- footer -->
<Footer> </Footer>
  <!-- /footer -->


</body>
</template>

<script setup>
import Header from '../../components/website/Header2.vue'
import Footer from '../../components/website/Footer.vue'
import JobStatus from '../../components/website/JobStatus.vue'
import JobContent from '../../components/website/JobContent.vue'
import '../../assets/website/plugins/bootstrap/bootstrap.min.css'
import '../../assets/website/plugins/themify-icons/themify-icons.css'
import '../../assets/website/images/favicon.png'
import '../../assets/website/assets/style.css'
import '../../assets/website/plugins/jquery/jquery-1.12.4.js'
import '../../assets/website/plugins/match-height/jquery.matchHeight-min.js'
import '../../assets/website/assets/script.js'


</script>