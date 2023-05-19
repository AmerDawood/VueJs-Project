import { createRouter, createWebHistory } from "vue-router";
import WebsiteView from "../views/website/Home.vue";
import LoginView from "../views/auth/Login.vue";
import RegisterView from "../views/auth/Register.vue";
import DashboardUser from "../views/user/Dashboard.vue";
import SinglePageVue from "../views/website/SinglePage.vue";
import FaqView from "../views/website/Faq.vue";
import ContactView from "../views/website/Contact.vue";

import AllProjects from "../views/user/project/AllProjects.vue"
import AddProjects from "../views/user/project/AddProjects.vue"
import UpdateProjects from "../views/user/project/UpdateProject.vue"
import AddTask from "../views/user/tasks/AddTask.vue"



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Website",
      component: WebsiteView,
    },

    {
      path: "/login",
      name: "Login",
      component: LoginView,
    },
    {
      path: "/register",
      name: "Register",
      component: RegisterView,
    },
    {
      path: "/user-dashboard",
      name: "Dashboard",
      component: DashboardUser,
    },

    {
      path: "/single-page/:id",
      name: "Single Page",
      component: SinglePageVue,
    },

    {
      path: "/faq",
      name: "Faq",
      component: FaqView,
    },

    {
      path: "/contact",
      name: "Contact",
      component: ContactView,
    },

    {
      path: "/all-projects",
      name: "AllProjects",
      component: AllProjects,
    },

    {
      path: "/add-projects",
      name: "AddProjects",
      component: AddProjects,
    },


    {
      path: "/update-projects/:id",
      name: "UpdateProjects",
      component: UpdateProjects,
    },


    {
      path: "/add-task/:id",
      name: "AddTask",
      component: AddTask,
    },
  ],

 
});

export default router;
