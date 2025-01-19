import Base from "./base.js";
import ViewBase from "./viewBase.js";
import Game from "./game.js";


const canvas = document.querySelector('#base');

const game = new Game({
    base: new Base(),
    viewBase: new ViewBase(canvas)
});

game.start();


console.log(game);
