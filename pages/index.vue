<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">
        staff
      </h1>
      <h2 class="subtitle">
        My amazing Nuxt.js project
      </h2>
      <div class="links">
        <a href="https://nuxtjs.org/" target="_blank" class="button--green">
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
    </div>
    <b-Button>Test</b-Button>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";
import { mapState, mapMutations, mapGetters } from "vuex";
export default {
  components: {
    Logo
  },
  computed: {
    ...mapState({
      userList: state => state.installment.users,
      accountList: state => state.installment.accounts,
      paymentList: state => state.installment.payments
    })
  },
  methods: {
    ...mapMutations({
      newUser: "installment/addUser",
      newAccount: "installment/addAccount",
      newPayment: "installment/addPayment"
    })
  },
  created() {
    if (this.accountList.length === 0) {
      console.log("start init account")
      const account = {
        accountId: 1,
        userId: 1,
        openDateTime: "2020-04-01",
        loadAmount: 300000,
        loadBalance: 300000,
        isClose: false
      }
      this.newAccount({...account,})
      console.log("finished init account")
      console.log(this.accountList)
    }
    if (this.paymentList.length === 0) {
      console.log("start init payment")
      const payment1 = {
        paymentId: 1,
        accountId: 1,
        paymentDate: "2020-04-03",
        amount: 2000
      }
      const payment2 = {
        paymentId: 1,
        accountId: 1,
        paymentDate: "2020-04-04",
        amount: 2000
      }
      this.newPayment({...payment1})
      this.newPayment({...payment2})
      //this.newPayment(payment2)
      console.log("finished init payment")
      console.log(this.paymentList)
    }
    this.newPayment()
    //this.$router.push('login')
  }
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
