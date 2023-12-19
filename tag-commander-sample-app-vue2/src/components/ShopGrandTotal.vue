<template>
  <span class="grand-total">{{ cartGrandTotal }} {{ currency }}</span>
</template>

<script>
export default {
  name: "ShopGrandTotal",
  props: ["items"],
  data() {
    return {
      currency: "€",
    };
  },
  computed: {
    cartGrandTotal() {
      let total = 0;
      this.items.forEach((item) => {
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
