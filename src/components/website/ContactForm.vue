<template>
  <section class="section">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h2 class="section-title text-primary">Got Any Questions</h2>
          <p>Submit the form and confirm your email address at <a href="https://formspree.io/">Formspree</a>.</p>

          <form action="#">
            <input type="text" id="name" name="name" placeholder="Name" class="form-control mb-4 shadow rounded-0">
            <input type="email" id="mail" name="mail" placeholder="Email" class="form-control mb-4 shadow rounded-0">
            <input type="text" id="subject" name="subject" placeholder="subject"
              class="form-control mb-4 shadow rounded-0">
            <textarea name="message" id="message" placeholder="Message"
              class="form-control mb-4 shadow rounded-0"></textarea>
            <button type="submit" value="send" class="btn btn-primary">Send</button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
</script>