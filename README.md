# vue-tag-commander

This service lets you integrate Tag Commander in your vue applications easily.
- [Official website](https://www.commandersact.com/fr/produits/tagcommander/)

## Features

 - automatic page tracking
 - event catching
 - multiple containers

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

### 2- In your application, get an TC_Wrapper instance:

```javascript
const wrapper = TC_Wrapper.getInstance();
```

### 3- add your Tag commander containers and start tracking:

```JavaScript
import TC_Wrapper, { withTracker } from 'vue-tag-commander';

const wrapper = TC_Wrapper.getInstance();

// you can set debug by setting this to true
wrapper.setDebug(true);

// you need to provide URIS to load containers script.
// function addContainer (id, uri, node)
wrapper.addContainer('a_name_for_the_container_id', '/the/path/to/tag-commander-container.js', 'head');
// you can add as many container as you like

// but you can also remove them
wrapper.removeContainer('my_tag_container_id');

// you can track the url of your app by setting this
wrapper.trackRoutes(true);
```

Congratulations! [vue-tag-commander](https://github.com/TagCommander/vue-tag-commander) is ready 


## Set Vars
### In vue component
The `setVar` call allows to set your `tc_vars`.

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
// you can also override some varible
if (isNewUser) {
    wrapper.setTcVars({
        user_newcustomer : "true",
    });
}
// or set/update them individualy
wrapper.setTcVar('env_template', 'super_shop');

// you can also remove a var
wrapper.removeTcVar('env_template');
}
```
### In render
You can use the directive tcSetVars direcly on any render function
```html
<TcVars env_language="fr" env_template="super_shop" />
```
## Get Var
### In a controller
```js
var myVar = wrapper.getTcVar('VarKey');
```
## Remove Var
### In a controller
```js
var myVar = wrapper.removeTcVar('VarKey');
```

## Capture Events
### In a controller
```js
wrapper.captureEvent(eventLabel, htmlElement, data);
```
### In template
```html

<button class="sm-button green-500" @click="addCartQuantity(index,$event,item.name)">+</button>

```

## How to reload your container
When you update your varible you also need to update your container to propagate the changes
```js
var idc = '1234';
var ids = '1234';
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
wrapper.reloadAllContainers(options);
```
## Automatic reload of your containers by tracking Routes
### The configuration

you need to set wrapper.trackRoutes(true); to true in your app configuration
```js
wrapper.trackRoutes(true);
```

then you can configure the your route by using the tcRealoadOnly option in your route configuration

```js
import Vue from "vue";
import Router from 'vue-router';
import TC_Wrapper, { withTracker } from 'vue-tag-commander';

// Components
import Index from '@/components/Index';
import Shop from '@/components/Shop';
import Dashboard from '@/components/Dashboard';

const wrapper = TC_Wrapper.getInstance();
wrapper.setDebug(true);

// setting the tags for the current and prevous URL
wrapper.trackRoutes(true);

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
      WithTracker(Index,
      {tcReloadOnly:[
        {ids :'4056', idc: '12'} // will only reload the container 4056_12
      ]})
    },

    {
      path: '/shop',
      name: 'shop',
      component:
      WithTracker(Shop,
      {tcReloadOnly: [
        {ids :'4056', idc: '12'}, // will only reload the container 4056_12
        {ids :'4056', idc: '11', options:["datastorage", "deduplication"]} // if no tcReloadOnly is set it will reload all the containers if the trackRoute is true (in the configuration)
      ]
      })
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: 
      WithTracker(Dashboard,
        {tcReloadOnly:[
        {ids :'4056', idc: '12'}
        ]
      })
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
```
If you don't set the TagCommanderProvider.trackRoutes(true); (or you set it to false) you will have to reload your container manually

```js
// reload a specifique container
wrapper.reloadContainer(ids, idc, options);
// or you can reload all the containers
wrapper.reloadAllContainer(options);
```

## Sample app
To help you with your implementaiton we provided a sample application. to run it
```bash
cd tag-commander-sample-app
yarn start
```
then go to [http://localhost:8080](http://localhost:8080)

## Documentation

- ```TagCommanderService.addContainer( id: string, uri : string, node : string )```

	- id : id the id the script node will have
	- uri : uri the source of the script
	- node : the node on which the script will be placed, it can either be head or body

- ```TagCommanderService.removeContainer( id : string )```

	- id : id the id the script node will have


- ```TagCommanderService.setDebug( debug : bool )```

	- debug : will display the debug messages if true


- ```TagCommanderService.trackRoutes( b : bool )```

 - b : will read routes if set to true



- ```TagCommanderService.setTcVar( tcKey : string, tcVar : any )```

	set or update the value of the var

	- tcKey : key in the data layer
	- tcVar : content


- ```TagCommanderService.setTcVars( vars : any )```

	set your variables for the different providers, when called the first time it instantiate the external variable

- ```TagCommanderService.getTcVar( tcKey : string )```

	get the value of the container variable
	
	- tcKey : key 


- ```TagCommanderService.removeTcVar( varKey : string )```

	removes the var by specifying the key
	
	- varKey : key of the variable


- ```TagCommanderService.reloadAllContainers( options : object )```

	Reload all containers

	- options to give to the ```tC.container.reload(options)``` function

- ```TagCommanderService.reloadContainer( ids : string, idc : string, options : object )```

	Reload the specified container
	- ids : Site Id
	- idc : Container Id
	- options : options for the function ```tC[containerId].reload(options)```

- ```TagCommanderService .captureEvent( eventLabel : string , element : HTMLElement, data : object )```

	Set a TagCommander Event
	- eventLabel : name of the event (need to be in the container event list)
	- element : Dom Element where the event is attached
	- data : data you want to send


## Development

After forking you will need to run the following from a command line to get your environment setup:

1. ```yarn install```

After install you have the following commands available to you from a command line:

2. ```gulp```

## License

As vue itself, this module is released under the permissive [MIT License](http://revolunet.mit-license.org). Your contributions are always welcome.