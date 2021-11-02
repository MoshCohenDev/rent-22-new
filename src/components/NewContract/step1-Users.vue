<template>
  <div class="q-pa-sm">
    <p class="title q-ma-lg">פרטים אישיים </p>
    <q-separator/>
    <q-form
        @reset="onReset">
      <div class="text-h6 text-center text-weight-bolder">פרטי שוכר
        <div class="row input1">
          <q-input
              class="q-pa-sm col"
              rounded outlined
              type="number"
              v-model="tempUsers.idRenting" label="תעודת זהות *"
              :rules="[ val => val && val.length > 0 || 'Please type something']"
          />
          <q-input
              class="q-pa-sm col"
              rounded outlined v-model="tempUsers.nameRenting" label="שם השוכר *"
              :rules="[ val => val && val.length < 9 || 'Please type something']"/>
        </div>
      </div>
      <div class="text-h6 text-center text-weight-bolder q-mt-sm">פרטי משכיר
        <div class="row input2">
          <q-input
              class="q-pa-sm col"
              rounded outlined
              type="number"
              v-model="tempUsers.idRenter" label=" תעודת זהות משכיר *"
              :rules="[ val => val && val.length > 0 || 'Please type something']"
          />
          <q-input
              rounded outlined
              class="q-pa-sm col"
              v-model="tempUsers.nameRenter" label="שם המשכיר*"
              :rules="[ val => val && val.length > 0 || 'Please type something']"
          />
        </div>
      </div>
      <div class="text-h6 text-center text-weight-bolder">תשלומים
        <div class="row input1">
          <q-input
              class="q-pa-sm col"
              rounded outlined
              type="number"
              v-model="tempUsers.price" label="תשלום חודשי"
              :rules="[ val => val && val.length > 0 || 'Please type something']"
          />
          <q-input
              class="q-pa-sm col"
              type="number"
              rounded outlined
              v-model="tempUsers.priceOfBuild" label="תשלום ועד בית"
              :rules=" [ val=> val && val.length > 0 || 'Please type something']"
          />
        </div>
      </div>
      <div class="text-h6 text-center text-weight-bolder"> פרטי הנכס
        <div class="row input1">
      <q-input
          class="q-pa-sm col"
          rounded outlined
          ref="QautoComplete"
          v-model="tempUsers.Address"
          :rules="[ val => val && val.length > 0 || 'Please type something']"
      />
      <q-input
          class="q-pa-sm col"
          rounded outlined
          v-model="tempUsers.roomOfApartment" label="מספר חדרים "
          :rules="[ val => val && val.length > 0 || 'Please type something']"
      />
        </div>
      </div>
      <div class="text-h6 text-center text-weight-bolder">תקופת השכירות
        <div class="row input1">

          <q-input
              class="q-pa-sm col"
              rounded
              outlined
              label="תאריך יציאה  "
              v-model="tempUsers.dateEnd"
              mask="date" :rules="['date']">
            <template v-slot:append>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                  <q-date  v-model="tempUsers.dateEnd">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat/>
                    </div>
                  </q-date>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
          <q-input
            class="q-pa-sm col" rounded outlined
            label="תאריך כניסה "
            v-model="tempUsers.dateStart"
            mask="date"
            :rules="['date']">
            <template v-slot:append>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                  <q-date v-model="tempUsers.dateStart">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat/>
                    </div>
                  </q-date>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </div>
      </div>
    </q-form>
  </div>
</template>

<script>
export default {
  name: "Users",
  props: ['tempUsers'],
  data() {
    return {
      accept: false
    }
  },
  // mounted() {
  //   let defaultBounds = new google.maps.LatLngBounds(
  //       new google.maps.LatLng(-33.8902, 151.1759),
  //       new google.maps.LatLng(-33.8474, 151.2631));
  //
  //   let input = document.getElementById(this.$refs.QautoComplete.$refs.input.id);
  //   let options = {
  //     bounds: defaultBounds,
  //     types: ['establishment']
  //   };
  //
  //   let autocomplete = new google.maps.places.Autocomplete(input, options);
  //   autocomplete.addListener('place_changed', () => {
  //     this.tempUsers.Address = autocomplete.getPlace().formatted_address;
  //   });
  // },

  methods: {
    onSubmit() {
      if (this.accept !== true) {
        this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'warning',
          message: 'You need to accept the license and terms first'
        })
      } else {
        this.$q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'cloud_done',
          message: 'Submitted'
        })
      }
    },

    onReset() {
      this.name = null
      this.accept = false
    }
  }
}
</script>

<style scoped lang="scss">
.title {
  font-weight: bold;
  font-size: 30px;
  color: #1c1b1b;
  box-shadow: 2px 2px 2px 2px black;
  text-align: center;
  border-radius: 8px;
}

</style>
