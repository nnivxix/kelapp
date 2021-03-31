<template>
  <c-theme-provider>
    <c-reset />
    <!--Your application goes here -->
   <Form />
  </c-theme-provider>
</template>

<script>
import Form from './components/Form.vue'

export default {
  name: "App",
  components: { Form }
};
</script>
