import { storeToRefs } from "pinia";
import useGroupStore from "@/stores/group";

export default function useGenerate() {
  const { participants, amount } = storeToRefs(useGroupStore());
  const dummyData = [
    "Isabella Smith, Liam Johnson, Sophia Brown, Noah Davis, Olivia Miller, William Wilson, Ava Anderson, James Martinez, Mia Jones, Benjamin Thompson, Charlotte Taylor, Elijah Clark, Amelia Rodriguez, Alexander Lewis, Harper Hall, Henry Young, Evelyn Green, Michael Hill, Emily Turner, Daniel Walker, Scarlett White, Matthew Brooks, Abigail Foster, David Carter, Elizabeth Hayes, Joseph Ramirez, Grace Mitchell, Samuel Price, Victoria Rivera, Jackson Lee",
    "Ethan Wilson, Chloe Anderson, Lucas Thompson, Emma Davis, Sebastian Clark, Lily Martinez, Owen Johnson, Sophie Mitchell, Gabriel Brown, Avery Williams, Caleb Jones, Isabella Robinson, Nathan Young, Hannah Lewis, Andrew Harris, Zoe Hall, Eli Turner, Natalie Walker, Joshua Wright, Grace Adams, Aiden Green, Victoria Carter, Julian White, Ella Foster, Dominic Lee, Brooklyn Rivera, Christopher Moore, Addison Taylor, Samuel Reed, Stella Bailey",
    "Aditya Wijaya, Rika Pratiwi, Budi Santoso, Dewi Kusuma, Agung Nugroho, Siti Rahayu, Hendra Kurniawan, Rina Indah, Joko Susilo, Yuli Wulandari, Irfan Hakim, Maya Sari, Eko Prasetyo, Dewi Wahyu, Hadi Purnomo, Ratna Fitriani, Surya Putra, Rini Saputra, Arif Hidayat, Anita Setiawan, Ahmad Rahman, Diana Mulia, Iwan Setiawan, Rita Utami, Suryadi Nugraha, Siska Permata, Indra Wijaya, Sari Dewi, Hadi Setiawan, Rina Agustina",
    "Putri Aisyah, Muhammad Rizki, Siti Indah, Ahmad Fauzi, Desi Fitriani, Rudi Santoso, Maya Sari, Hendra Pratama, Dewi Lestari, Andi Susanto, Anita Purnama, Faisal Rachman, Rina Wahyuni, Eko Saputra, Linda Octavia, Hadi Santoso, Ratna Sari, Surya Wijaya, Yanti Rahayu, Dicky Nugraha, Rini Hasanah, Budiarto Santoso, Nia Permata, Arif Rahman, Anita Dewi, Indra Kusuma, Nurul Hidayah, Syaiful Anwar, Rita Anggraini, Herman Nugroho",
  ];
  function generate() {
    const indexName: number = Math.floor(Math.random() * dummyData.length);
    return (participants.value = dummyData[indexName]);
  }

  return {
    dummyData,
    generate,
  };
}
