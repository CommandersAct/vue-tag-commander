<template>
  <div class="grouped">
    <button class="sm-button red-500" @click="removeQuantity">-</button>
    <span>{{ item.quantity }}</span>
    <button class="sm-button green-500" @click="addQuantity">+</button>
    <span class="price"
      >{{ item.quantity * item.price }} {{ item.currency }}</span
    >
    <button class="button blue-500 cart-button" @click.capture="addToCart">
      Add to Cart
    </button>
  </div>
</template>

<script>
import { Item } from "@/views/Shop.vue";

export default {
  name: "ShopItem",
  props: ["item", "cartItems"],
  data() {
    return {
      i: "",
    };
  },
  methods: {
    removeQuantity() {
      if (this.item.quantity > 1) {
        this.item.quantity--;
      }
    },
    addQuantity() {
      this.item.quantity++;
    },
    addToCart() {
      let index = -1;
      this.cartItems.forEach((item, i) => {
        if (this.item.id === item.id) {
          index = i;
        }
      });
      if (index === -1) {
        let item = this.item;
        item["quantity"] = this.item.quantity;
        if (this.item.quantity >= 1)
          this.cartItems.push(
            new Item(
              this.item.id,
              this.item.name,
              this.item.price,
              this.item.quantity,
              this.item.currency
            )
          );
      } else {
        this.cartItems[index].quantity += this.item.quantity;
      }
      this.item.quantity = 0;
    },
  },
};
</script>

<style lang="scss">
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
  .price {
    padding-left: 20px;
  }
  .cart-button {
    margin: 0 100px;
  }
  button.sm-button:last-child {
    border-radius: 0 5px 5px 0;
  }
}
</style>
