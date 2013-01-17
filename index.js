enchant();

var SENSYA_1 = "http://enchantjs.com/assets/images/chara3.gif";

window.onload = function() {
    var game = new Game();
    game.preload(SENSYA_1);
    game.onload = function() {
	var scene = game.rootScene;
	scene.backgroundColor = "black";
	
	var sprite = new Sprite(32, 32);
	sprite.moveTo(100, 100);
	sprite.image = game.assets[SENSYA_1];
	scene.addChild(sprite);
	
	var SPEED = 3;
	
	sprite.onenterframe = function() {
	    var input = game.input;
	    if (input.left)  { this.x -= SPEED; }
	    if (input.right) { this.x += SPEED; }
	    if (input.up)    { this.y -= SPEED; }
	    if (input.down)  { this.y += SPEED; }
	};
    };
    
    game.start();
};

