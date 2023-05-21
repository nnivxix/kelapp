import { ref } from "vue";
import { defineStore } from "pinia";

export const useGroupStore = defineStore("group", () => {
  const amount = ref("1");
  const participants = ref("");
  const groups = ref<any[]>([]);

  return {
    amount,
    participants,
    groups,
  };
});
