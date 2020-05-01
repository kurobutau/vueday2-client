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
  account: [{
    accountId: 0,
    userId: 0,
    openDateTime: '',
    loadAmount: 0,
    loadBalance: 0,
    isClose: false
  }],
  payment: [{
    paymentId: 0,
    accountId: 0,
    paymentDate: '',
    amount: 0,
  }]
})

export const getters ={

  getUserLogin : (state)=> (username,password)=> {
    return state.users.find((u)=>u.username===username && u.password===password)
  },
  getUserById : (state)=> (id)=>{
    return state.users.find((u)=>u.userId===id)
  },
  getAccount : (state)=> (userid)=>{
    return state.account.find((u)=>u.userId===userid)
  },
  getPayments :(state)=>(accountid)=>{
    return state.account.find((u)=>u.userId===userid)
  }
}

export const mutations = {
    addUser(state,newUser){
        state.users = [...state.users,newUser]
    },
    addAccount(state,newAccount)
    {
        state.account = [...state.account,newAccount]
    },
    addPayment(state,newPayment)
    {
        state.payment = [...state.payment,newPayment]
    }
}
