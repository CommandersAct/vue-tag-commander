<script setup>
import TC_Wrapper from 'vue-tag-commander'

const wrapper = TC_Wrapper.getInstance()

const props = defineProps({
  cartItems: {
    type: Array,
    required: true
  }
})

const removeCartQuantity = (index, event, data) => {
  if (props.cartItems[index].quantity === 1) {
    props.cartItems.splice(index, 1)
    wrapper.captureEvent('remove_from_cart', event.target, data)
  } else {
    props.cartItems[index].quantity -= 1
    wrapper.captureEvent('remove_from_cart', event.target, data)
  }
}

const addCartQuantity = (index, event, data) => {
  props.cartItems[index].quantity += 1
  wrapper.captureEvent('add_to_cart', event.target, data)
}
</script>

<template>
  <div>
    <ul>
      <li v-for="(item, index) in cartItems" :key="index">
        <h5>{{ item.name }}</h5>
        <div class="cart-quantity">
          <div class="grouped cart-group">
            <button class="sm-button red-500" @click="removeCartQuantity(index, $event, item.name)">
              -
            </button>
            <span>{{ item.quantity }}</span>
            <button class="sm-button green-500" @click="addCartQuantity(index, $event, item.name)">
              +
            </button>
          </div>
          <div class="cart-item-price">{{ item.quantity * item.price }} {{ item.currency }}</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
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
