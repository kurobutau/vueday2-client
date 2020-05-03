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
            <div v-if="this.account.length==0">
              <h2 class="subtitle">
                <span class="">Not found account</span><br />
                <b-button>Open Account</b-button>
              </h2>
            </div>
            <div v-else>
              <h2 class="subtitle">
                <span class="">Account Name : {{this.currentUser.username}}</span><br />
                <span class="">Loan Credit: {{this.account.loadAmount}}</span><br />
                <span class="">Loan Balance : {{this.account.loadBalance}}</span><br />
              </h2>
            </div>
          </div>
        </div>
      </section>
      <br />
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
    return {
      account: {},
      payments: [],
      currentUser: {}
    };
  },
  computed: {
    ...mapState({
      userList: state => state.installment.users,
      accountList: state => state.installment.accounts,
    }),
    ...mapGetters({
      findUser: "installment/getUserById",
      getAccount: "installment/getAccount",
      getPayments: "installment/getPayments"
    })
  },
  mounted() {
    
  },
  created (){
    let uid = this.$route.params.id
    this.currentUser=this.findUser(uid)
    console.log(this.currentUser)
    
    this.account=this.getAccount(this.currentUser.userId)
    this.payments=this.getPayments(this.account.accountId)
    
    
  },
  methods: {}
};
</script>

<style></style>
