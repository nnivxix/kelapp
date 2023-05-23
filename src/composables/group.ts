import { storeToRefs } from "pinia";
import useGroupStore from "@/stores/group";

export default function useGroup() {
  const { amount, participants, groups } = storeToRefs(useGroupStore());
  function shuffleArray(array: string[]) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }
  function createGroup() {
    groups.value = [];
    let amount_group = parseInt(amount.value);

    // split from string to array
    const array: string[] = shuffleArray(participants.value.split(","));

    const perGroup = Math.ceil(array.length / amount_group);

    const res = [];
    for (let i = 0; i < array.length; i++) {
      if (i % perGroup === 0) {
        // Push a new array containing the current value to the res array
        res.push([array[i]]);
      } else {
        res[res.length - 1].push(array[i]);
      }
    }
    groups.value = res;
  }

  return {
    shuffleArray,
    createGroup,
  };
}
