<template>
  <div class="q-pa-sm">
    <div id="q-app">
      <p class="title q-ma-lg">סוגי חוזים </p>
      <q-separator/>
      <q-form
        @submit="onSubmit"
        class="q-gutter-md form">
        <q-select
          class="q-mb-sm =select"
          v-model="modelContracts"
          :options="options"
          :name="this.text"
          label="סוגי חוזים"
          color="primary"
          filled
          clearable
        ></q-select>
        <!--          <q-input-->
        <!--            clearable class="select"-->
        <!--            @submit="onSubmit(text)"-->
        <!--            clear-icon="close"-->
        <!--            filled-->
        <!--            color="purple-12"-->
        <!--            v-model="text"-->
        <!--            label="Label"-->
        <!--          />-->
        <!--        <div class="btn">-->
        <!--          <q-btn label="Submit" type="submit" color="primary" class="btn"></q-btn>-->
        <!--        </div>-->
        <div class="q-pa-md groupItem">
          <q-list
            bordered>
            <q-expansion-item
              class="q-ma-sm " style="direction: rtl"
              v-for="(title,index) of contracts"
              :key="index"
              group="title"
              switch-toggle-side
              :duration="400"
              :label="title.name"
              header-class="text-primary">
              <q-item-section
                class="text-weight-bold" style="direction: rtl"> {{ index + 1 }}.
              </q-item-section>
              {{ title.title }}
              <!--              <q-btn @click="deleteItem(title.id)" round color="primary" icon="delete"/>-->
              <q-card>
                <q-card-section class="check1">
                  <q-checkbox
                    class="q-ma-sm"
                    v-for="(key) in title.children"
                    :key="key"
                    :val="key"
                    v-model="group"
                  >{{ key }}
                  </q-checkbox>
                  <!--                  <q-item-section side>
                                      <q-btn class="q-ma-sm" size="10px" label="הוסף סעיף חדש" color="primary" @click="prompt = true"/>
                                      <q-dialog v-model="prompt" persistent>
                                        <q-card style="min-width: 350px">
                                          <q-card-section>
                                            <div class="text-h6">סעיף חדש</div>
                                          </q-card-section>
                                          <q-card-section class="q-pt-none">
                                            <q-input dense v-model="child" autofocus @keyup.enter="prompt = false"/>
                                          </q-card-section>
                                          <q-card-actions align="right" class="text-primary">
                                            <q-btn flat label="Cancel" v-close-popup/>
                                            <q-btn flat label="Add section" @click="addSectionById(title)"
                                                   v-close-popup/>
                                          </q-card-actions>
                                        </q-card>
                                      </q-dialog>
                                    </q-item-section>-->
                </q-card-section>
              </q-card>
            </q-expansion-item>
          </q-list>

        </div>
      </q-form>
    </div>
  </div>
</template>

<script>
import {mapActions, mapState} from "vuex";
import {Loading} from "quasar";

export default {
  props: ['step2'],
  data() {
    return {
      group: [],
      title: '',
      text: '',
      options: [
        {label: 'חוזה סטנדרטי', value: 'standardContract'},
        {label: 'הסכם שכירות בלתי מוגנת', value: 'Unprotected tenancy agreement'},
        {label: 'חוזה מומלץ', value: 'recommendedContract'}
      ],
      modelContracts: null,
      submitEmpty: false,
      submitResult: [],
      prompt: false,
      child: ''
    }
  },
  methods: {
    ...mapActions('contracts', ['getContracts', 'setContracts', 'addChildSection', , 'insertSections']),
    readContract(val) {
      Loading.show()
      setTimeout(function () {
        Loading.hide();
      }, 2000);
      this.getContracts(val)
    },
    onSubmit(evt) {
      this.text = ''
      const formData = new FormData(evt.target)
      const submitResult = {}
      for (const [name, value] of formData.entries()) {
        submitResult.name = name
        submitResult.contract = value
        submitResult.id = Date.now()
      }
      this.setContracts(submitResult)
      this.submitResult = submitResult
      this.submitEmpty = submitResult.length === 0
    },
    addSectionById(id) {
      let childrenSection = {
        contract: id.contract,
        name: this.child,
        childId: Date.now(),
        id: id.id,
        done: false
      }
      this.child = ''
      this.addChildSection(childrenSection)
    },
    saveSection(val) {
      this.insertSections(val)
    },
  },
  computed: {
    ...mapState('contracts', ['contracts'])
  }
  ,
  watch: {
    modelContracts() {
      if (this.modelContracts !== null) {
        this.readContract(this.modelContracts)
      }
    },
    group() {
      if (this.group !== null) {
        this.saveSection(this.group)
      }
    }
  }

}
</script>
<style lang="scss">

.btn {
  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    width: 20%
  }
}

.check1 {
  display: flex;
  direction: rtl;
  flex-direction: column;
}

.title {
  font-weight: bold;
  font-size: 30px;
  color: #1c1b1b;
  box-shadow: 2px 2px 2px 2px black;
  text-align: center;
  border-radius: 8px;
}
</style>
