<template>
  <span class="grand-total">{{ cartGrandTotal }} {{ currency }}</span>
</template>

<script>
export default {
  name: "ShopCartTotal",
  props: ["cartItems"],
  data() {
    return {
      currency: "€",
    };
  },
  computed: {
    cartGrandTotal() {
      let total = 0;
      this.cartItems.forEach((item) => {
        total += item.price * item.quantity;
      });
      return total;
    },
  },
};
</script>

<style lang="scss" scoped>
.grand-total {
  float: right;
}
</style>
