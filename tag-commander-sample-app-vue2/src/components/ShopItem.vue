<template>
  <div class="grouped">
    <button class="sm-button red-500" @click="removeQuantity">-</button>
    <span>{{ product.quantity }}</span>
    <button class="sm-button green-500" @click="addQuantity">+</button>
    <span class="price"
      >{{ product.quantity * product.price }} {{ product.currency }}</span
    >
    <button class="button blue-500 cart-button" @click.capture="addToCart">
      Add to Cart
    </button>
  </div>
</template>

<script>
import { Item } from "@/components/ShopNameItem.vue";

export default {
  name: "ShopItem",
  props: ["product", "items"],
  data() {
    return {
      i: "",
    };
  },
  methods: {
    removeQuantity() {
      if (this.product.quantity > 1) {
        this.product.quantity--;
      }
    },
    addQuantity() {
      this.product.quantity++;
    },
    addToCart() {
      let index = -1;
      this.items.forEach((item, i) => {
        if (this.product.id === item.id) {
          index = i;
        }
      });
      if (index === -1) {
        let item = this.product;
        item["quantity"] = this.product.quantity;
        if (this.product.quantity >= 1)
          this.items.push(
            new Item(
              this.product.id,
              this.product.name,
              this.product.price,
              this.product.quantity,
              this.product.currency
            )
          );
      } else {
        this.items[index].quantity += this.product.quantity;
      }
      this.product.quantity = 0;
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
