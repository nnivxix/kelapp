<template>
  <footer
    class="text-xl relative w-full mt-12 px-3 py-10 md:p-20 bg-gray-500 flex justify-center">
    <p class="text-gray-200 text-center">
      Made with 💚 by
      <a target="_blank" class="underline" href="https://twitter.com/nnivxix"
        >Hanasa</a
      >
      in 🇮🇩 &#169; 2023 - v.2
    </p>
  </footer>
</template>

<script setup lang="ts">
import useGroupStore from "@/stores/group";
import { storeToRefs } from "pinia";

const { amount, participants, groups } = storeToRefs(useGroupStore());
</script>
