"use strict";
class player {
    constructor(height, weight, speed) {
        this.height = height;
        this.weight = weight;
        this.speed = speed;
        this.id = Math.floor(Math.random() * 100);
    }
    get getHeight() {
        return this.height;
    }
    set setHeight(height) {
        this.height = height;
    }
    get getSpeed() {
        return this.speed;
    }
    set setSpeed(speed) {
        this.speed = speed;
    }
}
class power extends player {
    constructor(height, weight, speed, special) {
        super(height, weight, speed);
        this.special = special;
    }
    get getSpecial() {
        return this.special;
    }
    set setSpecial(special) {
        this.special = special;
    }
    displaySpeed() {
        return this.speed;
    }
}
const player2 = new player(22, 21, 84);
console.log(player2.id);
