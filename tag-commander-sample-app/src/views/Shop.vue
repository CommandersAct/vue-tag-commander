<template>
  <section class="shop">
    <div class="msg-card-displayed" v-if="buyMsg">Thanks you for your purchase</div>
    <h1 class="main-eshop-title">E-commerce page</h1>
    <div class="article-container">
      <div class="left-container">
        <div class="item-name">
          <shop-name-item :product="product"/>
        </div>
        <div class="image-container">
          <img src="@/assets/Tag-Commander.png">
        </div>

        <div class="product-information">
          <h5>Product Information</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>

        <div>
          <h5>Quantity</h5>
          <div class="quantity-handler-container">
            <shop-item :product="product" :items="items"/>
          </div>
        </div>
      </div>

      <div class="right-container">
        <TcVars env_language="fr" env_template="super_shop"/>
        <div class="cart tag-50">
          <h3>Cart</h3>
          <shop-cart-item :items="items"/>
          <div class="total-price">
            <span>Total:</span>
            <shop-grand-total :items="items" :product="product"/>
            <shop-checkout :items="items" @clicked="resetCart(items)"/>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import TC_Wrapper from "vue-tag-commander";
import TcVars from "@/components/TcVars.vue";

const wrapper = TC_Wrapper.getInstance();

import ShopNameItem from "@/components/ShopNameItem.vue";
import ShopItem from "@/components/ShopItem.vue";
import ShopCartItem from "@/components/ShopCartItem.vue";
import ShopGrandTotal from "@/components/ShopGrandTotal.vue";
import ShopCheckout from "@/components/ShopCheckout.vue";

export default {
  name: "Shop",
  data() {
    return {
      product: {
        id: 1,
        name: "TagCommander",
        quantity: 0,
        price: 20,
        currency: "€"
      },
      items: [
        {
          id: 2,
          name: "TagCommanderBis",
          quantity: 1,
          price: 90,
          currency: "€"
        },
        {
          id: 3,
          name: "TagCommanderTer",
          quantity: 3,
          price: 40,
          currency: "€"
        }
      ],
      buyMsg: false
    };
  },
  mounted() {
    wrapper.trackPageLoad({tcReloadOnly: [
        { ids: '4056', idc: '12' },
        { ids: '4056', idc: '11', options: ["datastorage", "deduplication"] }
      ]})
    // wrapper.reloadAllContainers({
    // exclusions: [
    //   "datastorage",
    //   "deduplication",
    //   "internalvars",
    //   "privacy"
    //   ]
    // })
  },
  methods: {
    resetCart(items) {
      this.items = [];
      this.buyMsg = true;
    }
  },
  components: {
    ShopNameItem,
    ShopItem,
    ShopCartItem,
    ShopGrandTotal,
    ShopCheckout,
    TcVars
  }
};
</script>

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
    box-shadow: 0px 5px 15px rgba($color: #555555, $alpha: 0.5),
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
