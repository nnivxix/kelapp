<template>
  <div class="mt-6 mb-32 md:mb-20 mx-6 md:ml-6 md:mx-auto md:w-1/2">
    <h1 class="text-center text-lg md:text-2xl mb-4">Kelompok Belajar</h1>
    <div>
      <div
        class="grid md:grid-cols-3 lg:grid-cols-4 grid-cols-1"
        v-if="groups.length">
        <ul class="p-3" v-for="(group, index) in groups" :key="index">
          <li class="font-semibold text-2xl md:text-lg">
            Kelompok {{ index + 1 }}
          </li>
          <li
            v-for="(participant, index) in group"
            :key="index"
            class="text-xl">
            {{ participant }}
          </li>
        </ul>
      </div>
      <div v-else class="text-center text-gray-500">
        <p>Belum ada grup yang dibuat</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import useGroupStore from "@/stores/group";

const { groups } = storeToRefs(useGroupStore());
</script>

<style scoped></style>
