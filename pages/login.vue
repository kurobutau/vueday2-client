<template>
  <div class="container">
    <div class="notification is-centered">
      <div class="is-12 has-text-centered">
        <b-field
          ><h1><strong>STAFF Login</strong></h1></b-field
        >
      </div>
      <div class="columns">
        <div class="column is-5 has-text-right">Username</div>
        <div class="column is-3 has-text-left">
          <b-input v-model="username"></b-input>
        </div>
      </div>
      <div class="columns">
        <div class="column is-5 has-text-right">Password</div>
        <div class="column is-3 has-text-left">
          <b-input v-model="password"></b-input>
        </div>
      </div>
      <div class="columns">
        <div class="column is-5 has-text-right"></div>
        <div class="column is-3 has-text-left">
          <b-button @click="onLogin">Login</b-button>
          <b-button>Reset</b-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  computed: {
    ...mapState({
      userList: state => state.installment.users
    })
  },
  methods: {
    ...mapMutations({
      newUser: "addUser"
    }),

    onLogin() {
      const findUser = this.userList.find(u => {
        return u.username === this.username && u.password === this.password;
      });

      if (findUser.length == 0) {
        alert("username or password is incorrect");
      } else {
        alert(findUser.type);
        this.newUser({
          
            userId: 2,
            username: "admin1",
            password: "admin1",
            type: "admin"
          
        },);
      }
    }
  }
};
</script>

<style></style>
