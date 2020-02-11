<template>
  <div class="file-upload">
      <div class="drop_dwn">
      <b-dropdown id="dropdown-offset" offset="25" text="More" class="m-2">
        <b-dropdown-item to="/">Last 30 Transactions Chart</b-dropdown-item>
        <b-dropdown-item to="/invoice-table">Summary of transactions</b-dropdown-item>
        <b-dropdown-item to="/top-customers">View Top 5 Customers</b-dropdown-item>
      </b-dropdown>
    </div>
    <h3>Upload File</h3>
    <div class="large-12 medium-12 small-12 cell">
      <label>
        File
        <input accept=".csv" type="file" id="file" ref="userFile" v-on:change="handleFileUpload()" />
      </label>
      <b-button variant="primary" v-on:click="submitFile()">Submit</b-button>
    </div>
    <div v-if="uploadInvoice && uploadInvoice.success">
      {{uploadInvoice.success}}
    </div>
    <div v-else>
      File Not Uploaded
    </div>
  </div>
</template>

<script>
export default {
  name: "FileUpload",
  computed:{
    uploadInvoice(){
      return this.$store.getters.uploadInvoice;
    }
  },
  components: {},
  data() {
    return {
      url: null,
      imageFile: undefined
    };
  },
  methods: {
    uploadFileModal() {
      this.$refs.fileModal.show();
    },
    handleFileUpload() {
      let image = this.$refs.userFile.files[0];
      if (image) {
        this.imageFile = image;
        this.url = URL.createObjectURL(image);
      }
    },
    submitFile() {
      let imageData = new FormData();
      imageData.append("file", this.imageFile);
      this.$store.dispatch("uploadInvoice", imageData);
    },
    cancelUpload() {
      //cancels upload
    }
  }
};
</script>
<style scoped>
.file-upload {
  text-align: center;
}
</style>