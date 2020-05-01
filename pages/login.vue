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
import { mapState, mapMutations, mapGetters } from "vuex";
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
    }),
    ...mapGetters({
      authen: "installment/getUserLogin",
      findbyid: "installment/getUserById"
    })
  },
  methods: {
    ...mapMutations({
      newUser: "installment/addUser"
    }),

    onLogin() {
      const findUser = this.authen(this.username, this.password);

      if (findUser.length == 0) {
        alert("username or password is incorrect");
      } else {
        this.$router.push(`list/${findUser.userId}`);
      }
    }
  }
};
</script>

<style></style>
