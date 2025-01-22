export default class Pickup{
    xStart;
    yStart;
    xEnd;
    yEnd;
    isHaveInfo;
    cellsArray;
    cellsCount;
    
    constructor(xStart = 13, yStart = 14, xEnd = 16, yEnd = 18, isHaveInfo = false, cellsCount = 10, cellsArray){
        this.xStart = xStart;
        this.yStart = yStart;
        this.xEnd = xEnd;
        this.yEnd = yEnd;
        this.isHaveInfo = isHaveInfo;
        this.cellsCount = cellsCount;
        this.cellsArray = cellsArray;
    }
}