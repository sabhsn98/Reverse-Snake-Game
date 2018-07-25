var game, p1Win, levelTime, p1score = 0, p2score = 0;

game = new Phaser.Game(600, 450, Phaser.AUTO, 'phaser-example');

game.state.add('Menu', Menu);

// Adding the Game state.
game.state.add('Game', Game);

game.state.add('GameOver', GameOver);

// game.state.start('Menu');
game.state.start('Menu');





// var effect;
// var image;
// var mask = new Phaser.Rectangle();
//
// function create() {
//
//     game.stage.backgroundColor = '#000042';
//
//     var floor = game.add.image(0, game.height, 'floor');
//     floor.width = 800;
//     floor.anchor.y = 1;
//
//     effect = game.make.bitmapData();
//     effect.load('atari');
//
//     image = game.add.image(game.world.centerX, game.world.centerY, effect);
//     image.anchor.set(0.5);
//     image.smoothed = false;
//
//     mask.setTo(0, 0, effect.width, game.cache.getImage('raster').height);
//
//     //  Tween the rasters
//     game.add.tween(mask).to( { y: -(mask.height - effect.height) }, 3000, Phaser.Easing.Sinusoidal.InOut, true, 0, 100, true);
//
//     //  Tween the image
//     game.add.tween(image.scale).to( { x: 4, y: 4 }, 3000, Phaser.Easing.Quartic.InOut, true, 0, 100, true);
//
// }
//
// function update() {
//
//     effect.alphaMask('raster', effect, mask);
//
//     image.rotation += 0.01;
//
// }