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
    
  ],
  payments: [
    
  ]
})

export const getters = {

  getUserLogin: (state) => (username, password) => {
    return state.users.find((u) => u.username === username && u.password === password)
  },
  getUserById: (state) => (id) => {
    return state.users.find((u) => u.userId == id)
  },
  getAccount: (state) => (uid) => {
    //return state.accounts.length
    return state.accounts.find((u) => u.userId == uid)
  },
  getPayments: (state) => (aid) => {
    return state.payments.find((u) => u.accountId == aid)
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
