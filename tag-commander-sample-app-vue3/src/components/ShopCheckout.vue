<script setup>
import { defineProps, defineEmits } from 'vue'
import TC_Wrapper from 'vue-tag-commander'

const wrapper = TC_Wrapper.getInstance()

const props = defineProps({
  items: {
    type: Array,
    required: true
  }
})

const emit = defineEmits(['clicked'])

const checkout = (items, event) => {
  emit('clicked')
  wrapper.captureEvent('cart_checkout', event, items)
}
</script>

<template>
  <button class="button green-500 buy-button" @click="checkout(items, $event.target)">Buy</button>
</template>

<style lang="scss" scoped>
.buy-button {
  width: 100%;
  margin-top: 20px;
}
</style>
