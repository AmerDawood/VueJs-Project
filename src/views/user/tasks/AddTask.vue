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
                <form @submit.prevent="create">
                    <div class="mb-3">
                      <label for="projectName" class="form-label">Title</label>
                      <input type="text" class="form-control" id="projectName" v-model="title" aria-describedby="emailHelp" required>
                    </div>
                    <div class="mb-3">
                      <label for="projectDescription" class="form-label">Description</label>
                      <textarea class="form-control" id="projectDescription" v-model="description" required></textarea>
                    </div>

                    <div class="mb-3">
                      <label for="projectTime" class="form-label">Priority</label>
                      <input type="text" class="form-control" id="projectTime" v-model="priority" required>
                    </div>

                    <div class="mb-3">
                      <label for="projectTime" class="form-label">Work Hour</label>
                      <input type="text" class="form-control" id="projectTime" v-model="hour" required>
                    </div>

                    <div class="mb-3">
                      <label for="projectTime" class="form-label">Status</label>
                      <input type="text" class="form-control" id="projectTime" v-model="status" required>
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

function getTokenFromCookie() {
  const cookies = document.cookie.split(';');
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    if (cookie.startsWith('token=')) {
      return cookie.substring('token='.length, cookie.length);
    }
  }
  return null;
}

export default {
  data() {
    const route = useRoute();
    const projectId = route.params.id;

    return {
      projectId,
      title: '',
      description: '',
      priority: '',
      hour: '',
      status: '',
    };
  },
  methods: {
    create() {
      const token = getTokenFromCookie();
      const headers = {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      };

      axios
        .post(`http://localhost:9000/tasks/${this.projectId}`, {
          title: this.title,
          description: this.description,
          priority: this.priority,
          hour: this.hour,
          status: this.status,
        }, { headers })
        .then(response => {
          console.log('Task created successfully', response.data);
          // Handle success, e.g., show a success message or redirect
          this.$router.replace(`/single-page/${this.projectId}`);


        })
        .catch(error => {
          console.error('Error creating task', error.response.data);
          // Handle error, e.g., display an error message
        });
    },
  },
};
</script>
