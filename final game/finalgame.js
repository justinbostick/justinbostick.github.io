var player;
var game;
var background;
var change = 5;
var meteor;
var meteors;
var amt = 7;

var gui;
var score = 0;

checkCollisions = function(indexMeteors) {
    if (player.collidesWith(meteors[indexMeteors])) {
        //meteors.reset();
        score -= 100
    } else {
        score++
    }
}


function setupMeteors() {
    meteors = [];

    for (var i = 0; i < amt; i++) {
        meteors.push(new Meteor());
    }

}


function updateScore() {

    gui.innerHTML = "Score:" + score 

}


function restart() {
    //document.location.href = "";
    time = 0;
    timer.reset();
    score = 0;
    scene.start();
}



function init() {
    gui = document.getElementById('gui')
    game = new Scene();
    time = new Timer();
    //meteor = new Meteor();
    setupMeteors()
    background = new Sprite(game, 'https://wallpaperstudio10.com/static/wpdb/wallpapers/1920x1080/167457.jpg', 1200, 1000);
    background.setSpeed(0);
    player = new Player();
    player.setPosition(player.height, game.height / 1.2);
    player.setSpeed(0);
    player.loadAnimation(1152, 256, 128, 128);
    player.generateAnimationCycles();
    player.setAnimationSpeed(500);
    gameMusic = new Sound('music.mp3')
    gameMusic.play()
    game.start();

}

function update() {
    game.clear();
    background.update();
    updateScore();


    //For each loop will interate through each object in an array


    for (var i = 0; i < meteors.length; i++) {
        meteors[i].fall();
        checkCollisions(i);
        meteors[i].update();

    }
    player.checkKeys();
    player.update();

    gameMusic.update();
}