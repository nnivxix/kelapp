<template>
	<c-box>
		<c-text fontSize="1.5em" fontWeight="700" textAlign="center">Kelompok Belajar</c-text>
		<c-flex flexWrap="wrap" justifyContent="center">
			<c-box p="3" v-for="(data, index) in this.$store.state.groups" :key="index">
					<c-text fontSize="1em" fontWeight="bold">Kelompok {{ index + 1}}</c-text>
					<c-box v-for="(d, index) in data" :key="index">
						<c-text>{{d}}</c-text>
					</c-box>			
			</c-box>
		</c-flex>
	</c-box>
</template>


<script>
import { CText,  CFlex, CBox,    } from '@chakra-ui/vue'
export default{
		components:{ CText, CFlex, CBox,    },
	};
</script>


<style scoped>

</style>
		