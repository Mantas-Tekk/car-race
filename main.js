"use strict";
import Field from './js/field.js';

const fieldParam = {
    width: 1000,
    height: 650,
    selector: '#field',
    raceLength: 10000,
};

const field1 = new Field( fieldParam);

setButton();

function setButton() {
    const DOM = document.getElementById("restart");
    DOM.addEventListener("click", () => {
        field1.restartRace();
    })
}