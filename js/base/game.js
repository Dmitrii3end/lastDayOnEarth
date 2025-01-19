export default class Game{
    constructor({base, viewBase}){
        this.base = base;
        this.viewBase = viewBase;

        this.loop = this.loop.bind(this);
    }

    start(){
        //load img
        //add eventlisseners
        this.viewBase.init(this.base);

        requestAnimationFrame(this.loop);
    }

    loop(){
        //get input
        
        this.base.update();
        this.viewBase.update();

        requestAnimationFrame(this.loop);
    }
}