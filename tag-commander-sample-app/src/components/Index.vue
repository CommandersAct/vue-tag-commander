<template>

  <section class="index">
    <h1>vue-tag-commander</h1>
    This service lets you integrate Tag Commander in your VueJs applications easily. Official website
    <h2>Features</h2>
    <ul>
      <li>automatic page tracking</li>
      <li>event catching</li>
      <li>multiple containers</li>
    </ul>
    <h2>Installation and Quick Start</h2>
    The quick start is designed to give you a simple, working example for the most common usage scenario. There are numerous other ways to configure and use this library as explained in the documentation.
    <h3>1- Installation:</h3>
    You can install the module from a package manager of your choice directly from the command line
    <h4># NPM</h4>
    <pre>
      npm i vue-tag-commander
    </pre>
    <p>
      Or alternatively, grab the dist/index.ts and include it in your project
    </p>
    <p>
      In your application, declare the vue-tag-commander module dependency. in your app module:
    </p>
    <h3>2- In your application, declare dependency injection:</h3>
    <pre>
      <code class="keyword">@NgModule</code>({{'{'}}
      ...
      <code class="method">imports</code>: [
      ...
      <code class="method">NgxTagCommanderModule</code>
      ],
      ..
      {{'}'}})
    </pre>
    <h3>3- add your Tag commander containers and start tracking:</h3>
    <pre>
      <code class="keyword">import</code> {{ '{' }} <code class="class">TagCommanderService</code> {{ '}' }} <code class="keyword">from</code> <code class="string">"tag-commander"</code>;
      ...
      <code class="keyword">export class</code> <code class="class">AppModule</code> {{ '{' }}
      <code class="keyword">constructor</code>(<code class="varible">tcService</code>: <code class="class">TagCommanderService</code>) {{ '{' }}
      ...
      <code class="varible">tcService</code>.<code class="method">addContainer</code>(<code class="string">"container_body"</code>, <code class="string">"/path/to/your/tag-commander.js"</code>, <code class="string">"body"</code>);
      <code class="varible">tcService</code>.<code class="method">addContainer</code>(<code class="string">"container_head"</code>, <code class="string">"/path/to/your/other/tag-commander.js"</code>, <code class="string">"head"</code>);
      ...
      {{ '}' }}
      {{ '}' }}
    </pre>
    <p>
      Congratulations! vue-tag-commander is ready
    </p>
    <h2>Declaring TagCommander in your Controller</h2>
    <pre>
      <code class="keyword">import</code> {{ '{' }} <code class="class">TagCommanderService</code> {{ '}' }} <code class="keyword">from</code> <code class="string">'./ngx-tag-commander/tag-commander.service/tag-commander.service'</code>;
      ...
      <code class="keyword">export class</code> <code class="class">MyComponent</code> {{ '{' }}
      <code class="keyword">constructor</code>(<code class="keyword">private</code> <code class="varible">tcService</code>: <code class="class">TagCommanderService</code>) {{ '{' }} {{ '}' }}
      }
    </pre>
    <h2>Set Vars</h2>
    <h3>In a controller</h3>
    <p>
      The setVar call allows to set your tc_vars.
    </p>
    <pre>
      <code class="class">TagCommanderService</code>.<code class="method">setTcVars</code>({{ '{' }}
      <code class="varible">env_template</code> : <code class="string">"shop"</code>,
      <code class="varible">env_work</code> : <code class="string">"dev"</code>,
      <code class="varible">env_language</code> : <code class="string">"en"</code>,
      <code class="varible">user_id</code> : <code class="string">"124"</code>,
      <code class="varible">user_logged</code> : <code class="string">"true"</code>,
      <code class="varible">user_age</code>: <code class="string">"32"</code>,
      <code class="varible">user_newcustomer</code> : <code class="string">"false"</code>,
      {{ '});' }}
      <code class="comment">// you can also override some varible</code>
      <code class="keyword">if</code> (<code class="varible">isNewUser</code>){{ '{' }}
      <code class="class">TagCommanderService</code>.<code class="method">setTcVars</code>({{ '{' }}
      <code class="varible">user_newcustomer</code> : <code class="string">"true"</code>,
      {{ '}' }});
      }
      <code class="comment">// or set/update them individualy</code>
      <code class="class">TagCommanderService</code>.<code class="method">setTcVar</code>(<code class="string">'env_template'</code>, <code class="string">'super_shop'</code>);
      <code class="comment">// you can also remove a var</code>
      <code class="class">TagCommanderService</code>.<code class="method">removeTcVars</code>(<code class="string">'env_template'</code>);
    </pre>
    <h3>As a directive</h3>
    <p>You can use the directive tcSetVars direcly on any html node</p>
    <pre>
      &lt;<code class="keyword">html-element</code> <code class="method">tcSetVars</code>=<code class="string">"'&#123;env_language': 'fr'&#125;"</code>&gt;&lt;/<code class="keyword">html-element</code>&gt;
      <code class="comment">&lt;!-- other exemples --&gt;</code>
      <code class="comment">&lt;!-- defaultLanguage being an attribut of your component --&gt;</code>
      &lt;<code class="keyword">template</code> <code class="method">tcSetVars</code>=<code class="string">"&#123;'env_language': defaultLanguage'&#125;"</code>&gt;&lt;/<code class="keyword">template</code>&gt;
      &lt;<code class="keyword">div</code> <code class="method">tcSetVars</code>=<code class="string">"&#123;'env_language': default_language&#125;"</code>&gt;&lt;/<code class="keyword">div</code>&gt;
    </pre>
    <h2>Get Var</h2>
    <h3>In your controller</h3>
    <pre>
      <code class="keyword">let</code> <code class="varible">myVar</code> = <code class="class">TagCommanderService</code>.<code class="method">getTcVar</code>(<code class="string">'VarKey'</code>);
    </pre>
    <h2>Capture Events</h2>
    <h3>In a controller</h3>
    <pre>
      <code class="keyword">let</code> <code class="varible">eventId</code> = <code class="string">'1234'</code>;
      <code class="keyword">let</code> <code class="varible">data</code> = {{ '{' }}<code class="string">"env_language"</code>: <code class="varible">theEventVar</code>{{ '}' }};
      <code class="class">TagCommanderService</code>.<code class="method">captureEvent</code>(<code class="varible">eventId</code>, <code class="varible">data</code>);
    </pre>
    <h3>As a directive</h3>
    <pre>
      &lt;<code class="keyword">button</code> <code class="method">tcEvent</code>=<code class="string">"{{ '{' }} 'eventId': myEventId, 'data':{{ '{' }}'env_language\': envLanguage{{ '}' }}{{ '}' }}"</code>&gt; change to default language &lt;/<code class="keyword">button</code>&gt;
    </pre>
    <h2>How to reload your container</h2>
    <p>
      When you update your varible you also need to update your container to propagate the changes
    </p>
    <pre>
      <code class="keyword">let</code> <code class="varible">idc</code> = <code class="string">'1234'</code>;
      <code class="keyword">let</code> <code class="varible">ids</code> = <code class="string">'1234'</code>;
      <code class="keyword">let</code> <code class="varible">options</code> = {{ '{' }}
      <code class="varible">exclusions</code>: [
      <code class="string">"datastorage"</code>,
      <code class="string">"deduplication"</code>,
      <code class="string">"internalvars"</code>,
      <code class="string">"privacy"</code>
      ]
      {{ '}' }};
      <code class="class">TagCommanderService</code>.<code class="method">reloadContainer</code>(<code class="varible">ids</code>, <code class="varible">idc</code>, <code class="varible">options</code>);
      <code class="comment">// or you can reload all the containers</code>
      <code class="class">TagCommanderService</code>.<code class="method">reloadAllContainers</code>(<code class="varible">options</code>);
    </pre>
    <h3>Automatic reload of your containers by tracking Routes</h3>
    <p>
      you need to set TagCommanderProvider.trackRoutes(true); to true in your app configuration
    </p>
    <p>to be updated</p>
    <pre>
      <code class="class">TagCommanderService</code>.<code class="method">trackRoutes</code>(<code class="keyword">true</code>);
    </pre>
    <p>
      then you can configure the your route by using the tcRealoadOnly option in your route configuration
    </p>
    <p>
      If you don't set the TagCommanderProvider.trackRoutes(true); (or you set it to false) you will have to reload your container manually
    </p>
    <pre>
      <code class="comment">// somewhere in your controller</code>
      <code class="comment">// reload a specifique container</code>
      <code class="class">TagCommanderService</code>.<code class="method">reloadContainer</code>(<code class="varible">ids</code>, <code class="varible">idc</code>, <code class="varible">options</code>);
      <code class="comment">// or you can reload all the containers</code>
      <code class="class">TagCommanderService</code>.<code class="method">reloadAllContainer</code>(<code class="varible">options</code>);
    </pre>
    <h2>Sample app</h2>
    <p>
      To help you with your implementaiton we provided a sample application. to run it
    </p>
    <pre>
    cd tag-commander-sample-app
    yarn run start
    </pre>
    <p>
      or
    </p>
    <pre>
    cd tag-commander-sample-app
    npm run start
    </pre>
    <p>
      then go to http://localhost:8080
    </p>
    <h2>Development</h2>
    <p>
      After forking you will need to run the following from a command line to get your environment setup:
    </p>
    <pre>
      yarn install
    </pre>
    <p>
      or
    </p>
    <pre>
      npm install
    </pre>
    <p>
      After install you have the following commands available to you from a command line:
    </p>
  </section>

</template>

<script>
import  TC_Wrapper from "../../../src";

const wrapper = TC_Wrapper.getInstance();
  export default  {
    name: 'index',
    mounted(){
      var idc = '12';
      var ids = '4056';
      var options = {
        exclusions: [
        "datastorage",
        "deduplication",
        "internalvars",
        "privacy"
        ]
      };
      wrapper.reloadContainer(ids, idc, options);
      // or you can reload all the containers 
      // wrapper.reloadAllContainers(options);
      }
  }
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
