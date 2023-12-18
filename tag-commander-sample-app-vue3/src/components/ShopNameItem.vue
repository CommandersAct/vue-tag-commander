<script setup>
import { defineProps } from 'vue'
import {Item} from "@/utils/models.js";

const props = defineProps({
  product: {
    type: Item,
    required: true
  }
})
</script>

<template>
  <div>
    <h2>{{ product.name }}</h2>
  </div>
</template>
