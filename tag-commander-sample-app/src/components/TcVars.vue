<script>

import TC_Wrapper from "vue-tag-commander";

let wrapper = TC_Wrapper.getInstance();

export default {
  name : 'TcVars',
  props: {
    env_language: {
    type:String,
    default:'fr'
    },
    env_template: {
    type:String,
    default:"super_shop"
    }
  },
  mounted() {
    wrapper.setTcVars(this.$props);
  },
  render() {
    return null;
  }
}
</script>
