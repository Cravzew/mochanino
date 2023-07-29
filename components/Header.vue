<template>
  <header id="masthead" class="site-header">
    <div class="site-branding">
      <h1 class="site-title">
        <nuxt-link to="/" rel="home">Moschino</nuxt-link>
      </h1>
      <h2 class="site-description">Minimalist Portfolio HTML Template</h2>
    </div>
    <nav id="site-navigation" class="main-navigation">
      <button class="menu-toggle">Menu</button>
      <a class="skip-link screen-reader-text" href="#content">Skip to content</a>
      <div class="menu-menu-1-container">
        <ul id="menu-menu-1" class="menu nav-menu">
          <li>
            <nuxt-link to="/">Home</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">About</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">Shop</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">Blog</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">Elements</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">Pages</nuxt-link>
            <ul class="sub-menu">
              <li><a href="#">Portfolio Item</a></li>
              <li><a href="#">Blog Article</a></li>
              <li><a href="#">Shop Item</a></li>
              <li><a href="#">Portfolio Category</a></li>
            </ul>
          </li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
export default {}
</script>

<style>

</style>