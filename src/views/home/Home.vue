<template>
  <div class="page">
    <div class="interactions">
      <form type="submit" @submit="onInitialSearch">
        <input type="text" ref="input" />
        <button type="submit">Search</button>
      </form>
    </div>
    <list
      :hits="hits"
      :page="page"
    />
  </div>
</template>

<script>
import List from './List'
import {getHackerNews} from '@/api/hack-news'

export default {
  name: 'Home',
  components: {List},
  data () {
    return {
      hits: [],
      page: null
    }
  },
  methods: {
    onInitialSearch (e) {
      e.preventDefault()
      const { value } = this.$refs.input
      if (value === '') {
        return
      }
      this.fetchStories(value, 0)
    },

    fetchStories (value, page) {
      getHackerNews(value, page)
        .then(result => this.onSetResult(result, page))
    },

    onSetResult (result, page) {
      return page === 0
        ? this.applySetResult(result)
        : this.applyUpdateResult(result)
    },

    applySetResult (result) {
      this.hits = result.hits
      this.page = result.page
    },

    applyUpdateResult (result) {
      this.hits.push(result.hits)
      this.page = result.page
    }

  }
}
</script>

<style scoped>
  .page {
    margin: 20px;
  }

  .interactions {
    text-align: center;
  }

</style>
