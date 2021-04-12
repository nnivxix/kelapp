<template>
  <c-theme-provider>
    <c-reset />
    <!--Your application goes here -->
    <Navbar />
   <Form />
   <Result />
   <Footer />
  </c-theme-provider>
</template>

<script>
import Form from './components/Form.vue'
import Result from './components/Result.vue'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

export default {
  name: "App",
  components: { Form, Result, Navbar, Footer }
};
</script>
<style>
	@import url('https://fonts.googleapis.com/css2?family=Padauk:wght@400;700&display=swap');
	*{
		font-family: 'Padauk', sans-serif;
	}
</style>