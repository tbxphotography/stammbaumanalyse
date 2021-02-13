/*
 * Phaser Hello World
 */

var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 }
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);
function preload ()
{

}

function create ()
{
    var text1=this.add.text(0, 0, 'Hello World', { fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif' });
   text1.setInteractive();
   text1.on('pointerdown', () => { 
//add node in baum

    });
}

function update()
{
}

