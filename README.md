# vue-tag-commander

Integrate CommandersAct's tag container with your Vue applications seamlessly using the `vue-tag-commander` wrapper.

- **Note**: Familiarize yourself with [CommandersAct's tag container's primary documentation](https://doc.commandersact.com/features/sources/sources-catalog/web/containers) before proceeding.

## Table of Contents
- [Features](#features)
- [Installation and Quick Start](#installation-and-quick-start)
- [Methods](#methods)
    - [Container Management](#container-management)
    - [Variable Management](#variable-management)
    - [Events](#events)
    - [Reloading Containers](#reloading-containers)
- [Server-side Rendering (SSR)](#server-side-rendering)
- [Sample App](#sample-app)
- [License](#license)
- [Development](#development)
- [Contribute](#contribute)

## Features <a name="features"></a>

- Automatic page tracking
- Event triggering
- Supports multiple containers

## Installation and Quick Start <a name="installation-and-quick-start"></a>

### Installation

1. **Using NPM**:
   ```bash
   npm i vue-tag-commander
   ```

2. **Direct Include**: Fetch `dist/index.es5.min.js` or `index.es6.min.js` and include it in your project.
   ```html
   <script src="vue-tag-commander/dist/index.es5.min.js"></script>
   ```

### Import

1. **For ES6**:
   ```js
   import TC_Wrapper from 'vue-tag-commander';
   ```

2. **For ES5**:
   ```js
    const TC_Wrapper = require('vue-tag-commander');
    ```

3. **Direct Include**:
   ```javascript
   const TC_Wrapper = window.TC_Wrapper;
   ```

### Setup

1. **Initialize your Data Layer**: Set up your data layer early in your web application, preferably in a `<script>` block in the head.
   ```js
   tc_vars = [];
   ```

2. **Add a Container**: You can either include your container with a `<script>` tag or utilize the `addContainer` method from the wrapper. For the latter, be aware it's asynchronous. Ensure your application renders asynchronously too.
   - **Vue 3 with Composition API:**
      ```js
      <template>
        <div v-if="isReady">Containers loaded</div>
        <div v-else>Now loading</div>
      </template>
          
      <script setup>
      import { RouterLink, RouterView } from 'vue-router'
      import TC_Wrapper from 'vue-tag-commander'
      import { onMounted, ref } from 'vue'
          
      const wrapper = TC_Wrapper.getInstance();
      wrapper.setDebug(true);
          
      const isReady = ref(false);
          
      onMounted(async () => {
        await wrapper.addContainer('container_head', '/tag-commander-head.js', 'head');
        await wrapper.addContainer('container_body', '/tag-commander-body.js', 'body');
        isReady.value = true;
      });
      </script>
      ```
   - **Vue 2:**
      ```js
      <template>
        <div v-if="isReady">Containers loaded</div>
        <div v-else>Now loading</div>
      </template>
        
      <script>
      import TC_Wrapper from "vue-tag-commander";
        
      const wrapper = TC_Wrapper.getInstance();
      wrapper.setDebug(true);
        
      export default {
        name: "App",
        data() {
          return { isReady: false };
        },
        async mounted() {
          await wrapper.addContainer(
            "container_head",
            "/tag-commander-head.js",
            "head"
          );
          await wrapper.addContainer(
            "container_body",
            "/tag-commander-body.js",
            "body"
          );
          this.isReady = true;
        },
      };
      </script>
      ```
## Methods <a name="methods"></a>

Many methods are asynchronous. If you want to ensure that a method has been executed before continuing, you can use the `await` keyword. Please check the function definition to see if it is asynchronous.

### Container Management <a name="container-management"></a>
   ```js
   // Adding a container
   await wrapper.addContainer('my-custom-id', '/url/to/container.js', 'head');

   // Removing a container
   wrapper.removeContainer('my-custom-id');
   ```

### Variable Management <a name="variable-management"></a>
   ```js
   // Set variables
   await wrapper.setTcVars({ env_template : "shop", ... });

   // Update a single variable
   await wrapper.setTcVar('env_template', 'super_shop');

   // Get a variable
   const myVar = wrapper.getTcVar('VarKey');

   // Remove a variable
   wrapper.removeTcVar('VarKey');
   ```

### Events <a name="events"></a>
- Refer to the [base documentation on events](https://doc.commandersact.com/features/sources/sources-catalog/web/containers/user-guides-for-browser-side-platform/tags/rules/triggers) for an understanding of events in general.
- The method "triggerEvent" is the new name of the old method "captureEvent"; an alias has been added to ensure backward compatibility.


  ```js
  // Triggering an event
  // eventLabel: Name of the event as defined in the container
  // htmlElement: Calling context. Usually the HTML element on which the event is triggered, but it can be the component.
  // data: event variables
  await wrapper.triggerEvent(eventLabel, htmlElement, data);
  ```

### Reloading Containers <a name="reloading-containers"></a>

1. **Manual Reload**: Update your container after any variable change.
   ```js
   await wrapper.reloadContainer(siteId, containerId, options);
   ```

2. **On Route Change**: Utilize the `trackPageLoad` function for updating on route changes.
    - **Vue 3 with Composition API:**
       ```js
       <script setup>
       import TC_Wrapper from "vue-tag-commander";
       import { onMounted } from 'vue'
           
       const wrapper = TC_Wrapper.getInstance();
           
       onMounted(() => {
         wrapper.trackPageLoad();
       })
       </script>
       ```
   - **Vue 2:** 
      ```js
      <script>
      import TC_Wrapper from "vue-tag-commander";
      
      const wrapper = TC_Wrapper.getInstance();
      
      export default {
        name: "sampleView",
        mounted() {
          wrapper.trackPageLoad();
        },
      };
      </script>
      ```
     
## Server-side Rendering (SSR) <a name="server-side-rendering"></a>

`vue-tag-commander` works seamlessly with frameworks utilizing Server-side Rendering (SSR) (for example [Nuxt](https://nuxt.com/) / [Nuxt 2](https://v2.nuxt.com/)).
However, the wrapper is interacting with the DOM objects `document` and `window`, which are not available on the server. 
Therefore, you have to make sure that wrapper methods are only executed on the client-side.
This can be achieved by using hooks like `onMounted` (`mounted()` for Vue 2) or executing it in a callback function that doesn't run on the server.

### Vue 3 / Nuxt examples:
```js
// Don't do it like that, code is executed on the server
<script setup>
import TC_Wrapper from 'vue-tag-commander'
    
const wrapper = TC_Wrapper.getInstance();
wrapper.trackPageLoad({tcVars: {page: 'home'}});
</script>
```

```js
// Works as the code is executed on the client only
<script setup>
import TC_Wrapper from 'vue-tag-commander'
import { onMounted } from 'vue'

onMounted(() => {
    const wrapper = TC_Wrapper.getInstance();
    wrapper.trackPageLoad({tcVars: {page: 'home'}});
});
</script>
```

Other options are checking whether `window` is defined, or checking the `process` before executing a method.
```js
<script setup>
import TC_Wrapper from 'vue-tag-commander'

if (typeof window !== 'undefined') {
    // client-side-only code
    const wrapper = TC_Wrapper.getInstance();
    wrapper.trackPageLoad({tcVars: {page: 'home'}});
}
</script>
```

```js
<script setup>
import TC_Wrapper from 'vue-tag-commander'

if (process.client) {
    // client-side-only code
    const wrapper = TC_Wrapper.getInstance();
    wrapper.trackPageLoad({tcVars: {page: 'home'}});
}
</script>
```

### Vue 2 / Nuxt 2:

- When using Nuxt 2, you have to add `vue-tag-commander` to the `transpile` array in the build options in `nuxt.config.js` in order to make it work:
```js
export default {
    // ...
    build: {
        transpile: [
            'vue-tag-commander'
        ]
    }
    // ...
}
```

Example usage:
```js
// Don't do it like that, code is executed on the server
<script>
import TC_Wrapper from 'vue-tag-commander'
    
const wrapper = TC_Wrapper.getInstance();
wrapper.trackPageLoad({tcVars: {page: 'home'}});

export default {
    name: "sampleView"
};    
</script>
```

```js
// Works as the code is executed on the client only
<script>
import TC_Wrapper from "vue-tag-commander";
    
export default {
    name: "sampleView",
    mounted() {
        const wrapper = TC_Wrapper.getInstance();
        wrapper.trackPageLoad();
    },
};
</script>
```

Other options are checking whether `window` is defined, or checking the `process` before executing a method.
```js
<script>
import TC_Wrapper from 'vue-tag-commander'

export default {
    name: "sampleView"
};
    
if (typeof window !== 'undefined') {
    // client-side-only code
    const wrapper = TC_Wrapper.getInstance();
    wrapper.trackPageLoad({tcVars: {page: 'home'}});
}
</script>
```

```js
<script>
import TC_Wrapper from 'vue-tag-commander'

export default {
    name: "sampleView"
};

if (process.client) {
    // client-side-only code
    const wrapper = TC_Wrapper.getInstance();
    wrapper.trackPageLoad({tcVars: {page: 'home'}});
}
</script>
```

## Sample App <a name="sample-app"><a/>

To help you with your implementation we provide two sample applications, one for Vue 3, one for Vue 2. To run them, clone the repo then run:
- For the Vue 3 Sample App
   ```bash
   cd tag-commander-sample-app-vue3
   npm install
   npm run dev
   ```
- For the Vue 2 Sample App
   ```bash
   cd tag-commander-sample-app-vue2
   npm install
   npm run dev
   ```

Then, visit [http://localhost:5173](http://localhost:3000).

# Development <a name="development"></a>

After forking, set up your environment:

```bash
npm install
```

Commands available:

```bash
gulp
```

# Contribute <a name="contribute"></a>

To contribute to this project, please read the [CONTRIBUTE.md](CONTRIBUTE.md) file.

# License <a name="license"></a>
This module uses the [MIT License](http://revolunet.mit-license.org). Contributions are welcome.
