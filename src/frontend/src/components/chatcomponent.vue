<template>
<div>
 <v-btn depressed large flat outline color="teal" @click="startcondialog=!startcondialog" ><v-icon>account_box</v-icon> Start a new conversation!</v-btn>
           
    <v-dialog
      v-model="startcondialog"
      width="500"
    >
     

      <v-card>
        <v-card-title
          class="headline teal white--text "
          primary-title
        >
          Search for a user
        </v-card-title>

        <v-card-text>
          <v-autocomplete
        v-model="select"
        :items="users"
        :search-input.sync="search"
        prepend-icon="account_box"
        cache-items
        hide-details
        placeholder="Start typing to Search for a user"
        solo-inverted
        clearable
        autofocus 
        style="margin:auto"              
      ></v-autocomplete>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-btn
            color="primary"
            flat
            @click="StartConversation();getThreads();startcondialog = false;"
          >
            Start a new conversation
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            flat
            @click="startcondialog = false;select=''"
          >
            Cancel
          </v-btn>          
        </v-card-actions>
      </v-card>
    </v-dialog>

  <div class="row">
    <div class="chat-body">
      <center><b>Active Threads</b></center><hr>
      <v-container grid-list-md text-xs-center>
        <v-flex>
          <div v-for="(item, index) in threads" :key="index">
            <v-avatar v-if="index == current_thread_index" color="orange" size="50">
              <b
                style="color:white;font-size:200%;cursor:pointer;"
                v-if="$store.state.user.id == item.id"
                v-bind:title="item.sender.username"
                @click="setCurrentThread(index)"
              >
              <v-icon color="white">done_all</v-icon>
              </b>
              <b
                style="color:white;font-size:200%;cursor:pointer;"
                v-else
                @click="setCurrentThread(index)"
                v-bind:title="item.receiver.username"
              ><v-icon color="white">done_all</v-icon></b>
            </v-avatar>

            <v-avatar v-else color="teal" size="50">
              <b
                style="color:white;font-size:200%;cursor:pointer;"
                v-if="$store.state.user.id == item.receiver.id"
                v-bind:title="item.sender.username"
                @click="setCurrentThread(index)"
              >{{item.sender.username.charAt(0).toUpperCase()}}</b>
              <b
                style="color:white;font-size:200%;cursor:pointer;"
                v-else
                @click="setCurrentThread(index)"
                v-bind:title="item.receiver.username"
              >{{item.receiver.username.charAt(0).toUpperCase()}}</b>
            </v-avatar>
            <hr>
          </div>
        </v-flex>
      </v-container>
    </div>
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    >

    <div class="col msg-window-container">
      <div class="card" id="msgWindow">
        <div class="card-header">         
         <b v-if="current_chat"> You Are Now Messaging:   {{current_chat}}   <v-btn flat depressed small color="teal" class=" right" @click="reload()"> <v-icon>refresh</v-icon> Refresh Threads</v-btn></b> 
         <b v-else>Welcome to Sure Chat!   <v-btn flat depressed small color="teal" class=" right" @click="reload()"> <v-icon>refresh</v-icon> Refresh Threads</v-btn></b>
       </div>
        <div v-if="current_thread_index !== null" class="msg annoucement">Chat started!</div>
        <div class="card-body" id="msgs" v-for="(message, index) in messages" :key="index">
          <slot>
            <div
              v-if="message.sender.id === $store.state.user.id"
              class="msg from"
              v-bind:title="message.timestamp"
            ><p>{{message.text}}</p><small>{{message.timestamp}}</small></div>
            <div v-else class="msg to" v-bind:title="message.timestamp"><p>{{message.text}}</p><small color="grey">{{message.timestamp}}</small></div>
          </slot>
        </div>
      </div>

      <div class="card-footer">
        <div class="input-group" id="msgForm" data-sender="me">
          <input
            class="form-control"
            type="text"
            v-model="new_message"
            placeholder="Type message and hit [Enter] to send."
            @keydown.enter="sendMessage"
          >
          
          <div class="input-group-append">
            <button class="btn btn-outline-secondary" type="button" @click="sendMessage">Send</button>
         
         
         
         
         
         
         
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script src="https://code.jquery.com/jquery-3.1.1.slim.min.js" integrity="sha384-A7FZj7v+d/sdmMqp/nOQwliLvUsJfDHW+k9Omg/a/EheAdgtzNs3hpfag6Ed950n" crossorigin="anonymous"></script>
<!-- Latest compiled and minified JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
<script>
ObjDiv = document.getElementById("msgWindow");
ObjDiv.scrollTop = ObjDiv.scrollHeight;
</script>

