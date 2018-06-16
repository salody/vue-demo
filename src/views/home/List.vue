<template>
  <div class="list">
    <div  v-for="item in hits" class="list-row" :key="item.objectID">
      <a :href="item.url">{{item.title}}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'List',
  props: ['hits', 'page']
}
</script>

<style scoped>

  .list {
    margin: 20px 0;
  }

  .list-row {
    display: flex;
    line-height: 24px;
    white-space: nowrap;
    margin: 10px 0;
    padding: 10px;
    background: #ffffff;
    border: 1px solid #e3e3e3;
  }
</style>
