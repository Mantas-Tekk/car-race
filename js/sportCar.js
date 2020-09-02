"use strict";

import Car from "./car.js";

class SportCar extends Car {

    constructor(name,selector, topPos, id) {
        super(name,selector, topPos, id);
        super.topSpeed = 130;
        this.isSpoilerUp = false;
        this.selector = selector;
    }

    init() {
        super.init();
        this.renderSportCar();
    }

    getDistance() {
        return super.getDistance();
    }

    spoiler() {
        if(Math.random() > .5) {
            this.isSpoilerUp = true;
        } else {
            this.isSpoilerUp = false;
        } 
    }

    speedUp(value) {
        this.spoiler();
        let doubleV = value * 2;

        if(this.isSpoilerUp) {
            super.speedUp(doubleV);
        } else {
            super.speedUp(value);
        }
    }

    speedDown(value) {
        this.spoiler();
        let doubleV = value * 2;
        
        if(this.isSpoilerUp) {
            super.speedDown(doubleV);
     
        } else {
            super.speedDown(value);
        }
    }

    moveCar(value) {
        super.moveCar(value);
    }

    drive() {
        let random = Math.random();
        let randomSpeedUp = Math.floor(Math.random() * 6) + 1;
        let randomSpeedDown = Math.floor(Math.random() * 4) +1;

        if(random < 0.2) {
            // SPEED DONW
            this.speedDown(randomSpeedDown)
        } else if (random >= 0.2 && random < 0.5) {
            // NORMAL SPEED
            this.traveledDistance += this.speed;
        } else if(random >= 0.5) {
            // SPEED UP
            this.speedUp(randomSpeedUp);
        }
    }

    renderSportCar() {
        this.carDOM.classList.add("carSport");
    }

}

export default SportCar;