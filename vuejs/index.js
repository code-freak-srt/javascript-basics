// creating vue Instance
var app = new Vue({
    el: '#app',

    data: {
        message: "Vue is fun",
        name: "Sushil",
        price: '1000',
    },
    // creating Vue Methods
    methods: {
        sellingPrice: function(d) {
            cost = this.price - d;
            return cost;
        }
    }


})