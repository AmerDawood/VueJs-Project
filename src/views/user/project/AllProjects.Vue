<template>
    <body id="page-top">
      <div id="wrapper">
        <Sidebar />
  
        <div id="content-wrapper" class="d-flex flex-column">
          <div id="content">
            <Header />
  
            <div class="container-fluid">
              <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
                <a href="#" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
                  ><i class="fas fa-download fa-sm text-white-50"></i> Generate Report</a
                >
              </div>
  
              <div class="container-fluid">
                <h1 class="h3 mb-2 text-gray-800">Tables</h1>
                <p class="mb-4">
                  DataTables is a third-party plugin that is used to generate the demo table below. For more information
                  about DataTables, please visit the
                  <a target="_blank" href="https://datatables.net">official DataTables documentation</a>.
                </p>
  
                <div class="card shadow mb-4">
                  <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
                  </div>
                  <div class="card-body">
                    <div class="table-responsive">
                      <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                        <thead>
                          <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Hour Price</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Update</th>
                            <th>Delete</th>
                          </tr>
                        </thead>
  
                        <tbody>
                          <!-- Loop over projects and generate rows dynamically -->
                          <tr v-for="project in projects" :key="project.id">
                            <td>{{ project.name }}</td>
                            <td>{{ project.description }}</td>
                            <td>{{ project.hourPrice }}</td>
                            <td>{{ project.price }}</td>
                            <td>{{ project.status }}</td>
                            <td v-if="project.isFound">
                              <RouterLink :to="'/update-projects/' + project.id" class="collapse-item">Update</RouterLink>
                            </td>
                            <td v-if="project.isFound"><a href="">Delete</a></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </body>
  </template>


  <script setup>
  import { ref, onMounted } from 'vue';
  import Sidebar from '../../../components/dashboard/Sidebar.vue';
  import Header from '../../../components/dashboard/Header.vue';
  import Footer from '../../../components/dashboard/Footer.vue';
import axios from 'axios';

const projects = ref([]);

// Fetch projects data from the server
async function fetchProjects() {
  try {
    const token = localStorage.getItem('token');
    console.log(token);

    // Get the projects using the token in the request headers
    const response = await axios.get('http://localhost:9000/projects/all', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    projects.value = response.data.map(project => ({ ...project, isFound: true }));
  } catch (error) {
    // console.error(error);
  }
}

// Fetch projects when the component is mounted
onMounted(() => {
  fetchProjects();
});
  
  import '../../../assets/dashboard/vendor/fontawesome-free/css/all.min.css';
  import '../../../assets/dashboard/css/sb-admin-2.min.css';
  import '../../../assets/dashboard/vendor/jquery/jquery.min.js';
  import '../../../assets/dashboard/vendor/bootstrap/js/bootstrap.bundle.min.js';
  import '../../../assets/dashboard/vendor/jquery-easing/jquery.easing.min.js';
  import '../../../assets/dashboard/js/sb-admin-2.min.js';
  </script>
  