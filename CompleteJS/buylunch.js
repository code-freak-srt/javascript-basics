var names = ['ABC', 'DEF', 'GHI', 'JKL', 'MNO'];

function whosPaying(names) {

    var x = Math.random() * names.length;
    x = Math.floor(x);
    console.log(names[x] + ' is going to buy lunch today.');
}

whosPaying(names);