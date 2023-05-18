<template>

    <body id="page-top">

<!-- Page Wrapper -->
<div id="wrapper">

    <!-- Sidebar -->
      
    <Sidebar/>

    <!-- End of Sidebar -->

    <!-- Content Wrapper -->
    <div id="content-wrapper" class="d-flex flex-column">

        <!-- Main Content -->
        <div id="content">

            <!-- Topbar -->
            
             <Header> </Header>

            <!-- End of Topbar -->

            <!-- Begin Page Content -->
            <div class="container-fluid">

                <!-- Page Heading -->
                <div class="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
                    <a href="#" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                            class="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
                </div>

   


                <!-- Content Row -->
                <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Project Name</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Description</label>
    <input type="text" class="form-control" id="exampleInputPassword1">
  </div>

  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Price</label>
    <input type="text" class="form-control" id="exampleInputPassword1">
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Status</label>
    <input type="text" class="form-control" id="exampleInputPassword1">
  </div>

  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Time</label>
    <input type="text" class="form-control" id="exampleInputPassword1">
  </div>
  <div class="mb-3">
  <label for="formFile" class="form-label">Add Image To Project </label>
  <input class="form-control" type="file" id="formFile">
</div>
  <button type="submit" class="btn btn-primary">Create</button>
</form>
                

            </div>
            <!-- /.container-fluid --> 
        </div>
        <!-- End of Main Content -->

        <!-- Footer -->
        <Footer> </Footer>

        <!-- End of Footer -->

    </div>
    <!-- End of Content Wrapper -->

</div>




</body>
</template>


<script setup>

import Sidebar from '../../../components/dashboard/Sidebar.vue';
import Header from '../../../components/dashboard/Header.vue';
import Footer from '../../../components/dashboard/Footer.vue';


import '../../../assets/dashboard/vendor/fontawesome-free/css/all.min.css'
import '../../../assets/dashboard/css/sb-admin-2.min.css'
import '../../../assets/dashboard/vendor/jquery/jquery.min.js'
import '../../../assets/dashboard/vendor/bootstrap/js/bootstrap.bundle.min.js'
import '../../../assets/dashboard/vendor/jquery-easing/jquery.easing.min.js'
import '../../../assets/dashboard/js/sb-admin-2.min.js'

</script>
