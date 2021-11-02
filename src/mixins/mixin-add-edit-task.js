import ModalButtons from "components/Tasks/Modals/Shared/ModalButtons";
import ModalTaskName from "components/Tasks/Modals/Shared/ModalTaskName";
import ModalHeader from "components/Tasks/Modals/Shared/ModalHeader";

export default {
  components: {ModalButtons, ModalTaskName, ModalHeader},

  methods: {
    submitForm() {
      this.$refs.modalTaskName.$refs.name.validate()
      if (!this.$refs.modalTaskName.$refs.name.hasError) {
        this.submitTask()
      }
    },
    clearDouDate() {
      this.taskToSubmit.douDate = ''
      this.taskToSubmit.douTime = ''
    }
  },
}
