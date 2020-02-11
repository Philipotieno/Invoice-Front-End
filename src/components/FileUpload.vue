<template>
  <div class="file-upload">
      <v-container fluid>
    <v-layout row wrap>
      <v-flex xs12 class="text-xs-center" mt-5>
        <h1>Welcome to My Data Visualization Site</h1>
      </v-flex>
      <v-flex xs12 sm6 offset-sm3 mt-3>
        <blockquote class="blockquote text-xs-center">
          To visualize your data<br>
          upload a csv file with the required headers
        </blockquote>
      </v-flex>
    </v-layout>
  </v-container>
      <div class="drop_dwn">
        <b-dropdown id="dropdown-1" size="sm" text="View More Options" class="m-md-2">
          <b-dropdown-item to="/last-transactions">Last 30 Transactions Chart</b-dropdown-item>
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
  margin-top: 10%;
  align-items: center
}
h3 {
  margin: 40px 0 0;
  color: blue
}
.drop_dwn {
 margin-bottom: 10%
}

</style>