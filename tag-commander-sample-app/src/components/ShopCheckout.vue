<template>
  <button class="button green-500 buy-button" @click="checkout(items,$event.target)">Buy</button>
</template>


<script>

import TC_Wrapper from "../../../src";

let wrapper = TC_Wrapper.getInstance();

export default {
  name : "ShopCheckout",
    props: ['items'],
    methods: {
        checkout(items,event) {
            this.$emit('clicked');
            wrapper.captureEvent('cart_checkout', event, items);
        }
    }
}


  wrapper
</script>


<style lang="scss" scoped>
.buy-button {
  width: 100%;
  margin-top: 20px;
}
</style>
