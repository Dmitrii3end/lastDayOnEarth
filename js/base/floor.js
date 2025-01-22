export default class Floor{
    floorType; //-1 - нет инфы, 0 - пусто, 1 - солома, 2 - доски, 3 - камень, 4 - железо, 5 - кирпичь
    
    constructor(floorType = 0){
        this.floorType = floorType;
    }

    changeFloor(type){
        this.floorType = this.floorType == type ? 0 : type;
    }
}