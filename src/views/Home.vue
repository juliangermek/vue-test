<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <CreateUser msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import CreateUser from '@/components/CreateUser.vue';

export default {
  name: 'Home',
  components: {
    CreateUser,
  },
};
</script>
