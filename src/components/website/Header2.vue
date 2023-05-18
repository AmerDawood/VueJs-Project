<template>
<header class="shadow-bottom sticky-top bg-white">
    <nav class="navbar navbar-expand-md navbar-light">
      <div class="container">
        <RouterLink to="/" class="navbar-brand px-2">Freelancing</RouterLink>

        <button class="navbar-toggler border-0" type="button" data-toggle="collapse" data-target="#navigation"
          aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse text-center" id="navigation">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <RouterLink to="/" class="nav-link text-dark">Home</RouterLink>

            </li>
            <li class="nav-item">
              <RouterLink to="/faq" class="nav-link text-dark">Faq</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/contact" class="nav-link text-dark">Contact</RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>
<script setup>
</script>