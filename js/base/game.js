export default class Game{
    currentTool = 'floor';
    allTool = [{tool: 'click', nameRu: 'стрелка', nameEng: 'arrow'}, {tool: 'floor', nameRu: 'пол', nameEng: 'floor'}];
    currentState; // build / raid
    currentFloorType = 1; // для теста 1, а так на старте 0
    allFloorType = [{type: -1, nameRu: 'неизветно', nameEng: 'unknown'}, {type: 0, nameRu: 'пусто', nameEng: 'empty'}, {type: 1, nameRu: 'неизветно', nameEng: 'unknown'},]; // доделать

    constructor({base, viewBase, state = 'build'}){
        this.base = base;
        this.viewBase = viewBase;
        this.currentState = state;

        this.loop = this.loop.bind(this);
    }

    start(){
        //load img
        this.viewBase.init(this.base);
        // add menu
        //add eventlisseners
        this.viewBase.canvas.addEventListener('click', (e) => this.click(e))

        requestAnimationFrame(this.loop);
    }

    click(event){
        const x = event.offsetX;
        const y = event.offsetY;

        const cellX = Math.floor(x / this.viewBase.cellWidth);
        const cellY = Math.floor(y / this.viewBase.cellHeight);

        console.log(event);

        switch(this.currentTool){
            case 'click': {
                console.log(event.offsetX);

                break;
            }
            case 'floor': {
                this.base.changeFloor(cellX, cellY, this.currentFloorType);

                console.log(this.base.floorsArray);

                break;
            }
        }
    }

    loop(){
        //get input
        
        this.base.update();
        this.viewBase.update(this.base);

        requestAnimationFrame(this.loop);
    }
}