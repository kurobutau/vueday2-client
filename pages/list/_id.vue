<template>
  <div>
    <div class="container">
      <div class="notification is-12 has-text-centered">
        <h1><strong>Installment System</strong></h1>
      </div>
      <section class="hero is-info">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">
              ACCOUNT
            </h1>
            <h2 class="subtitle">
              Not found account
              <b-button>Open Account</b-button>
            </h2>
          </div>
        </div>
      </section>
      <br>
      <section class="hero is-light">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">
              PAYMENT
            </h1>
            <h2 class="subtitle">
              Primary subtitle
            </h2>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState({
      userList: state => state.installment.users
    }),
    ...mapGetters({
        findUser: "installment/getUserById",
        getAccount: "installment/getAccount",
        getPayments: "installment/getPayments"
    })
  },
  mounted (){
      const userid=this.$route.params.id
      console.log(userid)
      console.log(this.findUser(1))
      console.log(this.getAccount(0))
      console.log(this.getPayments(0))
      //alert(this.route.params.id)
      //var currentUser = this.findUser()

  },
  methods: {}
};
</script>

<style></style>
