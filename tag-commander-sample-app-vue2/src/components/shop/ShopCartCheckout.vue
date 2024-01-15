<template>
  <button
    class="button green-500 buy-button"
    @click="checkout(cartItems, $event.target)"
  >
    Buy
  </button>
</template>

<script>
import TC_Wrapper from "vue-tag-commander";

let wrapper = TC_Wrapper.getInstance();

export default {
  name: "ShopCartCheckout",
  props: ["cartItems"],
  methods: {
    checkout(cartItems, event) {
      this.$emit("clicked");
      wrapper.captureEvent("cart_checkout", event, cartItems);
    },
  },
};
</script>

<style lang="scss" scoped>
.buy-button {
  width: 100%;
  margin-top: 20px;
}
</style>
