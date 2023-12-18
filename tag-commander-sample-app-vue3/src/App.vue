<script setup>
import { RouterLink, RouterView } from 'vue-router'
import TC_Wrapper from 'vue-tag-commander'
import { onMounted, ref } from 'vue'

const wrapper = TC_Wrapper.getInstance()
wrapper.setDebug(true)

const isReady = ref(false)
onMounted(async () => {
  await wrapper.addContainer('container_head', '/tag-commander-head.js', 'head')
  await wrapper.addContainer('container_body', '/tag-commander-body.js', 'body')
  isReady.value = true
})
</script>

<template>
  <div id="app">
    <nav class="navbar tag-50">
      <ul>
        <li class="brand">
          <RouterLink to="/"><img src="@/assets/Tag-Commander.png" /></RouterLink>
        </li>
        <li>
          <RouterLink to="/shop">E-commerce page</RouterLink>
        </li>
        <li>
          <RouterLink to="/dashboard">Simple page</RouterLink>
        </li>
      </ul>
    </nav>
    <main>
      <RouterView v-if="isReady" />
      <div class="container" v-else><h1>Loading...</h1></div>
    </main>
  </div>
</template>

<style lang="scss">
/* main vars */
$nav-height: 80px;
/* Colors */
$red-500: #f44336;
$pink-500: #e91e63;
$purple-500: #9c27b0;
$deep-purple-500: #673ab7;
$indigo-500: #3f51b5;
$blue-500: #2196f3;
$light-blue-500: rgb(73, 188, 241);
$light-blue-100: #b3e5fc;
$cyan-500: #00bcd4;
$teal-500: #009688;
$green-500: #4caf50;
$amber-500: #ffc107;
$amber-50: #fff8e1;
$amber-100: #ffecb3;
$orange-500: #ff9800;
$tag-commander-purple: #ed2186;
.red-500 {
  background-color: $red-500;
  color: #fff;
  a {
    color: #fff;
    text-decoration: none;
  }
  a:hover {
    border-bottom: #fff 2px solid;
  }
}
.pink-500 {
  background-color: $pink-500;
  color: #fff;
  a {
    color: #fff;
    text-decoration: none;
  }
  a:hover {
    border-bottom: #fff 2px solid;
  }
}
.purple-500 {
  background-color: $purple-500;
  color: #fff;
  a {
    color: #fff;
    text-decoration: none;
  }
  a:hover {
    border-bottom: #fff 2px solid;
  }
}
.deep-purple-500 {
  background-color: $deep-purple-500;
  color: #fff;
  a {
    color: #fff;
    text-decoration: none;
  }
  a:hover {
    border-bottom: #fff 2px solid;
  }
}
.indigo-500 {
  background-color: $indigo-500;
  color: #fff;
  a {
    color: #fff;
    text-decoration: none;
  }
  a:hover {
    border-bottom: #fff 2px solid;
  }
}
.blue-500 {
  background-color: $blue-500;
  color: #fff;
  a {
    color: #000;
    text-decoration: none;
  }
  a:hover {
    border-bottom: #000 2px solid;
  }
}
.light-blue-500 {
  background-color: $light-blue-500;
  color: #000;
  a {
    color: #000;
    text-decoration: none;
  }
  a:hover {
    border-bottom: #000 2px solid;
  }
}
.light-blue-100 {
  background-color: $light-blue-100;
  color: #000;
}
.cyan-500 {
  background-color: $cyan-500;
  color: #000;
  a {
    color: #000;
    text-decoration: none;
  }
  a:hover {
    border-bottom: #000 2px solid;
  }
}
.teal-500 {
  background-color: $teal-500;
  color: #fff;
  a {
    color: #fff;
    text-decoration: none;
  }
  a:hover {
    border-bottom: #fff 2px solid;
  }
}
.green-500 {
  background-color: $green-500;
  color: #fff;
  a {
    color: #fff;
    text-decoration: none;
  }
  a:hover {
    border-bottom: #fff 2px solid;
  }
}
.amber-50 {
  background-color: $amber-50;
  color: #000;
  a {
    color: #000;
    text-decoration: none;
  }
  a:hover {
    border-bottom: #000 2px solid;
  }
}
.tag-50 {
  background-color: #fff;
  color: #506a85;
  a {
    color: #506a85;
    text-decoration: none;
  }
  a:hover {
    border-bottom: #eb0149 2px solid;
  }
}
/* main */
html > body {
  background-color: #f0f0f0;
  height: initial;
  margin: 0;
  padding: 0;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #474747;
}
main {
  width: 1024px;
  background-color: #fff;
  margin: 0 auto;
  padding: 20px;
  box-shadow: 0 0 10px 0 #555555;
  z-index: 0;
}
nav + main {
  padding: calc(20px + #{$nav-height}) 20px 20px 20px;
}
div.to-be-changed {
  padding: 20px;
  background-color: $amber-50;
}
nav.navbar {
  height: $nav-height;
  padding: 0 0 0 30px;
  line-height: 80px;
  width: 100%;
  position: fixed;
  box-shadow: 0 0 10px 2px #555555;
  z-index: 10;
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: inline-flex;
    li {
      padding: 0 0 0 30px;
      font-size: 16px;
      a {
        display: block;
        height: 75px;
      }
      a:hover {
        border-bottom: 5px solid $tag-commander-purple;
      }
    }
    li.brand {
      font-weight: bold;
      padding: 0;
      font-size: 20px;
      a {
        img {
          width: 130px;
          margin-top: 10px;
        }
      }
    }
  }
}
pre {
  background-color: #1c1b1b;
  color: #fff;
  padding: 10px;
  box-shadow: 0 0 10px 0 #555555;
  border-left: $tag-commander-purple solid 20px;
  overflow-x: auto;
}
/* inputs */
button.button {
  padding: 10px 30px;
  border: none;
  border-radius: 5px;
  box-shadow: 2px 2px 10px 0px #555555;
  &:hover {
    filter: brightness(110%);
  }
  &:focus {
    outline: 0;
  }
  &:active {
    transform: translate(2px, 2px);
    box-shadow: 0 0 2px 0px #555555;
  }
}
button.sm-button {
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  box-shadow: 2px 2px 10px 0px #555555;
  &:hover {
    filter: brightness(110%);
  }
  &:focus {
    outline: 0;
  }
  &:active {
    transform: translate(2px, 2px);
    box-shadow: 0 0 2px 0px #555555;
  }
}
</style>
