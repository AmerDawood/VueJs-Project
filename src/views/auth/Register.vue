<template>
    <body>
  <div class="login-root">
    <div class="box-root flex-flex flex-direction--column" style="min-height: 100vh;flex-grow: 1;">
      
        <Animation/>

      <div class="box-root padding-top--24 flex-flex flex-direction--column" style="flex-grow: 1; z-index: 9;">
        <div class="box-root padding-top--48 padding-bottom--24 flex-flex flex-justifyContent--center">
          <h1><a href="http://blog.stackfindover.com/" rel="dofollow">Stackfindover</a></h1>
        </div>
        <div class="formbg-outer">
          <div class="formbg">
            <div class="formbg-inner padding-horizontal--48">
              <span class="padding-bottom--15">Sign in to your account</span>
              <form id="stripe-register" @submit.prevent="register">
                <div class="field padding-bottom--24">
                    <label for="name">Name</label>
                    <input type="text"  v-model="name" name="name">
                  </div>
                <div class="field padding-bottom--24">
                  <label for="email">Email</label>
                  <input type="email"  v-model="email" name="email">
                </div>
                <div class="field padding-bottom--24">
                    <label for="username">User Name</label>
                    <input type="text" v-model="username" name="username">
                  </div>
                <div class="field padding-bottom--24">
                    <label for="password">Password</label>
                    <input type="password" v-model="password" name="password">
                  </div>
               
                <div class="field field-checkbox padding-bottom--24 flex-flex align-center">
                  <label for="checkbox">
                    <input type="checkbox" name="checkbox"> Stay signed in for a week
                  </label>
                </div>
                    
                      <div class="">
                  <button type="submit">Register</button>
                </div>
                    <br>
                <div class="field">
                  <a class="ssolink" href="#">Use single sign-on (Google) instead</a>
                </div>
              </form>
            </div>
          </div>
         <Footer> </Footer>
        </div>
      </div>
    </div>
  </div>
</body>
</template>


<script setup>
import Animation from '../../components/auth/Animation.vue';
import Footer from '../../components/auth/Footer.vue';
import '../../assets/auth/style.css'
</script>




<script>
import axios from 'axios';

export default {
  data() {
    return {
      name: '',
      email: '',
      username: '',
      password: ''
    };
  },
  methods: {
    register() {
      axios.post('http://localhost:9000/auth/register', {
        name: this.name,
        email: this.email,
        username: this.username,
        password: this.password
      })
      .then(response => {
        console.log('Registration successful', response.data);
        // Do something with the response, e.g., store the token, redirect, etc.
        this.$router.push('/login');
      })
      .catch(error => {
        console.error('Registration failed', error.response.data);
        // Display an error message or take appropriate action
      });
    }
  }
};
</script>