<template>
    <body>
  <!-- header -->
    <Header> </Header>
  
  <!-- /header -->

  <section class="single section-sm pb-0">
    <div class="container">
      <div class="row">
        <div class="col-lg-3">
         


       <JobStatus></JobStatus>

        </div>
     
        <div class="col-lg-9">
          <div class="p-lg-5 p-4 bg-white">
          
            <button>
              <RouterLink :to="'/add-task/' + projects._id" class="collapse-item">
                Add Task
            </RouterLink>
            </button>


          
            <h2 class="mb-5">Job #{{ projects._id }}</h2>
            <div class="content">
              <h1 id="heading-1"> {{ projects.name }} </h1>
              <h2 id="heading-2">{{ projects.details }}</h2>
    
            
              <div v-for="task in projects.tasks" :key="task._id" class="notices info">
                      <p>{{ task.title }}</p>
                    </div>
           
          
            </div>
         
          </div>
        </div>







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
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';
import Header from '../../components/website/Header2.vue';
import Footer from '../../components/website/Footer.vue';
import JobStatus from '../../components/website/JobStatus.vue';
import JobContent from '../../components/website/JobContent.vue';
import '../../assets/website/plugins/bootstrap/bootstrap.min.css';
import '../../assets/website/plugins/themify-icons/themify-icons.css';
import '../../assets/website/images/favicon.png';
import '../../assets/website/assets/style.css';
import '../../assets/website/plugins/jquery/jquery-1.12.4.js';
import '../../assets/website/plugins/match-height/jquery.matchHeight-min.js';
import '../../assets/website/assets/script.js';
const projects = ref([]);

// Fetch projects data from the server
async function fetchProjects() {
  try {
    // const token = localStorage.getItem('token');
    
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

// Usage
const token = getTokenFromCookie();
console.log(token);
        const headers = {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token,
        };
    console.log(headers);


    console.log('test test');
      console.log('test test');
      console.log('test test');
      console.log('test test');

      const route = useRoute();
      const projectId = route.params.id;
      console.log(projectId);

     // // Get the projectId from the route par

    // Get the projects using the token in the request headers
    const response = await axios.get(`http://localhost:9000/projects/${projectId}`, {
      headers: {
        Authorization: `Bearer `+token,
      },
    });


    console.log(response.data);

    projects.value = response.data;
  } catch (error) {
    // console.error(error);
  }
}



// Fetch projects when the component is mounted
onMounted(() => {
  fetchProjects();
});
</script>
