<script setup>
import { Item } from '@/utils/models.js'

const props = defineProps({
  item: {
    type: Item,
    required: true
  },
  cartItems: {
    type: Array,
    required: true
  }
})

const removeQuantity = () => {
  if (props.item.quantity > 1) {
    props.item.quantity--
  }
}

const addQuantity = () => {
  props.item.quantity++
}

const addToCart = () => {
  let index = props.cartItems.findIndex((item) => item.id === props.item.id)

  if (index === -1) {
    if (props.item.quantity >= 1) {
      const newItem = new Item(
        props.item.id,
        props.item.name,
        props.item.price,
        props.item.quantity,
        props.item.currency
      )
      props.cartItems.push(newItem)
    }
  } else {
    props.cartItems[index].quantity += props.item.quantity
  }
  props.item.quantity = 0
}
</script>

<template>
  <div class="grouped">
    <button class="sm-button red-500" @click="removeQuantity">-</button>
    <span>{{ item.quantity }}</span>
    <button class="sm-button green-500" @click="addQuantity">+</button>
    <span class="price">{{ item.quantity * item.price }} {{ item.currency }}</span>
    <button class="button blue-500 cart-button" @click.capture="addToCart">Add to Cart</button>
  </div>
</template>

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
