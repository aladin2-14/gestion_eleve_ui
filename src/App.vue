<script >
import Login from "./components/Login.vue"
export default{
  components:{Login}
}
</script>

<template>
  <router-view v-if="$store.state.user!=null"></router-view>
  <login v-else></login>
  
</template>

<style scoped>

</style>
