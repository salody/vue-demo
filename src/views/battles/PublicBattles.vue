<template>
  <div>
    <h3 class="text-center">Daily Startup Battles</h3>
    <hr/>
    <spinner :loading="isLoading"></spinner>
    <div class="col-sm-4" v-for="battle in publicBattles" :key="battle.id">
      <div class="panel panel-default">
        <div class="panel-heading">
          <h3 class="panel-title"> {{ battle.name }} </h3>
        </div>
        <div class="panel-body">
          <p><span class="badge alert-info"> Sponsor: </span> {{ battle.sponsor }} </p>
          <p><span class="badge alert-danger"> SeedFund: </span><strong> ${{ battle.seedFund }} </strong></p>
        </div>
      </div>
    </div>

    <div class="col-sm-12" v-show="!isLoading">
      <div class="jumbotron text-center">
        <h2>View Private Startup Battles</h2>
        <router-link class="btn btn-lg btn-success" to="/battles/private">Private Startup Battles</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { isLoggedIn } from '@/utils/auth'
import { getPublicStartupBattles } from '@/api/battles-api'
import Spinner from '@/components/Spinner'
export default {
  name: 'PublicBattles',
  components: {Spinner},
  data () {
    return {
      publicBattles: [],
      isLoading: false
    }
  },
  methods: {
    isLoggedIn () {
      return isLoggedIn()
    },
    getPublicStartupBattles () {
      this.isLoading = true
      getPublicStartupBattles().then((battles) => {
        this.publicBattles = battles
        this.isLoading = false
      })
    }
  },
  mounted () {
    this.getPublicStartupBattles()
  }
}
</script>

<style scoped>

</style>
