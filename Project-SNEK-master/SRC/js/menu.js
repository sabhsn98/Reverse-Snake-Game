var music;
var Menu = {

    preload : function() {
        // Load all the needed resources for the menu.
        game.load.image('menu', './assets/images/menu600x450.png');
        game.load.audio('bg-music', './assets/music/bgmusic.ogg');
    },

    create: function () {

        // Add menu screen.
        // It will act as a button to start the game.
        this.add.button(0, 0, 'menu', this.startGame, this);
        music = game.add.audio('bg-music');
        music.volume -= 0.7
        music.play();

    },

    startGame: function () {

        // Change the state to the actual game.
        
        this.state.start('Game');

    }

};