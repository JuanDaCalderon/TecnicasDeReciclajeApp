<template>
    <div>
        <slider></slider>
        <welcome></welcome>
        <video-game></video-game>
        <info></info>
        <carrousel></carrousel>
    </div>
</template>

<script>
import Slider from './Slider.vue'
import Welcome from './Welcome.vue'
import VideoGame from './VideoGame.vue'
import Info from './Info.vue'
import Carrousel from './Carrousel.vue'
export default {
    components:{
    Slider,
    Welcome,
    VideoGame,
    Info,
    Carrousel
  }
}
</script>
