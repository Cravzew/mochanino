<template>
  <main>
    <ul class="grid">
      <li class="hentry" v-for="item of visibleItems" :key="item.id">
        <header class="entry-header">
          <div class="entry-thumbnail">
            <nuxt-link :to="`/posts/${item.id}`">
              <img
                  :src="item.image"
                  @error="handleError"
                  v-if="!imageError"
                  class="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="p1">
              <img
                  src="assets/images/fallback.png"
                  v-else
                  class="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="p1">
            </nuxt-link>
          </div>
          <h2 class="entry-title">
            <nuxt-link :to="`/posts/${item.id}`" rel="bookmark">{{ item.title }}</nuxt-link>
          </h2>
          <nuxt-link class="portfoliotype" :to="`/posts/${item.id}`">{{ item.description }}</nuxt-link>
        </header>
      </li>
    </ul>
    <nav class="pagination">
      <button class="page-numbers"
              @click="previousPage" v-if="currentPage !== 1">{{ currentPage - 1 }}
      </button>
      <button class="page-numbers current">{{ currentPage }}</button>
      <button class="page-numbers"
              @click="nextPage" v-if="currentPage !== totalPages">{{ currentPage + 1 }}
      </button>
    </nav>
  </main>
</template>

<script>
export default {
  props: {
    items: {
      type: Array
    }
  },
  data() {
    return {
      itemsPerPage: 6,
      imageError: false,
    };
  },
  computed: {
    currentPage() {
      return parseInt(this.$route.query.page) || 1;
    },
    totalPages() {
      return Math.ceil(this.items.length / this.itemsPerPage);
    },
    visibleItems() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.items.slice(startIndex, endIndex);
    },
  },
  methods: {
    previousPage() {
      if (this.currentPage > 1) {
        this.updateRoute(this.currentPage - 1);
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.updateRoute(this.currentPage + 1);
      }
    },
    updateRoute(page) {
      this.$router.replace({query: {page: page}});
    },
    handleError() {
      this.imageError = true;
    },
  },
}
</script>

<style scoped>

.hentry {
  max-width: 300px;
}

.grid {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 9px;
}
</style>