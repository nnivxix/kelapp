import { ref } from "vue";
import { defineStore } from "pinia";

const useGroupStore = defineStore(
  "group",
  () => {
    const amount = ref("2");
    const participants = ref("");
    const groups = ref<any[]>([]);

    return {
      amount,
      participants,
      groups,
    };
  },
  {
    persist: {
      key: "group-store",
    },
  }
);

export default useGroupStore;
