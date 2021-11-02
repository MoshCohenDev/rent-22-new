<template>
  <div class="q-pa-md">
    <transition
      appear
      enter-active-class="animated zoomIn"
      leave-active-class="animated zoomOut absolute-top">
      <q-parallax>
        <template v-slot:media>
          <img class="img" src="https://www.formpl.us/blog/image_serve/free-contract-template"/>
        </template>
        <h1 class="text-center text-white">My-Rent </h1>
        <h4 class="text-white text-weight-bold">יצירת חוזה שכירות דיגטלי בקלות וללא עלות </h4>
      </q-parallax>
    </transition>
    <carousel style="opacity: 0.6"/>
    <cards></cards>
  </div>
</template>
<script>
import Cards from "components/Home/cards";
import Carousel from "components/Home/carousel";

export default {
  name: "Home",
  components: {Carousel, Cards},
  methods: {},

}
</script>
<style lang="scss">

.img {
  opacity: 0.4;
}

</style>
