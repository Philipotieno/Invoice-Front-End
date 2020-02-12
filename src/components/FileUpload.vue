<template>
  <div class="file-upload">
    <h1>Welcome to My Data Visualization Site</h1>
    <blockquote class="blockquote text-xs-center">
          To visualize your data<br>
          upload a csv file with the required headers
    </blockquote>
    <h3>To get started upload a file</h3>
    <div class="upload">
        <input accept=".csv" type="file" id="file" ref="userFile" v-on:change="handleFileUpload()" /><br>
        <b-button variant="primary" v-on:click="submitFile()">Submit</b-button>
        <div v-if="uploadInvoice && uploadInvoice.success">{{uploadInvoice.success}}</div>
        <div v-else>File Not Uploaded</div>
    </div>
      <div class="drop_dwn">
        <b-dropdown id="dropdown-1" size="sm" text="View More Options" class="m-md-2">
          <b-dropdown-item to="/last-transactions">Last 30 Transactions Chart</b-dropdown-item>
          <b-dropdown-item to="/invoice-table">Summary of transactions</b-dropdown-item>
          <b-dropdown-item to="/top-customers">View Top 5 Customers</b-dropdown-item>
        </b-dropdown>
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
.upload {
  display: center;
}
h3 {
  margin: 40px 0 0;
  color: blue;
  font-size: 30px;
}
.drop_dwn {
 margin-bottom: 10%
}
input {
   background-color: rgb(177, 224, 172);
   color: rgb(0, 0, 0);
   border-radius: 0%;
   margin-top: 1%;
}

button {
   background-color: rgb(2, 5, 158);
   border-radius: 4%;
   width: 10%;
   margin-top: 1%;
}

@media only screen and (max-width: 800px) {
  .upload {
    border: none;
    border-bottom: #f2f2f2 solid 0.15rem;
    height: 100rem;
    position: relative;
    width: 100%;
    padding: 0px 15px;
   }
}

</style>