<script>
import axios from "axios";
import Cookies from "js-cookie";
export default {
  data() {
    return {
      search: null,
      select: null,
      selectedid:null,
      id:null,
      startcondialog:false,
      users: [],
      ids:[],
      messages: [],
      threads: [],
      current_thread: null,
      current_thread_index: null,
      current_chat: null,
      new_message: null
    };
  },
  

  methods: {
    getThreads: function() {
      let endpoint = "api/chatapp/threads/";
      axios
        .get(endpoint)
        .then(response => {
          this.threads = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    },reload:function() {
      location.reload()
    },
    setCurrentThread: function(index) {
      this.current_thread_index = index;
      this.current_thread = this.threads[index].id;
      if (this.$store.state.user.id == this.threads[index].sender.id) {
        this.current_chat = this.threads[index].receiver.username;
      } else {
        this.current_chat = this.threads[index].sender.username;
      }
      axios
        .get(`api/chat/messages/${this.current_thread}/`)
        .then(response => {
          this.messages = response.data;
          let config = {
            headers: {
              "X-CSRFToken": Cookies.get("csrftoken")
            }
          };
          axios
            .put(
              `api/chat/messages/${this.current_thread}/read/`,
              { read: true },
              config
            )
            .then(response => {this.getThreads();})
            .catch(error => {
              console.log(error);
            });
        })
        .catch(error => {
          console.log(error);
        });
    },
    sendMessage: function() {
      if (this.current_thread_index !== null) {
        let endpoint = `api/chat/messages/create/`;
        let message = { text: this.new_message, thread: this.current_thread };
        let config = {
          headers: {
            "X-CSRFToken": Cookies.get("csrftoken")
          }
        };
        axios
          .post(endpoint, message, config)
          .then(response => {
            this.new_message = null;
            this.setCurrentThread(this.current_thread_index);
            var audio = new Audio('https://notificationsounds.com/notification-sounds/job-done-501/download/mp3');
                audio.play();
          })
          .catch(error => {
            console.log(error);
          });
      }
    },
    update: function() {
      setInterval(
        function() {
          if (this.current_thread_index !== null) {
            this.setCurrentThread(this.current_thread_index);
            this.getThreads();
          }
        }.bind(this),
        1000
      );
    },
    userlist:function(){
      let endpoint= `/api/accounts/list/`
      let ids=[];
      let usernames=[];
      axios
        .get(endpoint)
        .then(response => {


           for (let i = 0; i < response.data.length; i++) {
            if(response.data[i].id == this.$store.state.user.id){
              continue
            }else{
              usernames[i]=response.data[i].username
              ids[i]=response.data[i].id

            }
          }
        usernames = usernames.filter(function( element ) {
          return element !== undefined;
          });
          ids = ids.filter(function( element ) {
          return element !== undefined;
          });
        this.users=usernames
        this.ids=ids
})
        .catch(error => {
          console.log(error);
        });

    },
  StartConversation:function(){
  let tmp
   if(this.select != ''){
     tmp= this.users.indexOf(this.select)
     this.selectedid=this.ids[tmp]
      


       let endpoint = `/api/chatapp/threads/create/`;
        let chatinit = { sender: this.$store.state.user.id, receiver: this.selectedid };
        let config = {
          headers: {
            "X-CSRFToken": Cookies.get("csrftoken")
          }
        };
        axios
          .post(endpoint, chatinit, config)
          .then(response => {
            location.reload()
            this.getThreads()
            this.setCurrentThread(this.current_thread_index);
            this.select=""
            this.selectedid=""
          })
          .catch(error => {
            console.log(error);
            this.select=""
            this.selectedid=""          
          });
      }


   }
  },
  updated() {
   
  
  },
  mounted() {
    this.getThreads();
    this.update();
    this.userlist();
  }
};
</script>
<style sccoped>
.chat-body {
  border: 0.5px lightgrey solid;
  width: 90px;
  height: 35em;
  margin-top: 3ex;
  overflow-y: scroll;
}
#msgWindow {
  margin-top: 20px;
  height: 35em;
  overflow-y: scroll;
}
#msgs {
  margin: 0px 0px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-end;
  align-items: flex-start;
}

.msg {
  margin: 5px 0;
  background: WhiteSmoke;
  padding: 7px 7px;
  display: inline-block;
  position: relative;
  border-radius: 5px;
}
.from {
  align-self: flex-end;
}
.to {
  align-self: flex-start;
  background: #ceedff;
  border: none;
}
.annoucement {
  align-self: center;
  background: #fff082;
}

.chat-body::-webkit-scrollbar {
  width: 1em;
}

.chat-body::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 1px rgba(0, 0, 0, 0.3);
}

.chat-body::-webkit-scrollbar-thumb {
  background-color: darkgrey;
  outline: 1px solid slategrey;
}
</style>