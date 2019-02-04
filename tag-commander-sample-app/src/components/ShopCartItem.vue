<template>
  <div>
    <ul :items="items">
      <li v-for="(item, index) in items" :key="index">
        <h5>{{ item.name }}</h5>
        <div class="cart-quantity">
          <div class="grouped cart-group">
            <button class="sm-button red-500" @click="removeCartQuantity(index,$event,item.name)">-</button>
            <span>{{ item.quantity }}</span>
            <button class="sm-button green-500" @click="addCartQuantity(index,$event,item.name)">+</button>
          </div>
          <div class="cart-item-price">{{ item.quantity * item.price }} {{ item.currency }}</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>

import { Item } from "@/components/ShopNameItem";
import TC_Wrapper from "../../../src";

let wrapper = TC_Wrapper.getInstance()

export default {
  name: "ShopCartItem",
  props: ["items"],
  data() {
        return {
            index: ''
        }
    },
  methods: {
    removeFromCart(index) {
      this.items.splice(index, 1);
    },
    removeCartQuantity(index,event,data) {
      if (this.items[index].quantity === 1) {
        this.removeFromCart(index);
        wrapper.captureEvent('remove_from_cart', event.target, data)
      } else {
        this.items[index].quantity -= 1;
        wrapper.captureEvent('remove_from_cart', event.target, data)
      }
    },
    addCartQuantity(index,event,data) {
      this.items[index].quantity += 1;
      wrapper.captureEvent('add_to_cart', event.target, data)
    },
    resetCart(items) {
      this.items = [];
      this.buyMsg = true;
    }
  }
}

</script>

<style lang="scss" >
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
</style>