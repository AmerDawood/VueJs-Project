<template>
   
<body>
  <div class="login-root">
    <div class="box-root flex-flex flex-direction--column" style="min-height: 100vh;flex-grow: 1;">
  


     <Animation />


      <div class="box-root padding-top--24 flex-flex flex-direction--column" style="flex-grow: 1; z-index: 9;">
        <div class="box-root padding-top--48 padding-bottom--24 flex-flex flex-justifyContent--center">
          <h1><a href="http://blog.stackfindover.com/" rel="dofollow">Stackfindover</a></h1>
        </div>
        <div class="formbg-outer">
          <div class="formbg">
            <div class="formbg-inner padding-horizontal--48">
              <span class="padding-bottom--15">Sign in to your account</span>
              <form id="stripe-login" @submit.prevent="login">
                <div class="field padding-bottom--24">
                  <label for="username">User Name</label>
                  <input type="text"   v-model="username" name="username" required>
                </div>
                <div class="field padding-bottom--24">
                  <div class="grid--50-50">
                    <label for="password">Password</label>
                    <div class="reset-pass">
                      <a href="#">Forgot your password?</a>
                    </div>
                  </div>
                  <input type="password" v-model="password" name="password" required>
                </div>
                <div class="field field-checkbox padding-bottom--24 flex-flex align-center">
                  <label for="checkbox">
                    <input type="checkbox" name="checkbox"> Stay signed in for a week
                  </label>
                </div>
                <!-- <RouterLink to="/" class="field padding-bottom--24">

                  <div class="">
                  <input type="submit" name="submit" value="Continue">
                </div>
                </RouterLink> -->
                <div class="">
                  <button type="submit">Login</button>
                </div>
                <br>

              
                <div class="field">
                  <a class="ssolink" href="#">Use single sign-on (Google) instead</a>
                </div>
              </form>
            </div>
          </div>
          


         <Footer></Footer>



        </div>
      </div>
    </div>
  </div>
</body>
</template>

<script setup>

import Animation from '../../components/auth/Animation.vue';
import Footer from '../../components/auth/Footer.vue';
import '../../assets/auth/style.css';

</script>


<script>
import { useRouter } from 'vue-router';
import axios from 'axios';


export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    login() {
      axios.post('http://localhost:9000/auth/login', {
        username: this.username,
        password: this.password,
      })
      .then(response => {
        console.log('Login successful', response.data);

        
              const expirationDate = new Date();
expirationDate.setDate(expirationDate.getDate() + 7); // Set the expiration to 7 days from now

document.cookie = `${response.data.token}`;

        

        // Store the token
        // Redirect to the user dashboard
        this.$router.push('/user-dashboard');
      })
      .catch(error => {
        console.error('Login failed', error.response.data);
        // Display an error message or take appropriate action
      });
    },
  },
};
</script>

