<template>
<div>
    <center><h2>Database Dump files will download shortly...</h2></center>

    <v-snackbar color="danger" v-model="snackbar" bottom vertical>
      <p>Please allow pop-ups in order to start downloading the file</p>
    </v-snackbar>
</div>
</template>

<script>
import axios from "axios";
export default {
    data(){
        return{
            snackbar:true
        }
    },methods:{
        down:function(){
      //TODO: chnage download Url After Deployment      
     let url="http://3.19.228.139/api/chat/messages/dump/"         
      window.open(url, '_blank');
        }
    },
    mounted(){
     this.down()
    }
}
</script>

<style>

</style>
