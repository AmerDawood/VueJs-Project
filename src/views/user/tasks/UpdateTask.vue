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
                <form @submit.prevent="update">

                    <div class="mb-3">
                    <label for="status" class="form-label">Status</label>
                    <input type="text" class="form-control" id="status" v-model="status" required>
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

<script>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';

const token = localStorage.getItem('token');
if (token) {
  // Token exists in localStorage
  console.log('Token:', token);
  // Perform further actions with the token
} else {
  // Token doesn't exist in localStorage
  console.log('Token not found');
  // Handle the case where the token is not available
}

export default {
  data() {
    const route = useRoute();
    const taskId = route.params.id;

    return {
      taskId,
      status: '',
    };
  },
  methods: {
    update() {
      const headers = {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      };

      axios
        .patch(`http://localhost:9000/tasks/${this.taskId}`, {
          status: this.status,
        }, { headers })
        .then(response => {
          console.log('Task updated successfully', response.data);
          // Handle success, e.g., show a success message or redirect
          this.$router.replace(`/single-task/${this.taskId}`);
        })
        .catch(error => {
          console.error('Error updating task', error.response.data);
          // Handle error, e.g., display an error message
        });
    },
  },
};
</script>
