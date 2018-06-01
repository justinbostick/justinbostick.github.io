function Player() {
    tPlayer = new Sprite(game, 'robot.png', 100, 100);
    //tPlayer.setPosition(player.height,game.height);

    tPlayer.checkKeys = function() {
        if (keysDown[K_LEFT]) {
            this.setSpeed(25);
            //character.playAnimation()
            this.setMoveAngle(270);
            //character.setCurrentCycle();

        } else if (keysDown[K_RIGHT]) {
            this.setSpeed(7);
            //character.playAnimation()
            this.setMoveAngle(90);
            //character.setCurrentCycle();
        } else {
            this.setSpeed(0)
        }

    }

    return tPlayer;

}

function Meteor() {
    tMeteor = new Sprite(game, "meteor.png", 50, 50)
    tMeteor.setSpeed(3);


    tMeteor.fall = function() {
        this.setSpeed(75);
        this.setAngle(-130);
        this.setMoveAngle(-130);

    }
    
    return tMeteor;

}