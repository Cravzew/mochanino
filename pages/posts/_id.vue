<template>
  <div id="content" class="site-content">
    <div id="primary" class="content-area column two-thirds single-portfolio">
      <main id="main" class="site-main">
        <article class="portfolio hentry">
          <header class="entry-header">
            <div class="entry-thumbnail">
              <img width="800" height="533" v-if="!imageError" @error="handleError" :src="objPage.image">
              <img width="800" height="533" v-else src="assets/images/fallback.png">
            </div>
            <h1 class="entry-title">{{ objPage.title }}</h1>
          </header>
          <div class="entry-content">
            <p>
              {{ objPage.description }}
            </p>
          </div>
        </article>
        <nav class="navigation post-navigation" role="navigation">
          <h1 class="screen-reader-text">Post navigation</h1>
          <div class="nav-links">
            <div class="nav-previous">
              <nuxt-link v-if="Number($route.params.id) !== 1" :to="`/posts/${Number(objPage.id) - 1}`"><span
                  class="meta-nav">←</span>{{ users[objPage.id - 2].title }}
              </nuxt-link>
            </div>
            <div class="nav-next">
              <nuxt-link v-if="Number($route.params.id) !== users.length" :to="`/posts/${Number(objPage.id) + 1}`">
                {{ users[objPage.id].title }} <span
                  class="meta-nav">→</span></nuxt-link>
            </div>
          </div>
        </nav>
      </main>
    </div>
    <div id="secondary" class="column third">
      <div class="widget-area">
        <aside class="widget">
          <h4 class="widget-title">Request similar project</h4>
          <form class="wpcf7" method="post" action="#" id="contactform">
            <div class="form">
              <p>
                <input type="text" name="name" placeholder="Name *">
              </p>
              <p>
                <input type="text" name="email" placeholder="E-mail Address *">
              </p>
              <p>
                <textarea name="comment" rows="3" placeholder="Message *"></textarea>
              </p>
              <input type="submit" id="submit" class="clearfix btn" value="Send">
            </div>
          </form>
          <div class="done">Your message has been sent. Thank you!</div>
        </aside>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imageError: false,
    }
  },
  mounted() {
    this.$store.dispatch('fetchUsers')
  },
  computed: {
    objPage() {
      return this.$store.state.users.find((item) => item.id === this.$route.params.id)
    },
    users() {
      return this.$store.state.users
    }
  },
  methods: {
    handleError() {
      this.imageError = true;
    },
  }
}
</script>

<style scoped>

</style>