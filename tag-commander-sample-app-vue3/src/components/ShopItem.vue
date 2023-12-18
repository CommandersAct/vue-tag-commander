<script setup>
import { Item } from '@/utils/models.js'

const props = defineProps({
  product: {
    type: Item,
    required: true
  },
  items: {
    type: Array,
    required: true
  }
})

const removeQuantity = () => {
  if (props.product.quantity > 1) {
    props.product.quantity--
  }
}

const addQuantity = () => {
  props.product.quantity++
}

const addToCart = () => {
  let index = props.items.findIndex((item) => item.id === props.product.id)

  if (index === -1) {
    if (props.product.quantity >= 1) {
      const newItem = new Item(
        props.product.id,
        props.product.name,
        props.product.price,
        props.product.quantity,
        props.product.currency
      )
      props.items.push(newItem)
    }
  } else {
    props.items[index].quantity += props.product.quantity
  }
  props.product.quantity = 0
}
</script>

<template>
  <div class="grouped">
    <button class="sm-button red-500" @click="removeQuantity">-</button>
    <span>{{ product.quantity }}</span>
    <button class="sm-button green-500" @click="addQuantity">+</button>
    <span class="price">{{ product.quantity * product.price }} {{ product.currency }}</span>
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
