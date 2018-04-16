var scene;
var paddle;
var paddle2;
var CHANGE = 5;
var ball;




function checkCollisions() {

    if (ball.collidesWith(paddle)) {

        ball.changeYby(change);
        ball.changeXBy(change);
    } else if (ball.collidesWith(paddle2)) {
        ball.changeYby(change);
        ball.changeXby(change);

    }
}





paddle.checkKeys = function() {
    if (keysDown[K_UP])
        paddle.changeYby(-CHANGE);
    if (paddle.y - paddle.width / 2 < 0)

        tPaddle.setY(paddle.width / 2);

    if (keysDown[K_DOWN])
        paddle.changeYby(CHANGE);
    if (tPaddle.y + tPaddle.width / 2 > scene.height)
        tPaddle.setY(scene.height - tPaddle.width / 2);
}


function init() {
    scene = new Scene();
    scene.setSize(600, 300);
    paddle = new Sprite(scene, "spongebob.png", 700, 200);
    paddle2 = new Sprite(scene, "plankton.png", 700, 200);
    paddle2.setSpeed(10);
    paddle.setAngle(180);
    paddle2.setAngle(180);
    paddle.setSpeed(0);
    paddle2.setSpeed(20);
    paddle2.setBoundAction(BOUNCE);
    paddle.setPosition(15, scene.height / 2);
    paddle2.setPosition(scene.width - 20, scene.height / 2);
    ball = new Sprite(scene, "krabby patty.png", 300, 300);
    ball.setMoveAngle(60);
    ball.setSpeed(8);
    ball.setBoundAction(BOUNCE);


    scene.start();

}



function update() {

    scene.clear();
   
    
    paddle.update();
    paddle2.update();
    
    ball.update();
    
    checkCollisions();
   
}