<template>
  <div class="flex flex-col md:flex-row mx-6">
    <Form />
    <Result></Result>
  </div>
</template>

<script setup lang="ts">
import Form from "@/components/Form.vue";
import Result from "./components/Result.vue";
</script>
