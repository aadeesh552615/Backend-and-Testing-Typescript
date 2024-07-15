"use strict";
class player {
    constructor(height, weight) {
        this.height = height;
        this.weight = weight;
    }
    get getHeight() {
        return this.height;
    }
    set setHeight(height) {
        this.height = height;
    }
}
const player1 = new player(12, 23);
console.log(player1.getHeight);
player1.setHeight = 13;
console.log(player1.getHeight);
