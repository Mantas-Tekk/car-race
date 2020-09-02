"use strict";
class Car {

    constructor(name,selector, topPos, id) {

        this.carId = id;

        this.name = name;
        this.speed = 0;
        this.topSpeed = 95;
        this.traveledDistance = 0;

        this.topPos = topPos;
        this.DOM = null;
        this.carDOM = null;
        this.selector = selector
        this.init();
        }

    init() {
        const DOM = document.getElementById( this.selector );
        if( !DOM ) {
            throw 'Give me car valid selector'
        }
        this.DOM = DOM;

        this.renderCar();
        // this.getCarElement();
        this.carDOM = this.getCarElement();
        // console.log(this.carDOM);
    }

    getDistance() {
        return this.traveledDistance;
    }

    getSpeed () {
        return this.speed;
    }
    getName () {
        return this.name;
    }

    speedUp(value) {
        if(this.speed + value >= this.topSpeed)
            this.speed = this.topSpeed;
        else   
            this.speed += value;
            
        this.traveledDistance += this.speed;
    }

    speedDown(value) {
        if(this.speed - value <= 0)
            this.speed = 0;
        else 
            this.speed -= value;

        this.traveledDistance += this.speed;
    }

    drive() {
        let random = Math.random();
        let randomSpeedUp = Math.floor(Math.random() * 6) + 1;
        let randomSpeedDown = Math.floor(Math.random() * 4) +1;
    
        if(random < 0.2) {
            // SPEED DONW
            this.speedDown(randomSpeedDown)
        } else if (random > 0.2 && random < 0.5) {
            // NORMAL SPEED
            this.traveledDistance += this.speed;
        } else if(random > 0.5) {
            // SPEED UP
            this.speedUp(randomSpeedUp);
        }

    }

    moveCar(value) {
        this.carDOM.style.marginLeft = value +"px";
    }

    renderCar() {
        let carHTML = `<div id="${this.carId}" class="car carVintage" style="top:${this.topPos}px; margin-left:0px;"></div>`
        this.DOM.insertAdjacentHTML("afterbegin", carHTML);
    }

    getCarElement() {
        const DOM1 = document.getElementById( this.carId );
        if( !DOM1 ) {
            throw 'Give me car valid selector'
        }
        this.carDOM = DOM1;

        return DOM1;
    }
}

export default Car;