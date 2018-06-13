<template>
  <div>
    <nav class="navbar navbar-default">
      <div class="navbar-header">
        <router-link to="/battles" class="navbar-brand"> The Ultimate Startup Battle Ground</router-link>
      </div>
      <ul class="nav navbar-nav navbar-right">
        <li>
          <button class="btn btn-danger log" @click="handleLogout()">Log out</button>
          <button class="btn btn-info log" @click="handleLogin()">Log In</button>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import {isLoggedIn, login, logout} from '@/utils/auth'

export default {
  name: 'BattlesNav',
  methods: {
    handleLogin () {
      login()
    },
    handleLogout () {
      logout()
    },
    isLoggedIn () {
      return isLoggedIn()
    }
  }
}
</script>

<style scoped>
  .navbar-right { margin-right: 0 !important}

  .log {
    margin: 8px 10px 0 0;
  }
</style>
