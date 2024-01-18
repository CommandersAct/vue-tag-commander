<script setup>
import { ref, onMounted } from 'vue'
import TC_Wrapper from 'vue-tag-commander'
import ShopItem from '@/components/shop/ShopItem.vue'
import ShopCartItems from '@/components/shop/ShopCartItems.vue'
import ShopCartTotal from '@/components/shop/ShopCartTotal.vue'
import ShopCartCheckout from '@/components/shop/ShopCartCheckout.vue'
import TcVars from '@/components/TcVars.vue'
import { Item } from '@/utils/models.js'

const wrapper = TC_Wrapper.getInstance()

const item = ref(new Item(1, 'Shop Item 1', 20, 0, '€'))

const cartItems = ref([
  new Item(2, 'Shop Item 2', 90, 1, '€'),
  new Item(3, 'Shop Item 3', 40, 3, '€')
])

const buyMsg = ref(false)

onMounted(() => {
  wrapper.trackPageLoad({
    tcReloadOnly: [
      { ids: '4056', idc: '12' },
      { ids: '4056', idc: '11', options: ['datastorage', 'deduplication'] }
    ]
  })
})

const resetCart = () => {
  cartItems.value = []
  buyMsg.value = true
}
</script>

<template>
  <section class="shop">
    <div class="msg-card-displayed" v-if="buyMsg">Thanks you for your purchase</div>
    <h1 class="main-eshop-title">E-commerce page</h1>
    <div class="article-container">
      <div class="left-container">
        <div class="item-name">
          <h2>{{ item.name }}</h2>
        </div>
        <div>
          <img src="@/assets/Tag-Commander.png" />
        </div>

        <div>
          <h5>Product Information</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </p>
        </div>

        <div>
          <h5>Quantity</h5>
          <div class="quantity-handler-container">
            <ShopItem :item="item" :cartItems="cartItems" />
          </div>
        </div>
      </div>

      <div class="right-container">
        <TcVars env_language="fr" env_template="super_shop" />
        <div class="cart tag-50">
          <h3>Cart</h3>
          <ShopCartItems :cartItems="cartItems" />
          <div class="total-price">
            <span>Total:</span>
            <ShopCartTotal :cartItems="cartItems" />
            <ShopCartCheckout :cartItems="cartItems" @clicked="resetCart()" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
/* Shop */
$tag-commander-purple: #ed2186;
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
    box-shadow:
      0px 5px 15px rgba($color: #555555, $alpha: 0.5),
      0px -5px 15px rgba($color: #555555, $alpha: 0.5);
    font-weight: 700;
  }
  div.article-container {
    display: inline-flex;
    .item-name {
      margin-bottom: 5px;
    }
    .left-container {
      padding: 20px;
      .quantity-handler-container {
        font-size: 22px;
        display: flex;
        line-height: 45px;
        margin-bottom: 20px;
      }
    }
    .right-container {
      padding: 20px;
      div.cart {
        width: 300px;
        border-radius: 5px;
        padding: 10px;
        background: #f1f2f3;
        h3 {
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
          }
        }
        .total-price {
          padding-top: 30px;
          font-size: 26px;
          font-weight: bold;
        }
      }
    }
  }
}
</style>
