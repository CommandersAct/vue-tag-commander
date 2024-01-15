<script setup>
import TC_Wrapper from 'vue-tag-commander'
import { Marked } from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/stackoverflow-dark.css'
import { markedHighlight } from 'marked-highlight'
import { computed, onMounted, ref } from 'vue'
import Readme from '../../../README.md?raw'

const wrapper = TC_Wrapper.getInstance()
const markdown = ref(Readme)

const markdownToHtml = computed(() => {
  const marked = new Marked(
    markedHighlight({
      langPrefix: 'hljs language-',
      highlight(code, lang) {
        const language = hljs.getLanguage(lang) ? lang : 'plaintext'
        return hljs.highlight(code, { language }).value
      }
    })
  )
  return marked.parse(markdown.value)
})

onMounted(() => {
  wrapper.trackPageLoad({ tcReloadOnly: [{ ids: '4056', idc: '12' }] })
})
</script>

<template>
  <div v-html="markdownToHtml"></div>
</template>
