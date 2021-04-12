<template>
<!-- refrence	https://blog.prototypr.io/a-quest-for-the-ideal-navbar-height-4d3898a41f2 -->
	<c-flex justifyContent="center" alignItems="center" color="white" fontWeight="700" :fontSize="['1.4em', '1.8em']" bg="green.500"  width="100%">
		<c-box>Kelapp</c-box>
	</c-flex>
</template>


<script>
import { CFlex, CBox } from "@chakra-ui/vue";
export default{
	name: 'Navbar',
	components: {CFlex, CBox}
};
</script>


<style scoped>

</style>
		