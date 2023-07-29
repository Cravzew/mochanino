<template>
  <card :items="users"/>
</template>

<script>
import Card from "~/components/Card.vue";

export default {
  components: {Card},
  mounted() {
    this.$store.dispatch('fetchUsers')
    this.$router.replace({query: {page: 1}});
  },
  computed: {
    users() {
      return this.$store.state.users
    }
  }
}
</script>

<style scoped>
</style>