<template>
     <div class="sidebar">
            <ul class="list-styled">
              <li class="sidelist">
                <a>Job Status</a>
                <ul>
                  <li class="sidelist active">
                    <RouterLink to="/single-page">To Do</RouterLink>
                  </li>
                  <li class="sidelist">
                    <RouterLink to="/single-page">In Progress</RouterLink>
                  </li>
                  <li class="sidelist">
                    <RouterLink to="/single-page">QA</RouterLink>
                  </li>
                  <li class="sidelist">
                    <RouterLink to="/single-page">Done</RouterLink>
                  </li>
                 
                </ul>
              </li>
            </ul>
          </div>
</template>


<script setup>
    import { RouterLink, RouterView } from "vue-router";

</script>