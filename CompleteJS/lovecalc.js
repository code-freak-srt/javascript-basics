function loveCalc(your_name, your_love) {
    var loveScore = Math.random() * 100;
    loveScore = Math.floor(loveScore) + 1;
    if (loveScore < 20) {
        console.log(your_name + " loves " + your_love + " " + loveScore + "%. You should break up.");
    } else if (loveScore >= 20 && loveScore <= 50) {
        console.log(your_name + " loves " + your_love + " " + loveScore + "%. Do you even trust her?");
    } else {
        console.log(your_name + " loves " + your_love + " " + loveScore + "%. Your match is made in heaven.");

    }
}


loveCalc("ABC", "DEF");