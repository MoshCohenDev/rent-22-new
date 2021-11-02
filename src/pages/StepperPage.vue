<template>
  <div class="column q-pa-md ">
    <q-linear-progress
      class="linear"
      reverse
      :value="progress">
      <div class="absolute-full flex flex-center ">
        <q-badge class="text-weight-bold badge" color="white" text-color="black" style="opacity: 0.5"
                 :label="progressLabel1"/>
      </div>
    </q-linear-progress>
    <div>
    </div>
    <div class="q-pa-sm">
      <step1 v-if="step===0" :tempUsers="tempUsers"></step1>
      <step2 v-if="step===1"/>
      <step3 v-if="step===2"/>
      <step4 v-if=" step===3"/>
    </div>
    <div class="row fixed-bottom justify-center">
      <div class="q-pa-sm">
        <button class="button" v-if="step<3" color="primary" @click="nextPage" style="width: 150px">הבא
        </button>
      </div>
      <div class="q-pa-sm ">
      <button class="button" v-if="step>0" color="primary" @click="previousPage" style="width: 150px">הקודם
        </button>
        <button v-if="step===3" label="finish" rounded @click="submit" style="width: 150px">
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import Editor from "components/Home/editor";
import step1 from "components/NewContract/step1-Users";
import step2 from "components/NewContract/step2-uploadVidoeImg";
import step3 from "components/NewContract/step3-selectContracts";
import step4 from "components/NewContract/step4-createPdf";

export default {
  data() {
    return {
      tempUsers:
        {
          dateStart: new Date().toISOString()
            .substr(0, 10),
          dateEnd: new Date().toISOString()
            .substr(0, 10),
          nameRenting: '',
          nameRenter: '',
          idRenting: '',
          idRenter: '',
          Address: '',
          roomOfApartment: '',
          priceOfBuild: '',
          price: '',
        },
      step: 0,
      progress: 0.25
    }
  },
  name: "pageSetting",
  components: {step3, step2, step1, Editor, step4},
  computed: {
    progressLabel1() {
      if (this.step === 0) {
        return 'פרטים אישיים'
      }
      if (this.step === 1) {
        return 'העלאת תמונות '
      }
      if (this.step === 2) {
        return 'בחירת סוג חוזה  '
      }
      if (this.step === 3) {
        return ' סיום'
      }
    },
  },
  methods: {
    nextPage() {
      this.step++
      this.progress = this.progress + 0.25
    },
    previousPage() {
      this.step--
      this.progress = this.progress - 0.25
    },
    // submit() {
    //   const allData = {tempUsers: this.tempUsers, stepper2: this.stepper2, stepper3: this.stepper3}
    //   this.insertAllData(allData);
    //   this.$router.push('/home');
    // },
  }

}
</script>

<style scoped>
.linear {
  /*position: fixed;*/
  padding-top: 35px;

}
.button{
  border: 1.5px solid;
  padding: 8px;
  border-radius:8px;
  font-weight: bold;

  color: #cedccf;
  cursor: pointer;
  background: steelblue;
}
.button:hover,
.button:active {
  color: #1c1b1b;
  font-weight: bold;
  background: #ced6dc;
  border: none;
}

</style>
