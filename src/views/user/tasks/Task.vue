<template>
    <body>
  <!-- header -->
    <Header> </Header>
  
  <!-- /header -->

  <section class="single section-sm pb-0">
    <div class="container">
      <div class="row">
        <div class="col-lg-3">
         


       <!-- <JobStatus></JobStatus> -->

        </div>
     
        <div class="col-lg-9">
          <div class="p-lg-5 p-4 bg-white">
          
            <button>
              <RouterLink :to="'/update-task/' + tasks._id" class="collapse-item">
                Updat Task Status
            </RouterLink>
            </button>


      

           


          
            <h2 class="mb-5">Job #{{ tasks._id }}</h2>
            <div class="content">
              <h1 id="heading-1"> {{ tasks.title }} </h1>
              <h2 id="heading-2">{{ tasks.description }}</h2>
              <h5 id="heading-2"> Task Status : {{ tasks.status }}</h5>

    
            
              <!-- <div>
                  <div v-for="task in tasks.tasks" :key="task._id" class="notices info" @click="goToScreen(tasks._id)">
                    <p>{{ task.title }}</p>
                  </div>
              </div> -->
           
          
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
import Header from '../../../components/website/Header2.vue';
import Footer from '../../../components/website/Footer.vue';
import JobStatus from '../../../components/website/JobStatus.vue';
import JobContent from '../../../components/website/JobContent.vue';
import '../../../assets/website/plugins/bootstrap/bootstrap.min.css';
import '../../../assets/website/plugins/themify-icons/themify-icons.css';
import '../../../assets/website/images/favicon.png';
import '../../../assets/website/assets/style.css';
import '../../../assets/website/plugins/jquery/jquery-1.12.4.js';
import '../../../assets/website/plugins/match-height/jquery.matchHeight-min.js';
import '../../../assets/website/assets/script.js';
const tasks = ref([]);




// Fetch projects data from the server
async function fetchTask() {
  try {
    // const token = localStorage.getItem('token');
    
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
console.log(token);
        const headers = {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token,
        };
    console.log(headers);




      const route = useRoute();
      const taskId = route.params.id;
      console.log(taskId);
      console.log(taskId);
      console.log(taskId);
      console.log(taskId);
      console.log(taskId);
      console.log(taskId);


     // // Get the projectId from the route par

    // Get the projects using the token in the request headers
    const response = await axios.get(`http://localhost:9000/tasks/${taskId}`, {
      headers: {
        Authorization: `Bearer `+token,
      },
    });


    console.log(response.data);

    tasks.value = response.data;
  } catch (error) {
    // console.error(error);
  }
}





// Fetch projects when the component is mounted
onMounted(() => {
    fetchTask();
});
</script>

