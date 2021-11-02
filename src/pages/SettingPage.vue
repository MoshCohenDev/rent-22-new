<template>
  <q-page padding>
    <q-list class="q-mb-md" bordered padding>
      <q-item-label header>Settings</q-item-label>
    </q-list>
    <q-list bordered padding>
      <q-item-label header>More</q-item-label>
      <q-item
        to="/settings/help"
        tag="label" v-ripple>
        <q-item-section>
          <q-item-label>Help</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-icon
            name="chevron_right"></q-icon>
        </q-item-section>
      </q-item>
      <q-item @click="emailUs" tag="label">
        <q-item-section>
          <q-item-label>Email us</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-icon
            name="chevron_right"></q-icon>
        </q-item-section>
      </q-item>
    </q-list>
    <editor/>
  </q-page>
</template>

<script>

import Editor from "components/Home/editor";
export default {
  name: "pageSetting",
  components: {Editor},
  computed: {},
  methods: {

    emailUs() {
      window.location.href = 'mailto:moshe2218cohen@gmail.com ?'
    }
  }
};
</script>

<style scoped>
</style>
