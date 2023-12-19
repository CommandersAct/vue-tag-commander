<script setup>
import TC_Wrapper from 'vue-tag-commander'

const wrapper = TC_Wrapper.getInstance()

const props = defineProps({
  cartItems: {
    type: Array,
    required: true
  }
})

const emit = defineEmits(['clicked'])

const checkout = (cartItems, event) => {
  emit('clicked')
  wrapper.captureEvent('cart_checkout', event, cartItems)
}
</script>

<template>
  <button class="button green-500 buy-button" @click="checkout(cartItems, $event.target)">Buy</button>
</template>

<style lang="scss" scoped>
.buy-button {
  width: 100%;
  margin-top: 20px;
}
</style>
