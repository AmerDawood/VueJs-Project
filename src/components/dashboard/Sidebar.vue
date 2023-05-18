<template>
 <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
<RouterLink to="/" class="sidebar-brand d-flex align-items-center justify-content-center">

    <a>
        <div class="sidebar-brand-icon rotate-n-10">
        <i class="fas fa-laugh-wink"></i>
        
    </div>
    <div class="sidebar-brand-text mx-3">Dashboard</div>

    </a>
</RouterLink>

<!-- Divider -->
<hr class="sidebar-divider my-0">

<!-- Nav Item - Dashboard -->
<li class="nav-item active">
     <RouterLink to="/" class="nav-link">

            <a>
        <i class="fas fa-fw fa-tachometer-alt"></i>
        <span>Website</span></a>
    </RouterLink> 

</li>

<!-- Divider -->



<!-- Divider -->
<hr class="sidebar-divider">

<!-- Heading -->
<div class="sidebar-heading">
    Addons
</div>
<li class="nav-item">
                <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo"
                    aria-expanded="true" aria-controls="collapseTwo">
                    <i class="fas fa-fw fa-cog"></i>
                    <span>Dashboard</span>
                </a>
                <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                    <div class="bg-white py-2 collapse-inner rounded">
                        <RouterLink to="/user-dashboard" class="collapse-item">
                            <a>Home</a>
                        </RouterLink>
                      
                    </div>
                </div>
            </li>



<li class="nav-item">
                <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities"
                    aria-expanded="true" aria-controls="collapseUtilities">
                    <i class="fas fa-fw fa-wrench"></i>
                    <span>Projects</span>
                </a>
                <div id="collapseUtilities" class="collapse" aria-labelledby="headingUtilities"
                    data-parent="#accordionSidebar">
                    <div class="bg-white py-2 collapse-inner rounded">
                        <h6 class="collapse-header">Projects</h6>
                        <RouterLink to="/all-projects" class="collapse-item">

                            <a>All Projects</a>
</RouterLink> 
                   
                       <RouterLink to="/add-projects" class="collapse-item">
                        <a >Add Projects</a>
                       </RouterLink>

                    </div>
                </div>
            </li>



</ul>
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";

</script>