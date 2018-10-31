import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

export default class TC_Wrapper {
    constructor() {
        this.logger = window.console;
        this.tcContainers = [];
        this.isTracking = false;
        this.instance = null;
    }
}

export function withTracker(WrappedComponent, options = {}) {

}