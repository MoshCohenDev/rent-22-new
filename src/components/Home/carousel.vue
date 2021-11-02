<template>
  <div class="q-pa-md">
    <h4 class="text1 text-weight-bolder ">
      ?אז איך בעצם זה עובד
    </h4>
    <q-carousel
      v-model="slide"
      transition-prev="scale"
      transition-next="scale"
      swipeable
      animated
      control-color="black"
      navigation
      padding
      arrows
      height="300px"
      class="text-black shadow-1 rounded-borders"
    >
      <template v-slot:navigation-icon="{ active, btnProps, onClick }">
        <q-btn v-if="active" size="lg" icon="home"  flat round dense @click="onClick"/>
        <q-btn v-else size="sm" :icon="btnProps.icon"  flat round dense @click="onClick"/>
      </template>

      <q-carousel-slide name="style" class="column no-wrap flex-center">
        <q-icon name="contacts" size="56px"/>
        <div class="q-mt-md text-center">
        אימות נתונים
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="tv" class="column no-wrap flex-center">
        <q-icon name="image" size="56px"/>
        <div class="q-mt-md text-center">
          העלאת תמונות הדירה
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="layers" class="column no-wrap flex-center">
        <q-icon name="grading" size="56px"/>
        <div class="q-mt-md text-center">
          בחירת סוג החוזה
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="map" class="column no-wrap flex-center">
        <q-icon name="picture_as_pdf" size="56px"/>
        <div class="q-mt-md text-center">
          יצירת קובץ pdf ושליחה למייל
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>
<script>
export default {
  name: "carousel",
  data() {
    return {
      slide: 'style',

    }
  }
}
</script>

<style scoped>
.text1{
  text-align: center;
  font-family: "Times New Roman", Times, serif;

}
</style>
