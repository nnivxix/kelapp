<template>
  <div class="m-6 flex flex-col md:w-1/2 md:mx-auto">
    <form @submit.prevent="createGroup()">
      <div class="flex flex-col">
        <label class="text-lg md:text-2xl pb-2" for="participant"
          >Masukan Nama Peserta</label
        >
        <textarea
          class="border-2 border-green-400 text-md md:p-3 p-2 ring-1 focus:accent-green-400 h-40"
          v-model="participants"
          placeholder="Masukan Nama Seluruh Peserta"
          required
          id="participant">
        </textarea>
        <span class="text-sm text-gray-600"
          >Masukan nama seluruh peserta kemudian pisahkan dengan koma (,) misal:
          "Koko Kurniawan, Robertos Carlos"</span
        >
      </div>
      <div class="flex flex-col mt-4 mb-5">
        <label for="kelompok">Jumlah Kelompok</label>
        <input
          class="border-2 border-green-400 p-2 ring-1 ring-green-400 focus:accent-green-400"
          type="Number"
          id="kelompok"
          v-model="amount" />
        <!-- <c-image :display="['none','block']"  :src=img alt="kerjasama"/> -->
      </div>
      <button class="bg-green-500 text-white p-2 font-semibold w-full">
        Buat Kelompok
      </button>
    </form>
    <div>
      <button
        v-if="groups.length"
        class="bg-gray-400 text-white p-1 mt-3 w-full"
        @click="resetGroup">
        Reset
      </button>
      <button
        v-else
        class="text-gray-800 p-1 mt-3 border-2 border-green-500 w-full"
        @click="generate">
        Generate Example
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import useGroup from "@/composables/group";
import useGenerate from "@/composables/generate";
import useGroupStore from "@/stores/group";

const { amount, participants, groups } = storeToRefs(useGroupStore());
const { createGroup } = useGroup();
const { generate } = useGenerate();

function resetGroup() {
  groups.value = [];
  participants.value = "";
  amount.value = "2";
}
</script>
