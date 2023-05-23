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
          
            <div style="display: flex; gap: 10px;">
  <button style="background-color: blue; color: black; height: 40px; width: 150px; border-radius: 5px; border: none; margin-bottom: 20px;margin-right: 450px;">
    <RouterLink :to="'/add-task/' + projects._id" class="collapse-item" style="color:white">
      Add Task
    </RouterLink>
  </button>
  <button style="background-color: green; color: white; height: 40px; width: 150px; border-radius: 5px; border: none;" @click="generatePDF">
    Download PDF
  </button>
</div>

        
            <h2 class="mb-5">Job #{{ projects._id }}</h2>
            <div class="content">
              <h1 id="heading-1"> {{ projects.name }} </h1>
              <h2 id="heading-2">{{ projects.details }}</h2>


              <h2 id="heading-2">Sum All Tasks : {{ projects.doneTasksWorkHourSum }}</h2>
              <h2 id="heading-2">Price : {{ projects.doneTasksWorkHourSum }} * User Price</h2>


    
            

              <div v-for="task in projects.tasks" :key="task._id" class="task-item">
                <div class="title">
                  <p>{{ task.title }}</p>
                </div>
                <!-- <div class="icons">
                  <p @click="deleteTask(task._id)">Delete</p>

                  <p @click="goToScreen(task._id)"> Show</p>
                </div> -->
                <div class="icons">
                <button style="background-color: red; color: white; height: 30px; width: 80px; border-radius: 5px; border: none; margin-right: 10px;" @click="deleteTask(task._id)">
                  Delete
                </button>

                <button style="background-color: green; color: white; height: 30px; width: 80px; border-radius: 5px; border: none;" @click="goToScreen(task._id)">
                  Show
                </button>
</div>

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


import jsPDF from 'jspdf';


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
// Delete a project
async function deleteTask(taskId) {
  try {
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
    // Make a DELETE request to the server with the project ID and token in the request headers
    await axios.delete(`http://localhost:9000/tasks/${taskId}`,{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    // Remove the deleted project from the projects list
    projects.value = projects.value.filter(project => project._id !== projectId);
  } catch (error) {
    // Handle the error, e.g., display an error message or log the error
  }
}
// Generate PDF
function generatePDF() {
  const doc = new jsPDF();

  const { _id, name, details , doneTasksWorkHourSum , doneTasksCount} = projects.value;

  const content = `
    Project ID: ${_id}
    Project Name: ${name}
    Project Details: ${details}
    Number Of Done Tasks : ${doneTasksCount}
    Done Tasks Work Hour Sum : ${doneTasksWorkHourSum}

  `;

  doc.text(content, 10, 10);

  doc.save('project_details.pdf');
}





// Fetch projects when the component is mounted
onMounted(() => {
  fetchProjects();
});

</script>


<script>

export default {
  methods: {
    goToScreen(taskId) {
      // Perform any necessary actions before navigating
      // For example, you can pass the taskId as a parameter in the URL
      this.$router.push('/single-task/' + taskId);
    },

 

    
  },
};
</script>

<style>
.task-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
}

.icons {
  display: flex;
}

.icons i {
  margin-right: 10px;
}
</style>