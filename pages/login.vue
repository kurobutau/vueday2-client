<template>
  <div class="container">
    <div class="notification is-centered">
      <div class="is-12 has-text-centered">
        <b-field><h1><strong>STAFF Login</strong></h1></b-field>
      </div>
      <div class="columns">
        <div class="column is-5 has-text-right">Username</div>
        <div class="column is-3 has-text-left">
          <b-input v-model="name"></b-input>
        </div>
      </div>
      <div class="columns">
        <div class="column is-5 has-text-right">Password</div>
        <div class="column is-3 has-text-left">
          <b-input v-model="name"></b-input>
        </div>
      </div>
      <div class="columns">
        <div class="column is-5 has-text-right"></div>
        <div class="column is-3 has-text-left">
          <b-button>Login</b-button>
            <b-button>Reset</b-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

    
};
</script>

<style></style>
