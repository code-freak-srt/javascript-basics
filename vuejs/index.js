// creating vue Instance
var app = new Vue({
    el: '#app',

    data: {
        message: "Vue is fun",
        name: "Sushil",
        price: '1000',
        path: 'http://wallpapersdsc.net/wp-content/uploads/2016/10/River-Images.jpg',
        link: 'http://www.wikipedia.com',
        text: '',
    },
    // creating Vue Methods
    methods: {
        sellingPrice: function(d) {
            cost = this.price - d;
            return cost;
        }
    }


})

Vue.component('mycomponent', {
    template: '<p>This is my component {{ name }} -- {{ temp }} <button v-on:click="changetemp()">Change</button></p>',

    data: function() {
        return {
            name: "john",
            temp: 200,
        }
    },
    methods: {
        changetemp: function() {
            this.temp = this.temp + 10;
        }
    }

})


var app = new Vue({
    el: '#app',

    data: {
        temp: 37,
        message: '',
        status: true,
        gate: true,

        students: ["Sushil", "Ram", "Shyam", "Hari"],

        players: [
            { name: 'Joe', score: 5 },
            { name: 'Joe', score: 5 },
            { name: 'Joe', score: 5 },
            { name: 'Joe', score: 5 },
            { name: 'Joe', score: 5 },
        ],

    },

    methods: {
        inc: function() {
            this.temp++;
        },
        dec: function() {
            this.temp--;
        },
        keyPressed: function() {
            console.log('key pressed');
        }
    }



});
var demo = new Vue({

    el: '#demo',

    data: {
        message: 'sushil',
    },

    methods: {
        f1: function() {
            return app.temp;
        }
    }
})