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
            <div v-if="this.account == null">
              <h2 class="subtitle">
                <span class="">Not found account</span><br />
                <b-button>Open Account</b-button>
              </h2>
            </div>
            <div v-else>
              <h2 class="subtitle">
                <span class=""
                  >Account Name : {{ this.currentUser.username }}</span
                ><br />
                <span class="">Loan Credit: {{ this.account.loadAmount }}</span
                ><br />
                <span class=""
                  >Loan Balance : {{ this.account.loadBalance }}</span
                ><br />
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
            <div v-if="this.payments.length == 0">
              <h2 class="subtitle">
                <span class="">Not found record of payment</span><br />
              </h2>
            </div>
            <div v-else>
              <h2 class="subtitle">
                <b-table :data="data" :columns="columns"></b-table>
              </h2>
            </div>
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
      currentUser: {},
      data:[],
      columns: [
        {
          field: "paymentId",
          label: "Transaction ID",
          width: "200",
          numeric: true
        },
        {
          field: "paymentDate",
          label: "Payment Date"
        },
        {
          field: "amount",
          label: "Amount"
        }
      ]
    };
  },
  computed: {
    ...mapState({
      userList: state => state.installment.users,
      accountList: state => state.installment.accounts
    }),
    ...mapGetters({
      findUser: "installment/getUserById",
      getAccount: "installment/getAccount",
      getPayments: "installment/getPayments"
    })
  },
  mounted() {},
  created() {
    const uid = this.$route.params.id;
    this.currentUser = this.findUser(this.$route.params.id);
    if(this.currentUser==null)
    {
      alert('User not found')
      this.$router.replace("/login")
    }
    else  {
      this.account = this.getAccount(this.currentUser.userId);
      if (this.account != null) {
        this.payments = this.getPayments(this.account.accountId);
        this.data=[{...this.payments}]
      }
    }
  },
  methods: {}
};
</script>

<style></style>
