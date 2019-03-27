<template>
  <div>
    <h1>vue-tag-commander Sample application</h1>
    <h2>The loading and configuration</h2>
    <h3>The main application configuration</h3>
    <pre>
        <code class="keyword">import</code> <code class="varible">TC_Wrapper</code> <code class="keyword">from</code> <code class="string">'vue-tag-commander'</code>;<br>
        <code class="keyword">const</code> <code class="varible">wrapper</code> = <code class="varible">TC_Wrapper</code>.<code class="method">getInstance</code>();<br>
        <br>
        <code
  class="comment"
>{'// you need to provide URIS to load containers script. You can add as many container as you like'}</code><br>
        <code class="comment">{'// addContainer (id, uri, node)'}</code><br>
        <code class="varible">wrapper</code>.<code class="method">addContainer</code>(<code class="string">'a_name_for_the_container_id'</code>, <code class="string">'/the/path/to/tag-commander-container.js'</code>, <code class="string">'head'</code>);<br>
        <br>
        <code class="comment">{'// but you can also remove them'}</code><br>
        <code class="varible">wrapper</code>.<code class="method">removeContainer</code>(<code class="string">'my_tag_container_id'</code>);<br>
        <br>
        <code class="comment">{'// you can set debug by setting this to true'}</code><br>
        <code class="varible">wrapper</code>.<code class="method">setDebug</code>(<code class="keyword">true</code>);<br>
        <br>
        <code
  class="comment"
>{'// you can track the url of your app by setting this, it will reload the containers on each page change'}</code><br>
        <code class="varible">wrapper</code>.<code class="method">trackRoutes</code>(<code class="keyword">true</code>);<br>
      </pre>

    <p>In the provider's method 'addContainer', The "node" parameter can either be set to 'body' or 'head', by default the container will be placed in the head.</p>

    <h3>The routes configuration</h3>
    <p>
      If you have set wrapper.trackRoutes(true); in your application configuration,
      you can configure witch container will be reloaded on witch route, else what you need to do it in your controller.
      the containers will be reloaded after the controller has been executed,
      but if you change or set a varible in your controller methode you will need to call wrapper.reloadAllContainers(options)
      to propagate the changes to your containers.
    </p>

    <p>If you don't set the TagCommanderProvider.trackRoutes(true); (or you set it to false) you will have to reload your container manually</p>
    <pre>
        <code class="comment">{'// reload a specifique container'}</code><br>
        <code class="varible">wrapper</code>.<code class="method">reloadContainer</code>(<code class="varible">ids</code>, <code class="varible">idc</code>, <code class="varible">options</code>);<br>
        <br>
        <code class="comment">{'// or you can reload all the containers'}</code><br>
        <code class="varible">wrapper</code>.<code class="method">reloadAllContainers</code>(<code class="varible">options</code>);<br>
      </pre>

    <h2>How to set your Vars</h2>
    <h3>In a component</h3>
    <p>The setVar call allows to set your tc_vars.</p>
    <pre>
      <code class="varible">wrapper</code>.<code class="method">setTcVars</code>({'{'}<br>
        &nbsp;&nbsp;&nbsp;&nbsp;<code class="varible">env_template</code> : <code class="string">"shop"</code>,<br>
        &nbsp;&nbsp;&nbsp;&nbsp;<code class="varible">env_work</code> : <code class="string">"dev"</code>,<br>
        &nbsp;&nbsp;&nbsp;&nbsp;<code class="varible">env_language</code> : <code class="string">"en"</code>,<br>
        &nbsp;&nbsp;&nbsp;&nbsp;<code class="varible">user_id</code> : <code class="string">"124"</code>,<br>
        &nbsp;&nbsp;&nbsp;&nbsp;<code class="varible">user_logged</code> : <code class="string">"true"</code>,<br>
        &nbsp;&nbsp;&nbsp;&nbsp;<code class="varible">user_age</code>: <code class="string">"32"</code>,<br>
        &nbsp;&nbsp;&nbsp;&nbsp;<code class="varible">user_newcustomer</code> : <code class="string">"false"</code><br>
      <code>{'}'});</code><br>
      <br>
      <code class="comment">{'// you can also override some varible'}</code><br>
      <code class="keyword">if</code> (<code class="varible">isNewUser</code>) {'{'}<br>
      &nbsp;&nbsp;&nbsp;&nbsp;<code class="varible">wrapper</code>.<code class="method">setTcVars</code>({'{'}<br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code class="varible">user_newcustomer</code> : <code class="string">"true"</code><br>
      <code>{'}'});</code><br>
      <br>
      <code class="comment">{'// or set/update them individualy'}</code><br>
      <code class="varible">wrapper</code>.<code class="method">setTcVar</code>(<code class="string">'env_template'</code>, <code class="string">'super_shop'</code>);<br>
      <br>
      <code class="comment">{'// you can also remove a var'}</code><br>
      <code class="varible">wrapper</code>.<code class="method">removeTcVars</code>(<code class="string">'env_template'</code>);<br>
      </pre>

    <h3>In render function(JSX)</h3>
    <p>You can set your tc_vars with the TcVars Component</p>
    <pre>
        &lt;<code class="keyword">TcVars</code> <code class="method">env_language</code>=<code class="string">"fr"</code> <code class="method">env_template</code>=<code class="string">"super_shop"</code> /&gt;
      </pre>
  </div>
</template>


<script>
import TC_Wrapper from "vue-tag-commander";

const wrapper = TC_Wrapper.getInstance();
export default {
  name: "index",
  mounted() {
    var idc = "12";
    var ids = "4056";
    var options = {
      exclusions: ["datastorage", "deduplication", "internalvars", "privacy"]
    };
    wrapper.reloadContainer(ids, idc, options);
    // or you can reload all the containers
    wrapper.reloadAllContainers(options);
  }
};
</script>

<style lang="scss">
/* Index */
.index {
  h1 {
    text-align: center;
    font-size: 2em;
    margin-bottom: 40px;
  }
}
</style>
