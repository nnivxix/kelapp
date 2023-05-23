<template>
  <Navbar />
  <div class="flex flex-col md:flex-row mx-6 md:w-3/4 md:mx-auto">
    <Form />
    <Result />
  </div>
  <Footer />
</template>

<script setup lang="ts">
import Form from "@/components/Form.vue";
import Result from "./components/Result.vue";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
</script>
