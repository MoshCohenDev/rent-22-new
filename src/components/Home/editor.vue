<template>
  <div class="q-pa-md q-gutter-sm ">
    <q-card class="home" >
      <q-editor
        style=" background-color: ;"
        class="editor min-he "
        v-model="editor"
        flat
        toolbar-text-color="white"
        toolbar-toggle-color="yellow-8"
        toolbar-bg="primary"
        :toolbar="[
        ['bold', 'italic', 'underline'],
        [{
          label: $q.lang.editor.formatting,
          icon: $q.iconSet.editor.formatting,
          list: 'no-icons',
          options: ['p', 'h3', 'h4', 'h5', 'h6', 'code']
        }]
      ]"
      />
      <q-separator/>
    </q-card>
  </div>
</template>
<script>
export default {
  name: "editor",
  data() {
    return {
      editor: 'כתבו לנו'
    }
  },
  methods: {
    emailUs() {
      window.location.href = 'mailto:moshe2218cohen@gmail.com ?'
    }
  }

}
</script>

<style scoped>
.editor {
  direction: rtl;
}
</style>
