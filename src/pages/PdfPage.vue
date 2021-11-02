<template>
  <div class="absolute-center">
    <q-btn
      @click="downloadContract()">
      download pdf
    </q-btn>
  </div>
</template>
<script>
// import {mapState} from "vuex";
// import pdfMake from "pdfmake/build/pdfmake";
// import pdfFonts from "pdfmake/build/vfs_fonts";
//
// pdfMake.vfs = pdfFonts.pdfMake.vfs;
const fonts = {
};
export default {
  name: "createPdf",
  data() {
    return {
      doc: {
        content: [
          'First paragraph',
          'Another paragraph, this time a little bit longer to make sure, this line will be divided into at least two lines', 'kobi and moshe'
        ],
        defaultStyle: {
          font: 'Hebrew'
        },
      }
    }
  },
  methods: {
    async downloadContract() {
      for (const obj of this.test) {
        for (const key in obj) {
          if (key == 'children') this.doc.content.push(obj.children.name)
        }
        this.doc.content.push(obj.name)
      }
      console.log(this.doc)
      await pdfMake.createPdf(this.doc, null, fonts).open();
      console.log('after')
    }
  },
  computed: {
    ...mapState('contracts', ['test'])
  }
}
</script>

<style lang="scss">

</style>
