<template>
  <v-app>
    <Navbar/>
    <v-container style="margin-top:48px;">
      <router-view/>
    </v-container>
  </v-app>
</template>
<style scopped>
#scrolling-pane::-webkit-scrollbar {
  width: 1em;
}

#scrolling-pane::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}

#scrolling-pane::-webkit-scrollbar-thumb {
  background-color: darkgrey;
  outline: 1px solid slategrey;
}
</style>

<script>
import Navbar from "./components/Navbar";
export default {
  name: "App",
  components: {
    Navbar
  },
  data() {
    return {};
  },
  methods: {
    getUser : function(){
      this.$store.commit('GET_USER');
    }
  },
  mounted() {
    this.getUser();
  },
};
</script>
