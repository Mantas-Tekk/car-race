"use strict";
class Screen {

    constructor(selector) {
        this.selector = selector;
        this.DOM = null; 
        this.carArray = null;       
    }

    init() {
    }

    renderScreen() {
        let DOM = document.querySelector(this.selector);
        let HTML = `
        <div class="content">
            <p>Rendering...</p>
        </div>
        `
        DOM.innerHTML = HTML;
    }

    setCars(array) {
        this.carArray = array;
    }

    clearContent() {
        let DOM = document.querySelector(".content");
        DOM.innerHTML = '';
    }

    renderContent(){
        let DOM = document.querySelector(".content");
        let HTML = ``;

        for(let i = 0; i < this.carArray.length; i++) {
            HTML += `
                <p>
                    ${i+1}. ${this.carArray[i].getName()} <br>
                    s:${this.carArray[i].getSpeed()} Km/h | d:${this.carArray[i].getDistance()} Km
                </p>
            `
        }
        DOM.innerHTML = HTML;
    }


}

export default Screen;