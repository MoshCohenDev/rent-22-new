<template>
  <div>
    <div class="step2 q-mt-lg">
      <p class="title">תמונות</p>
      <q-uploader
        class="full-width"
        flat
        label="העלאת תמונות הדירה " style="text-align: center"
        url="http://localhost:4444/upload"
        multiple
      >
        <template v-slot:list="scope">
          <q-list separator>

            <q-item
              v-for="file in scope.files"
              :key="file.name">
              <q-item-section>

                <q-item-label class="full-width ellipsis">
                  {{ file.name }}
                </q-item-label>

                <q-item-label caption>
                  Status: {{ file.__status }}
                </q-item-label>

                <q-item-label caption>
                  {{ file.__sizeLabel }} / {{ file.__progressLabel }}
                </q-item-label>

              </q-item-section>

              <q-item-section
                v-if="file.__img"
                thumbnail
                class="gt-xs"
              >
                <img
                  :src="file.__img.src">
              </q-item-section>
              <q-item-section side>
                <q-btn
                  size="10px"
                  label="העלה "
                  @click="uploadImg(file)"
                />
              </q-item-section>
              <q-item-section side>
                <q-btn
                  flat
                  size="16px"
                  dense
                  round
                  icon="delete"
                  @click="scope.removeFile(file);removeFile(file)"
                />
              </q-item-section>
            </q-item>
          </q-list>
        </template>
      </q-uploader>
    </div>
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "uploadVideoImg",
  data() {
    return {
      image: '',
      loading2: false,
      percentage2: 0,
    }
  },
  methods: {
    ...mapActions('contracts', ['uploadPhoto','deleteFile']),
    uploadImg(img) {
      console.log(img)
      this.uploadPhoto(img)
    },
    removeFile(file) {
      console.log({file})
      this.deleteFile(file)
    }
  }
}
</script>

<style scoped>
.title{
  font-weight: bold;
  font-size: 30px;
  color: #1c1b1b;
  box-shadow: 2px 2px 2px 2px black ;
  margin: 30px;
  text-align: center;
  border-radius: 8px;
}
</style>
