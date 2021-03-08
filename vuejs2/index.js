var app = new Vue({
    el: '#app',

    data: {
        years: 2,
        rate: 12,
        intr: '',

    },
    methods: {
        interest: function() {
            this.intr = (this.$refs.principal.value * this.years * this.rate) / 100;
        }
    }
})