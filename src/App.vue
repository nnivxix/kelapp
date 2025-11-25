<template>
  <div class="min-h-screen">
    <Navbar />
    <div
      class="flex flex-col md:flex-row mx-6 md:w-3/4 min-h-[70vh] md:mx-auto"
    >
      <Form />
      <Result />
    </div>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Form from "@/components/Form.vue";
import Result from "./components/Result.vue";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
</script>
