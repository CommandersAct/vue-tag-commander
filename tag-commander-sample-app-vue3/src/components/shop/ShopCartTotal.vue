<script setup>
import { computed, ref } from 'vue'

const props = defineProps({
  cartItems: {
    type: Array,
    required: true
  }
})

const currency = ref('€')

const cartGrandTotal = computed(() => {
  let total = 0
  props.cartItems.forEach((item) => {
    total += item.price * item.quantity
  })
  return total
})
</script>

<template>
  <span class="grand-total">{{ cartGrandTotal }} {{ currency }}</span>
</template>

<style lang="scss" scoped>
.grand-total {
  float: right;
}
</style>
