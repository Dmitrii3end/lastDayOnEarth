import Pickup from "./pickup.js";
import Bike from "./bike.js";
import Floor from "./floor.js";
import BlockZone from "./blockZone.js";

export default class Base{
    size = {width: 20, height: 20};
    pickup;
    wallsArray;
    floorsArray;
    bike;
    chestsArray;
    decorsArray;
    benchsArray;
    generatorsArray;
    trapsArray;
    blockZone;
    isHaveTreesAndStones;
    noiceLevel = 0; //уровень шума при рейде
    c4Count = 0; //количество с4 при рейде
    axeCount = 0; //количество железных топоров при рейде

    constructor(base){
        if (base){
            this.size = base.size;
            this.pickup = base.pickup;
            this.wallsArray = base.wallsArray;
            this.floorsArray = base.floorArray;
            this.bike = base.bike;
            this.chestsArray = base.chestsArray;
            this.decorsArray = base.decorsArray;
            this.benchsArray = base.benchsArray;
            this.generatorsArray = base.generatorsArray;
            this.trapsArray = base.trapsArray;
            this.blockZone = base.blockZone;
            this.isHaveTreesAndStones = base.isHaveTreesAndStones;
        } else{
            this.pickup = new Pickup();
            // this.wallsArray = base.wallsArray;
            // this.floorsArray = new FloorsArray(this.size.width, this.size.height);
            this.floorsArray = new Array(this.size.height).fill().map(
                (x) => x = new Array(this.size.width).fill().map(
                    (elem) => elem = new Floor()
                )
            );

            this.bike = new Bike();
            // this.chestsArray = base.chestsArray;
            // this.decorsArray = base.decorsArray;
            // this.benchsArray = base.benchsArray;
            // this.generatorsArray = base.generatorsArray;
            // this.trapsArray = base.trapsArray;
            const lastLine = this.size.height - 1;
            const lastColumn = this.size.width - 1;
            let pickup = this.pickup;
            // this.blockZone = {lines: [0, lastLine], columns: [0, lastColumn], }
            this.blockZone = new BlockZone(
                [0, this.size.height - 1], 
                [0, this.size.width - 1], 
                [{
                    xStart: pickup.xStart, 
                    yStart: pickup.yStart, 
                    xEnd: pickup.xEnd, 
                    yEnd: pickup.yEnd + 1
                }]
            );
            // this.isHaveTreesAndStones = base.isHaveTreesAndStones;
        }
    }

    update(){

    }

    changeFloor(x, y, type){
        if(!this.blockZone.isCellInBlockZone(x, y)){
            this.floorsArray[y][x].changeFloor(type);
        }
    }
}