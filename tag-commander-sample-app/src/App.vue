<template>
  <div id="app">
    <nav class="navbar tag-50">
      <ul>
        <li class="brand"><a><router-link to ="/home"><img src="./assets/Tag-Commander.png"/></router-link></a></li>
        <li><a><router-link to ="/shop">E-commerce page</router-link></a></li>
        <li><a><router-link to ="/dashboard">Simple page</router-link></a></li>
      </ul>
    </nav>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style lang="scss">
  @import "./styles.scss";
</style>
