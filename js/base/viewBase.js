export default class ViewBase{
    width;
    height;
    cellWidth;
    cellHeight;
    canvas;
    canvasWidth;
    canvasHeight;
    context;
    fieldColor = '#008000';
    gridColor = '#000000';
    gridWidth = 0.1;

    constructor(canvas, width, height){
        this.canvas = canvas;
        this.context = canvas.getContext('2d');

        // this.width = width;
        // this.height = height;

        this.canvasWidth = canvas.clientWidth;
        this.canvasHeight = canvas.clientHeight;

        this.canvas.width = this.canvasWidth;
        this.canvas.height = this.canvasHeight;
    }
    
    init(base){
        this.width = base.size.width;
        this.height = base.size.height;
        
        this.cellWidth = this.canvasWidth / this.width;
        this.cellHeight = this.canvasHeight / this.height;
    }

    update(base){
        this.clearField();
        
        this.drawFloor(base.floorsArray);
        
        this.drawGrid();
    }

    clearField(){
        this.context.fillStyle = this.fieldColor;
        this.context.fillRect(0, 0, this.canvasWidth, this.canvasHeight);
    }

    drawGrid(){
        this.context.strokeStyle = this.gridColor;
        this.context.lineWidth = this.gridWidth;
        

        for (let i = 1; i < this.height; i++){
            this.context.moveTo(0, i * this.cellHeight);
            

            this.context.lineTo(this.canvasWidth, i * this.cellHeight);
        }

        for (let i = 1; i < this.width; i++){
            this.context.moveTo(i * this.cellWidth, 0);

            this.context.lineTo(i * this.cellWidth, this.canvasHeight);
        }

        this.context.stroke();
    }

    drawFloor(floorArray){
        this.context.fillStyle = '#ffa500'; // добавить переменную

        for(let i = 0; i < floorArray.length; i++){
            for(let j = 0; j < floorArray[i].length; j++){
                if(floorArray[i][j].floorType){
                    this.context.fillRect(j * this.cellWidth, i * this.cellHeight, this.cellWidth, this.cellHeight);
                }
            }
        }
    }
}