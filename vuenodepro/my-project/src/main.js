import Vue from 'vue'
import App from './App.vue'
import demo from './demo.vue'
import header from './components/header.vue'

Vue.component('students', demo);
new Vue({
    el: '#app',
    render: h => h(App)
})