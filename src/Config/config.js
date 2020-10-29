import 'phaser';
 
export default {
  type: Phaser.AUTO,
  parent: 'phaser-example',
  width: 800,
  height: 600,
  // autoCenter: Phaser.Scale.CENTER_BOTH,
  backgroundColor: 'black',
  parent: 'phaser-container',
  dom: {
    createContainer: true,
  },
  physics: {
    default: 'arcade',
    arcade: {
        gravity: { y: 300 },
        debug: false
    }
  },
  pixelArt: true,
  roundPixels: true,
};