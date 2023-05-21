<template>
  <h1>Hai Vue 3</h1>
  <p>{{ count }}</p>
  <button @click="count++">add counter</button>
</template>

<script setup lang="ts">
import { ref } from "vue";

const count = ref<number>(0);
</script>
