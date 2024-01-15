<template>
  <div>
    <div v-html="markdownToHtml"></div>
  </div>
</template>

<script>
import TC_Wrapper from "vue-tag-commander";
import { Marked } from "marked";
import hljs from "highlight.js";
import "highlight.js/styles/stackoverflow-dark.css";
import { markedHighlight } from "marked-highlight";
import Readme from "../../../README.md?raw";

const wrapper = TC_Wrapper.getInstance();
const marked = new Marked(
  markedHighlight({
    langPrefix: "hljs language-",
    highlight(code, lang) {
      const language = hljs.getLanguage(lang) ? lang : "plaintext";
      return hljs.highlight(code, { language }).value;
    },
  })
);
export default {
  name: "Home",
  mounted() {
    wrapper.trackPageLoad({ tcReloadOnly: [{ ids: "4056", idc: "12" }] });
  },
  data() {
    return {
      markdown: Readme,
    };
  },
  computed: {
    markdownToHtml() {
      return marked.parse(this.markdown);
    },
  },
};
</script>
