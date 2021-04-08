// Vue.component('mycomponent', {
//     template: '<p>This is my component {{ name }} - {{ temperature }} <button v-on:click="changeTemp()">Click Here </button></p>',
//     data: function() {
//         return {
//             name: 'John',
//             temperature: 100,
//         }
//     },
//     methods: {
//         changeTemp: function() {
//             this.temperature = this.temperature + 10;
//         }
//     }
// })


var app = new Vue({
    el: '#app',

    data: {
        years: 2,
        rate: 12,
        intr: '',

    },
    methods: {
        interest: function() {
            this.intr = this.$refs.principal.value * this.years * this.rate;

        }
    },

});