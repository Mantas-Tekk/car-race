import Car from './car.js';
import SportCar from './sportCar.js';
import Screen from './screen.js';

class Field {
    constructor(params) {
        this.selector = params.selector;
        this.width = params.width;
        this.height = params.height;

        this.DOM = null;
        this.raceLength = params.raceLength;
        this.roadLength = 850;

        this.carList = [];

        this.screen = null;

        this.carsSelector = "cars-space";
        this.init();
    }

    init() {
        this.screen = new Screen(".screen");
        this.screen.renderScreen();

        const DOM = document.querySelector( this.selector );
        if( !DOM ) {
            throw 'Give me valid selector'
        }
        this.DOM = DOM;
        this.DOM.style.width = this.width+ "px";
        this.DOM.style.height = this.height + "px";
        this.carList = this.createCars(9);

        this.screen.setCars(this.carList);

        this.startRace(this.carList);
    }

    createCars(quantity) {
        let topPos = 0;
        let carIndex = 0;

        let carList = [];
        
        if(quantity > 3) {

            quantity - 2;
            for(let i = 0; i < 2; i++) {
                const car = new SportCar("Sport Audi 100","cars-space", topPos, `car${carIndex}`);
                carList.push(car);    
                topPos += 40;
                carIndex += 1;
            }
            for(let i = 0; i < quantity-2; i++) {
                const car = new Car("Audi 100","cars-space", topPos, `car${carIndex}`);
                carList.push(car);
                topPos += 40;
                carIndex += 1;
            }
        } else {
            for(let i = 0; i <2; i++) {
                const car = new SportCar("Sport Audi 100","cars-space", topPos, `car${carIndex}`);
                carList.push(car);    
                topPos += 40;
                carIndex += 1;
            }

        }    
        return carList; 
    }

    sortCars() {
        let arr = [];
        arr = this.carList;
        let arrL = arr.length;
        let swapped;
        do {
            swapped = false;
            for(let i = 0; i < arrL; i++) {
                if( carsArray[i].getDistnace() < carsArray[i+1].getDistnace() ) {
                    swapped = true;
                    let tempCar = carsArray[i];
                    carsArray[i] = carsArray[i+1];
                    carsArray[i+1] = tempCar;
                }
            }
            ilgis -= 1;

        } while(swapped)

    }

    startRace(carListX) {
        //   12.19  =  10 000 / 820 px
        let lengthPerPx =   this.raceLength / this.roadLength;
        let arrayLength = carListX.length;
        const raceL = this.raceLength;
        let screen = this.screen;

        this.screen.renderContent(carListX);

        let interval = setInterval(function(){

            screen.renderContent();

            for(let i = 0; i < arrayLength; i++) {
                carListX[i].drive(); 
                const dis = carListX[i].getDistance();
                const a = dis / lengthPerPx;
                carListX[i].moveCar(a);
            }
            for(let i = 0; i < carListX.length; i++) {
                if(carListX[i].getDistance() > raceL) {
                    // Winner is someone, I really don't care
                    console.log("Winner!!!!!!!!!")
                    clearInterval(interval);
                }
            }
        }, 200);
    }


    clearCars() {
        let carsA = [];
        carsA = this.createCars(9);
        this.carList = carsA;
        this.startRace(carsA);
        this.screen.setCars(carsA);
        this.screen.clearContent();
    }

    restartRace() {
        const DOM = document.querySelector("#cars-space");
        DOM.innerHTML = " ";
        this.clearCars();
    }
    
}

export default Field;