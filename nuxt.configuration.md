#Nuxt Configuration

## Introduction
The vue-tag-commander wrapper need some little configuration in order to work properly with nuxt requirement

## Instalation

We will have modifications to do in thoses files : 

```
project 
│	nuxt.config.js
└─── middleware
│   └─── vue-tag-commander.js
└─── plugins
    └─── vue-tag-commander.js

```

### Install the Wrapper as a pluggin

Start by installing the wrapper : 

```sh
# NPM
npm i vue-tag-commander
```
The first step is to create a plugin JS file in the plugin directory : 

```
project 
└─── plugins
    └─── + vue-tag-commander.js

```
Then paste the following code : 

```javascript
import Vue from 'vue'
import TC_Wrapper from 'vue-tag-commander'

const wrapper = TC_Wrapper.getInstance();
// Set debug for development purpose if needed
wrapper.setDebug(true);

// Creation of TC Containers
wrapper.addContainer('container_head', 'tag-commander-head.js', 'head');
wrapper.addContainer('container_body', 'tag-commander-body.js', 'body');


export default ({ app }) => {
  // Make the wrapper available in app context
  app.$wrapper = wrapper

}
// Make the wrapper available in Vue
Vue.prototype.$wrapper = wrapper

```

Then in your nuxt.config.js :
As our wrapper is an ES6 module we need to tell babel to transpile it : 

```javascript
export default {
  ...
  build: {
    transpile: ['vue-tag-commander'] // add this line
  }
  ...
}

```
Then we need to declare our plugin : 

```javascript
export default {
  ...
  plugins: [
    {src: '~/plugins/vue-tag-commander', mode: 'client'}
  ],
  ...
}

```
> The ```mode: 'client'``` is needed in order to execute the plugin only in client side. 

Your Wrapper can now be used in your Nuxt instance

**Example :**

```javascript
export default {
  mounted () {
    this.$wrapper.setTcVars({
      user_newcustomer : "true",
    });
    this.$wrapper.setTcVar('env_template', 'super_shop');
    this.$wrapper.removeTcVar('VarKey');
  }
}
```



### Routing
In order to track routes we will need to create and declare a middleware.

Start by creating a vue-tag-commander.js file in the middleware directory :

```
project 
└─── middleware
    └─── + vue-tag-commander.js

```
Paste the following code : 

```javascript
import TC_Wrapper from 'vue-tag-commander'

export default function ({ route }) {

  // on client side only
  if (process.client) {
  
    // instanciate the wrapper
    const wrapper = TC_Wrapper.getInstance();
    
    // Reload all containers
    wrapper.reloadAllContainers()
    
    // If meta is set add Variables to TC
    if (route.meta[0].TCRouteOptions) {
      wrapper.setTcVars(route.meta[0].TCRouteOptions);
    }
  }
}
```
Then declare it in your nuxt.config.js : 

```javascript
export default {
  ...
  router: {
    middleware: 'vue-tag-commander',
	...
  },
  ...
}

```
Your Nuxt app will now reload all containers on each route changes. You can set custom variable in each pages by using the meta key : 

```javascript
export default {
  meta: {
    TCRouteOptions : {
      tcReloadOnly: [
        { ids: "4056", idc: "12" },
        { ids: "4056", idc: "11", options: ["datastorage", "deduplication"] }
      ]
    },
  },
}
```

