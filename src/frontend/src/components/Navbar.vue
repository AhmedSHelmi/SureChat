<template>
  <div>
    <v-navigation-drawer v-model="drawer" absolute app stateless>
      <v-list class="pa-1">
        <v-list-tile >
          <v-list-tile>
            <div style="text-align:center" class="font-weight-thin font-italic display-1" >{{$store.state.user.username}}</div>
          </v-list-tile>

          <v-list-tile-content>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>

      <v-list class="pt-0" dense>
        <v-divider></v-divider>

        <v-list-tile
          v-for="item in items"
          :key="item.title"
          v-bind:to="item.to"
          @click="drawer=!drawer"
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="password">
          <v-list-tile-action>
            <v-icon>lock</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>Change Password</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile @click="logout">
          <v-list-tile-action>
            <v-icon>logout</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>Logout</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar color="teal " dark app flat>
      <v-toolbar-side-icon @click="drawer=!drawer"></v-toolbar-side-icon>

      <v-toolbar-title>
        Sure
        <b>Chat</b>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-menu
        bottom
        left
        offset-y
        :close-on-content-click="false"
        :min-width="300"
        :max-width="500"
        transition="slide-x-reverse-transition"
      >

      </v-menu>
    </v-toolbar>
  </div>
</template>

<script>
import axios from "axios";
import Cookies from "js-cookie";
import store from '../store';
export default {
  data() {
    return {
      
      drawer: false,
      items: []
    };
  },
  methods: {
   
    getUserList: function() {
      let id;
      let user;
      let endpoint = "api/accounts/me/";
      axios
        .get(endpoint)
        .then(response => {
          id = response.data.id;
          user = response.data;
          
            this.items = [
              { title: "Messages", icon: "chat", to: "/chat" }
            ];
              
            
          
          this.items.push();
        })
        .catch(error => {
          console.log(error);
        });
    },
    logout: function() {
      window.location.replace(
        window.location.protocol +
          "//" +
          window.location.host +
          "/accounts/logout/"
      );
    },
    password: function() {
      window.location.replace(
        window.location.protocol +
          "//" +
          window.location.host +
          "/accounts/password/"
      );
    }
  },
  mounted() {
    
    this.getUserList();
  }
};
</script>

