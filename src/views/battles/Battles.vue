<template>
  <div>
    <battle-nav></battle-nav>
    <router-view></router-view>
  </div>
</template>

<script>
import BattleNav from './BattleNav'

export default {
  name: 'Battles',
  components: { BattleNav }
}
</script>
