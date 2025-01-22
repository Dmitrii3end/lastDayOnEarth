export default class BlockZone{
    lines;
    columns;
    zones = []; // {xStart, yStart, xEnd, yEnd}

    constructor(linesArray = [], columnsArray = [], zonesArray){
        this.lines = new Set(linesArray);
        this.columns = new Set(columnsArray);

        if (zonesArray.length){
            for(let i = 0; i < zonesArray.length; i++){
                this.zones.push(zonesArray[i]);
            }
        }
    }

    isCellInBlockZone(x, y){
        if(this.lines.has(y)){
            return true;
        }

        if(this.columns.has(x)){
            return true;
        }
        
        for(let i = 0; i < this.zones.length; i++){
            if(
                (y >= this.zones[i].yStart) && 
                (y <= this.zones[i].yEnd) && 
                
                (x >= this.zones[i].xStart) && 
                (x <= this.zones[i].xEnd)
            ){
                return true;
            }
        }
        
        return false;
    }

    isCrossingArea(xStart, yStart, xEnd, yEnd){
        return false;
    }
}