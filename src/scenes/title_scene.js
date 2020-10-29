import 'phaser';
import config from '../config/config';
import Button from '../objects/button';
import { createAligned } from '../objects/create_aligned'
 
export default class TitleScene extends Phaser.Scene {
  constructor () {
    super('Title');
  }
 
  create () {
    this.cameras.main.setBackgroundColor('#fff');
    createAligned(this, 3, 'cityforeground', 0, 1)
    // Game
    this.gameButton = new Button(this, config.width/2, config.height/2 - 150, 'blueButton1', 'blueButton2', 'Play', 'Game');
   
    // Options
    this.optionsButton = new Button(this, config.width/2, config.height/2 - 50, 'blueButton1', 'blueButton2', 'Options', 'Options');
   
    // Credits
    this.creditsButton = new Button(this, config.width/2, config.height/2 + 50, 'blueButton1', 'blueButton2', 'Credits', 'Credits');

    // LeaderBoard
    this.boardButton = new Button(this, config.width/2, config.height/2 + 150, 'blueButton1', 'blueButton2', 'Scores', 'Leaderboard');
   
    this.model = this.sys.game.globals.model;
    if (this.model.musicOn === true && this.model.bgMusicPlaying === false) {
      this.bgMusic = this.sound.add('bgMusic', { volume: 0.5, loop: true });
      this.bgMusic.play();
      this.model.bgMusicPlaying = true;
      this.sys.game.globals.bgMusic = this.bgMusic;
    }
  }
};
