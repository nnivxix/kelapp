<template>
	<c-flex :fontSize="['0.8em','1.1em']" marginTop="3em" color="gray.500" justifyContent="center">
		<c-text>Made with 💚 by <a target="_blank" href="https://twitter.com/nnivxix">Hanasa</a> in 🇮🇩 &#169; 2021</c-text>
	</c-flex>
</template>


<script>
import { CFlex, CText } from "@chakra-ui/vue";
export default{
	name: 'Footer',
	components: {CFlex, CText}
};
</script>


<style scoped>
	a{
		text-decoration: underline;
	}
</style>
		