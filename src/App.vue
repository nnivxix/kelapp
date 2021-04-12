<template>
  <c-theme-provider>
    <c-reset />
    <!--Your application goes here -->
   <Form />
   <Result />
  </c-theme-provider>
</template>

<script>
import Form from './components/Form.vue'
import Result from './components/Result.vue'

export default {
  name: "App",
  components: { Form, Result }
};
</script>
