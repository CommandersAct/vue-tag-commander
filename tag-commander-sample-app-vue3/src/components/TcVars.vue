<script setup>
import { onMounted } from 'vue'
import TC_Wrapper from 'vue-tag-commander'

const wrapper = TC_Wrapper.getInstance()

const props = defineProps({
  env_language: {
    type: String,
    default: 'fr'
  },
  env_template: {
    type: String,
    default: 'super_shop'
  }
})

onMounted(() => {
  wrapper.setTcVars(props)
})
</script>

<template/>
