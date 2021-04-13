<template>
	<c-box>
		<c-text fontSize="1.5em" fontWeight="700" textAlign="center">Kelompok Belajar</c-text>

		<c-flex v-if="this.$store.state.groups.length > 0 " flexWrap="wrap" justifyContent="center">
			<c-box p="3" v-for="(data, index) in this.$store.state.groups" :key="index">
					<c-text fontSize="1em" fontWeight="bold">Kelompok {{ index + 1}}</c-text>
					<c-box justifyContent="flex-start" v-for="(d, index) in data" :key="index">
						<c-text>{{d}}</c-text>
					</c-box>			
			</c-box>
		</c-flex>
		<c-flex v-else justifyContent="center"> <c-text><c-icon name="warning"  /> Belum ada grup yang dibuat</c-text> </c-flex>
	</c-box>
</template>


<script>
import { CText,  CFlex, CBox, CIcon   } from '@chakra-ui/vue'
export default{
		components:{ CText, CFlex, CBox, CIcon   },
	};
</script>


<style scoped>

</style>
		