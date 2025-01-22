import Floor from "./floor.js";

export default class FloorsArray{
    floors;

    constructor(columns, lines){
        // this.floors = new Array(lines).fill().map((x) => x = new Array(columns).fill().map((elem) => elem = new Floor()));
        this.floors = new Array(lines).fill().map((x) => x = new Array(columns).fill().map((elem) => elem = 0));
    }

    changeFloor(x, y, type){
        this.floors[y][x] = this.floors[y][x] == type ? 0 : type;
    }
}