# vue-tag-commander

This service lets you integrate Tag Commander in your vue applications easily.
- [Official website](https://www.commandersact.com/fr/produits/tagcommander/)

## Features

 - Automatic page tracking
 - Event catching
 - Multiple containers

## Installation and Quick Start
The quick start is designed to give you a simple, working example for the most common usage scenario. There are numerous other ways to configure and use this library as explained in the documentation.

### 1- Installation:
You can install the module from a package manager of your choice directly from the command line

```sh
# NPM
npm i vue-tag-commander
```

Or alternatively, grab the dist/index.es5.min.js and include it in your project

In your application, declare the vue-tag-commander module dependency.

```html
<script src="nodes_components/vue-tag-commander/dist/index.es5.min.js"></script>
```
or if you are using es6, import it like so

```javascript
import TC_Wrapper, { withTracker } from 'vue-tag-commander';
```

### 2- Initialize your datalayer

The plugin doesn't replace the standard setup of a container because you may need to use the containers outside of the plugin.

Initialize your datalayer so that it's ready for the container and plugin, without losing any data. Do it as soon as possible on your website like in a `<script>` block in the head of your webapp.

```
tc_vars = [];
```
### 3- Adding a container

There is 2 way to add your container. Either you include with a a `<script>` tag before your webapp, or you use the addContainer method of the wrapper. It should be noted however that the later will be asynchronous, so your application should also render asynchronously to ensure that the containers are loaded:


```javascript
//main.js
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import TC_Wrapper, { withTracker } from 'vue-tag-commander';

const wrapper = TC_Wrapper.getInstance()
// Set debug for development purpose if needed
wrapper.setDebug(true)

// Add TC Containers
Promise.all([
  wrapper.addContainer("container_head", "/tag-commander-head.js", "head"),
  wrapper.addContainer("container_body", "/tag-commander-body.js", "body"),
]).then(() => {
  new Vue({
    router,
    render: h => h(App)
  }).$mount('#app')

})

```


# Methods
## Add/Remove containers

```js
// function addContainer (id, url, node)
// * id: id of the <script> tag which will be used to load the container
// * url: URL of the container to load
// * node: a string; Where the container should be appended, either "head" or "body"
wrapper.addContainer('my-custom-id', '/the/path/to/tag-commander-container.js', 'head');
// addContainer returns a promise resolved when the container is loaded.
// you can add as many container as you like

// Using the previously defined id, you can also remove the container
wrapper.removeContainer('my-custom-id');
```

## Set Vars
### In vue component
The `setTcVars` call allows to set your `tc_vars`.


```js
wrapper.setTcVars({
  env_template : "shop",
  env_work : "dev",
  env_language : "en",
  user_id : "124",
  user_logged : "true",
  user_age: "32",
  user_newcustomer : "false",
});
// you can also override some variable
if (isNewUser) {
  wrapper.setTcVars({
    user_newcustomer : "true",
  });
}
// or set/update them individually
wrapper.setTcVar('env_template', 'super_shop');

// you can also remove a var
wrapper.removeTcVar('env_template');
```
## Get Var
### In a method

```js
var myVar = wrapper.getTcVar('VarKey');
```
## Remove Var
### In a method

```js
var myVar = wrapper.removeTcVar('VarKey');
```

## Trigger Events
### In a method


You should check the [base documentation](https://community.commandersact.com/tagcommander/user-manual/container-management/events) about events in general

In the context of an SPA, the events defined in a container can't be bound to the standard HTML event as a SPA has its own lifecycle.


The method "triggerEvent" is the new name of the old method "captureEvent"; an alias has been added to ensure backward compatibility.

```js
// eventLabel: Name of the event as defined in the container
// htmlElement: Calling context. Usually the HTML element on which the event is triggered, but it can be the component.
// data: event variables
wrapper.triggerEvent(eventLabel, htmlElement, data);
```

## How to reload your container
When you update your variable you also need to update your container to propagate the changes

```js
var containerId = '1234';
var siteId = '1234';
var options = {
    exclusions: [
        "datastorage",
        "deduplication",
        "internalvars",
        "privacy"
    ]
};
wrapper.reloadContainer(siteId, containerId, options);
// or you can reload all the containers
wrapper.reloadAllContainers(options);
```
## Automatic reload of your containers by tracking Routes

In order to automatically reload all the container when routing different views, you can use the higher order component `withTracker`, which will wrap your view component with the appropriate lifecycle.

`withTracker` also accept an optional object as its second parameter:

```js
{
  tcVars: { //update the datalayer before reloading all container. Equivalent to wrapper.setTcVars
  },
  event: {
    label: 'eventLabel'
    context: this
    variables:  {
      myEventVariable: 'Foo'
    }
    //an event can also be triggered after container reload. This is useful is you have set
    //a custom page view event.
    // * Label: the event's label
    // * context: Optional. Context from which that event should have been called. Default to the component
    // * variables: Options. Event's variable, defined in tag commander.
  }
}
```
### The configuration

```js
import Vue from "vue";
import Router from 'vue-router';
import TC_Wrapper, { WithTracker } from 'vue-tag-commander';

// Components
import Index from '@/components/Index';
import Shop from '@/components/Shop';
import Dashboard from '@/components/Dashboard';

const wrapper = TC_Wrapper.getInstance();
wrapper.setDebug(true);


// to set the TagCommander container provide the id
wrapper.addContainer('container_head', '/tag-commander-head.js', 'head');
wrapper.addContainer('container_body', '/tag-commander-body.js', 'body');

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'index',
      component:
      WithTracker(Index,{})
    },
    {
      path: '/shop',
      name: 'shop',
      component:
      WithTracker(Shop, {})
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: 
      WithTracker(Dashboard,{})
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
```
## Sample app
To help you with your implementation we provided a sample application. to run it

```bash
cd tag-commander-sample-app
yarn start
```
then go to [http://localhost:8080](http://localhost:8080)
## Nuxt
Check the nuxt configuration in order to use the wrapper: [here](https://github.com/TagCommander/vue-tag-commander/blob/master/nuxt.configuration.md "Nuxt configuration requirements tag commander commanders act")
## Development

After forking you will need to run the following from a command line to get your environment setup:

1. ```yarn install```

After install you have the following commands available to you from a command line:

2. ```gulp```

## License

As vue itself, this module is released under the permissive [MIT License](http://revolunet.mit-license.org). Your contributions are always welcome.