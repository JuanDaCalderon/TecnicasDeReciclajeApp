<template>
  <div id="app">
    <top-nav></top-nav>
    <router-view></router-view>
    <foot></foot>
  </div>
</template>

<script>
import TopNav from './Components/TopNav.vue'
import Foot from './Components/Footer.vue'
export default {
  components:{
    TopNav,
    Foot
  }
}
</script>
