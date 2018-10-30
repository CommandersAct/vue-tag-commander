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
/* main vars */

$nav-height: 80px;

/* Colors */
$red-500: #F44336;
$pink-500: #E91E63;
$purple-500: #9C27B0;
$deep-purple-500: #673AB7;
$indigo-500: #3F51B5;
$blue-500: #2196F3;
$light-blue-500: rgb(73, 188, 241);
$light-blue-100: #B3E5FC;
$cyan-500: #00BCD4;
$teal-500: #009688;
$green-500: #4CAF50;
$amber-500: #FFC107;
$amber-50: #FFF8E1;
$amber-100 : #FFECB3;
$orange-500: #FF9800;
$tag-commander-purple: #ed2186;

.red-500 {
    background-color: $red-500;
    color: #fff;
    a {
        color: #fff;
        text-decoration: none;
    }
    a:hover{
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
    a:hover{
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
    a:hover{
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
    a:hover{
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
    a:hover{
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
    a:hover{
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
    a:hover{
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
    a:hover{
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
    a:hover{
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
    a:hover{
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
    a:hover{
        border-bottom: #000 2px solid;
    }
}
.tag-50 {
    background-color: #fff;
    color: #506A85;
    a {
        color: #506A85;
        text-decoration: none;
    }
    a:hover{
        border-bottom: #EB0149 2px solid;
    }
}

/* main */

html > body {
    background-color: #f0f0f0;
    height: initial;
    margin: 0;
    padding: 0;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
main {
    width: 1024px;
    background-color: #fff;
    margin: 0 auto;
    padding: 20px;
    box-shadow: 0 0 10px 0 #555555;
    z-index: 0;
}
nav+main {
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
            a{
              //padding-top:10px;
              img{
                width:130px;
                margin-top: 10px;
              }
            }
        }
    }
}
pre {
    background-color: #282828;
    color: #fff;
    padding: 20px;
    box-shadow: 0 0 10px 0 #555555;
    border-left: $tag-commander-purple solid 20px;
    overflow-x: auto;

    code.comment {
        color: $teal-500;
    }
    code.keyword {
        color: $blue-500;
    }
    code.varible {
        color: $light-blue-100;
    }
    code.string {
        color: $orange-500;
    }
    code.method {
        color: $amber-500;
    }
    code.class {
        color: $light-blue-500;   
    }
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
.grouped {
    button.sm-button {
        border-radius: 0;
        width: 34px;
    }
    button.sm-button:first-child {
        border-radius: 5px 0 0 5px;
    }
    span {
        display: inline-block;
        height: 34px;
        width: 80px;
        text-align: center;
        margin: -7px;
    }
    button.sm-button:last-child {
        border-radius: 0 5px 5px 0;
    }
}

/* Shop */

.shop {

  h1.main-eshop-title {
    text-align: center;
    color: $tag-commander-purple;
  }
  div.msg-card-displayed {
    position: fixed;
    padding: 20px 0;
    margin: -20px 0 0 -20px;
    background-color: $tag-commander-purple;
    opacity: 0.9;
    color: #fff;
    text-align: center;
    width: 1064px;
    box-shadow: 0px 5px 15px rgba($color: #555555, $alpha: .7), 0px -5px 15px rgba($color: #555555, $alpha: .7);
    font-weight: 900;
  }
  div.article-container {
    display: inline-flex; 
    .item-name{
      margin-bottom: 5px;
    }
    .left-container {
        padding: 20px;
        .quantity-handler-container {
            font-size: 22px;
            display: flex;
            line-height: 45px;
            margin-bottom: 20px;
            .price {
                padding-left: 20px;
            }
            .cart-button {
                margin: 0 100px;
            }
        }
    }
    .right-container {
        padding: 20px;
        div.cart {
            width: 300px;
            border-radius: 5px;
            padding: 10px;
            background: #f1f2f3;
            h3{
              text-align: center;
              margin-top: 0px;
              margin-bottom: 0px;
            }
            ul {
                list-style: none;
                padding: 0 0px;
                li {
                    padding: 0;
                    h5 {
                        margin-bottom: 5px;
                    }
                    div.cart-quantity {
                        font-size: 22px;
                        padding: 5px 0;
                        display: flex;
                        line-height: 36px;
                        div.cart-group {
                            span {
                                width: 40px;
                            }
                        }
                        div.cart-item-price {
                            text-align: right;
                            width: 190px;
                        }
                    }
                }
            }
            .total-price {
                padding-top: 30px;
                font-size: 26px;
                font-weight: bold;
                .grand-total {
                    float: right;
                }
                .buy-button {
                    width: 100%;
                    margin-top: 20px;
                }
            }
        }
    }
  }
}

/* Dashboard */

.dashboard {
  section header h2{
    font-weight: 900;
    font-size: 38px;
    line-height: 110%;
    margin-bottom: 25px;
  }
  .row{
    display: flex;
    flex-direction: row;
    & > div{
      flex-grow: 1;
    }
  }
  .text-left {
      margin-top: 40px;
  }
  .illustration{
      margin-top: -45px;
  }
}
</style>
