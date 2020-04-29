export default class TC_Wrapper {
  constructor() {
    this.logger = window.console;
    this.tcContainers = [];
    this.isTracking = false;
    this.instance = null;
  }

  static getInstance() {
    if (!TC_Wrapper.instance) {
      TC_Wrapper.instance = new TC_Wrapper();
    }
    return this.instance;
  }


  /**
   * Function isString
   * @param {value} any 
   */
  isString(value) {
    return typeof value == 'string' || value instanceof String;
  }
  /**
   * Function isObject
   * @param {value} any 
   */
  isObject (value) {
    return typeof value === 'object' && value instanceof Object;
  }
  /**
   * Add a container
   * The script URI correspond to the tag-commander script URL, it can either be a CDN URL or the path of your script
   * @param {string} id the id the script node will have
   * @param {string} uri the source of the script
   * @param {string} node the node on witch the script will be placed, it can either be head or body
   */
  addContainer(id, uri, node) {
    if (!this.isString(id)) {
      throw new TypeError("The container id should be a string.");
    }
    if (!this.isString(uri)) {
      throw new TypeError("The container uri should be a string.");
    }

    let tagContainer = document.createElement("script");
    tagContainer.setAttribute("type", "text/javascript");
    tagContainer.setAttribute("src", uri);
    tagContainer.setAttribute("id", id);

    if (!node){
      this.logger.warn("Node parameter isn't specified. The script container will be placed in the head by default.");
      node = "head";
    }
    if (typeof node !== "string") {
      this.logger.warn("Node parameter should be a string, container will be place in head instead");
      node = "head";
    }
    if (node.toLowerCase() !== "head" && node.toLowerCase() !== "body" ) {
      this.logger.info("Script container will be place in head instead");
      node = "head";
    }

    this.logger.log(`Added container id : ${id} with in ${node.toLowerCase()} using : ${uri}`)

    window.document
    .getElementsByTagName(node.toLowerCase())[0]
    .appendChild(tagContainer);
    this.tcContainers.push({
      id: id,
      uri: uri
    });
  }

  // /**
  //  * Remove a container
  //  * @param {string} id
  //  */
  // removeContainer(id) {
  //   let container = document.getElementById(id);
  //   let containers = this.tcContainers.slice(0);

  //   document.getElementsByTagName("head")[0].removeChild(container);

  //   for (let i = 0; i < containers.length; i++) {
  //     if (containers[i].id === id) {
  //       this.tcContainers.splice(i, 1);
  //     }
  //   }
  // }

  /**
   * Will display the debug messages if true
   * @param {boolean} boolean if set to true it will activate the debug msg default is false
   */
  setDebug(boolean) {
    if (boolean) {
      this.logger = window.console;
    } else {
      this.logger = {
        log: function() {},
        warn: function() {},
        info: function() {}
      };
    }
  }

  /**
   * Allows the router to be tracked
   * @param {boolean} boolean will read routes if set to true
   */
  trackRoutes(boolean) {
    this.isTracking = !!boolean;
  }

  /**
   * Set or update the value of the var
   * @param {string} tcKey
   * @param {*} tcVar
   */
  setTcVar(tcKey, tcVar, reloadNumber = 0) {
    if (!this.isString(tcKey)){
      throw new TypeError("The tcKey should be a string.");
    }
    if (!window.tc_vars) {
      reloadNumber++ ;
      if (reloadNumber > 10) {
        throw new Error("Container couldn't be found");
      }
      setTimeout(() => {
        this.setTcVar(tcKey, tcVar, reloadNumber);
      }, 1000);
    }
    else{
      window.tc_vars[tcKey] = tcVar;
      this.logger.log(`Variable ${tcKey} added to container : `, tcVar);
    }
  }
  /**
   * Set your variables for the different providers, when called the first time it
   * instantiate the external varible
   * @param {object} vars
   */
  setTcVars(vars) {
    if (!vars) {
      throw new Error("vars parameter isn't defined");
    }
    if (!this.isObject(vars)) {
      throw new TypeError('vars parameter is not an object');
    }
    let listOfVars = Object.keys(vars);
    for (let i = 0, j = listOfVars.length; i < j; i++) {
      this.setTcVar(listOfVars[i], vars[listOfVars[i]]);
    }
  }

  /**
   * Get the value of the var
   * @param {string} tcKey
   */
  getTcVar(tcKey) {
    if (!this.isString(tcKey)){
      throw new TypeError("The tcKey should be a string.");
    }
    if (!window.tc_vars[tcKey]) {
      throw new Error("Variable couldn't be found in Container.");
    }
    this.logger.log(`Getting variable ${tcKey}`);
    return window.tc_vars[tcKey];
  }

  /**
   * Removes the var by specifying the key
   * @param {string} tcKey
   */
  removeTcVar(tcKey) {
    if (!this.isString(tcKey)){
      throw new TypeError("The tcKey should be a string.");
    }
    if (!window.tc_vars[tcKey]) {
      this.logger.warn("Variable couldn't be found in Container.");
    }
    this.logger.log(`Removing Variable : ${tcKey}`, window.tc_vars[tcKey]);
    delete window.tc_vars[tcKey];
  }

  /**
   * Will reload all the containers
   * @param {object} options can contain some options in a form of an object
   */
  reloadAllContainers(options, reloadNumber = 0) {
    if (!options) {
      options = {};
    }
    if (options && !this.isObject(options)) {
      options = {};
      this.logger.warn(`Options parameter isn't an object type, it will not be used then`);
    }
    this.logger.log(
      "Reloading all containers",
      Object.keys(options).length !== 0 ?  options : ""
    );
    if (!window.tC && this.tcContainers.length >= 0) {
      reloadNumber++;
      if (reloadNumber > 10) {
        throw new Error("Container couldn't be found");
      }
      setTimeout(() => {
        this.reloadAllContainers(options, reloadNumber);
      }, 1000);
    }
    else{
      window.tC.container.reload(options);
    }
  }

  /**
   * Will reload a specifique container
   * @param {string} ids
   * @param {string} idc
   * @param {object} options can contain some options in a form of an object
   */
  reloadContainer(ids, idc, options, reloadNumber = 0) {
    if (!this.isString(ids)) {
      throw new TypeError("The ids (id site) should be a string.");
    }
    if (!this.isString(idc)) {
      throw new TypeError("The idc (id container) should be a string.");
    }
    if (!options) {
      this.logger.warn(`Options parameter isn't defined, no options will be used`);
      options = {};
    }
    if (options && !this.isObject(options)) {
      this.logger.warn(`Options parameter isn't an object type, it will not be used then`);
      options = {};
    }
    if (!window.tC) {
      reloadNumber++;
      if (reloadNumber > 10) {
        throw new Error("Container couldn't be found");
      }
      setTimeout(() => {
        this.reloadContainer(ids, idc, options, reloadNumber);
      }, 1000);
    }
    else{
      this.logger.log(
        `Reloading container ids: ${ids} idc: ${idc}`,
        Object.keys(options).length !== 0 ?  options : ""
      );
      window.tC[`container_${ids}_${idc}`].reload(options);
    }
  }

  // /**
  //  * Will set a TC_Wrapper event
  //  * @param {string} eventLabel the name of your event
  //  * @param {HTMLElement} element the HTMLelement on witch the event is attached
  //  * @param {object} data the data you want to transmit
  //  */

  async captureEvent(eventLabel, htmlElement, data, reloadCapture = 0) {
    if (!this.isString(eventLabel)) {
      throw new TypeError("The eventLabel parameter should be a string.");
    }
    if (!htmlElement instanceof HTMLElement) {
      throw new TypeError("The htmlElement parameter should be an HTML Element.");
    }
    if (data && !this.isObject(data)) {
      this.logger.info(`data parameter isn't an object type, it will not be used then`);
    }
    if (!data) {
      data = {};
    }
    if (typeof window.tC === "undefined") {
      reloadCapture++;
      if(reloadCapture > 10){
        throw new Error("Missing container");
      }
      return new Promise((resolve) => {
        setTimeout(() => resolve(this.captureEvent(eventLabel, htmlElement, data,reloadCapture)), 1000);
      });
    }
    else{
      if (!(eventLabel in window.tC.event)) {
        throw new Error(`Missing Event : ${eventLabel} in container`);
      }
      this.logger.log(`Capturing Event : ${eventLabel} on Element :`, htmlElement, data);
      window.tC.event[eventLabel](htmlElement, data);
    }
  }
}



export function WithTracker(WrappedComponent, options = {}) {
  const trackPage = page => {
    const wrapper = TC_Wrapper.getInstance();
    wrapper.setTcVars(options);
    wrapper.reloadAllContainers();
  };
  return {
    mounted() {
      const page = this.$router.name;
      trackPage(page);
    },
    render(h) {
      return h(WrappedComponent);
    }
  };
}
