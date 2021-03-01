// creating vue Instance
// var app = new Vue({
//     el: '#app',

//     data: {
//         message: "Vue is fun",
//         name: "Sushil",
//         price: '1000',
//         path: 'http://wallpapersdsc.net/wp-content/uploads/2016/10/River-Images.jpg',
//         link: 'http://www.wikipedia.com',
//     },
// creating Vue Methods
//     methods: {
//         sellingPrice: function(d) {
//             cost = this.price - d;
//             return cost;
//         }
//     }


// })

var app = new Vue({
    el: '#app',

    data: {
        temp: 0,
        message: '',
        status: true,
        gate: true,

    },
    methods: {
        inc: function() {
            this.temp++;
        },
        dec: function() {
            this.temp--;
        },
        keypressed: function() {
            console.log('key pressed');
        }
    }
})