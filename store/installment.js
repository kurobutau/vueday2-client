export const state = () => ({
  users: [{
      userId: 1,
      username: 'admin',
      password: 'admin',
      type: 'admin'
    },
    {
      userId: 2,
      username: 'user1',
      password: 'user1',
      type: 'staff'
    }
  ],
  accounts: [
    {
      accountId: 1,
      userId: 1,
      openDateTime: "2020-04-01",
      loadAmount: 300000,
      loadBalance: 300000,
      isClose: false
    }
  ],
  payments: [
    {
      paymentId: 1,
      accountId: 1,
      paymentDate: "2020-04-01",
      amount: 2000
    },{
      paymentId: 2,
      accountId: 1,
      paymentDate: "2020-04-03",
      amount: 2000
    }
  ]
})

export const getters = {

  getUserLogin: (state) => (username, password) => {
    return state.users.find((u) => u.username === username && u.password === password)
  },
  getUserById: (state) => (id) => {
    return state.users.find((u) => u.userId === id)
  },
  getAccount: (state) => (uid) => {
    //return state.accounts.length
    return state.accounts.find((u) => u.userId === uid)
  },
  getPayments: (state) => (aid) => {
    return state.payments.find((u) => u.accountId === aid)
  }
}

export const mutations = {
  addUser(state, newUser) {
    state.users = [...state.users, newUser]
  },
  addAccount(state, newAccount) {
    state.accounts = [...state.accounts, newAccount]
  },
  addPayment(state, newPayment) {
    state.payments = [...state.payments, newPayment]
  }
}
