<template>
  <div class="wrappeer">
    <!--    <header></header>-->
    <header class="navbar">
      <div class="container">
        <div class="navbar-content">
          <div class="logo">
            <router-link to="/">Notify</router-link>
          </div>
          <ul class="navbar-list">
            <li class="navbar-item" v-for="link in links" :key="link.title">
              <router-link :to="link.url" class="navbar-link" :title="link.title">{{ link.title }}</router-link>
            </li>
          </ul>
        </div>
      </div>
    </header>

    <router-view/>
    <!--  <footer></footer>-->
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
  data() {
    return {
      links: [
        {
          title: "Home",
          url: "/"
        },
        {
          title: "Notify",
          url: "/notify"
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.navbar-link {
  &.router-link-exact-active {
    color: #5247e7;
  }
}
</style>
