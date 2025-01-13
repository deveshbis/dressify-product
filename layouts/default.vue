<template>
  <main>
    <Navbar />
    <div class="min-h-screen">
      <slot />
    </div>
    <Footer />
  </main>
</template>

<script>
import Navbar from '~/components/Navbar.vue';
import Footer from '~/components/Footer.vue';
</script>

<style scoped></style>
