import 'phaser';
import config from '../config/config';
import Button from '../objects/button';
import { createAligned } from '../objects/create_aligned';

export default class GameOverScene extends Phaser.Scene {
  constructor() {
    super('GameOver');
  }

  create() {
    this.cameras.main.setBackgroundColor('#fff');
    createAligned(this, 3, 'cityforeground', 0, 1)
    const score = localStorage.getItem('score');
    this.last = this.add.text(0, 0, `Game Over`, {
      fontSize: '35px',
      fill: '#000',
      backgoundColor: '#fff',
      align: 'center',
    });

    this.score = this.add.text(200, 250, `You scored ${score} points`, {
      fontSize: '35px',
      fill: '#000',
      backgoundColor: '#fff',
      align: 'center',
    });

    this.zone = this.add.zone(
      config.width / 2,
      config.height / 2 - 100,
      config.width, config.height,
    );


    Phaser.Display.Align.In.Center(
      this.last,
      this.zone,
    );
    
    
    // const scoreText = this.add.text(0, -40, `Score: ${score}`, {
    //   fontSize: '32px',
    //   fill: '#fff',
    //   backgroundColor: '#fff',
    //   align: 'center',
    // });
    

    // const textScore = localStorage.getItem('score') !== null ? JSON.parse(localStorage.getItem('score')) : 0;
    // scoreText.setText(`Score: ${textScore}`);
    this.scoreBtn = new Button(this, config.width / 2, config.height / 2 + 50, 'blueButton1', 'blueButton2', 'Submit', 'SubmitScore');
    this.gameBtn = new Button(this, config.width / 2, config.height / 2 + 125, 'blueButton1', 'blueButton2', 'Menu', 'Title');
    this.leaderboardBtn = new Button(this, config.width / 2, config.height / 2 + 200, 'blueButton1', 'blueButton2', 'Scores', 'Leaderboard');

    // Phaser.Display.Align.In.Center(
    //   scoreText,
    //   this.scoreBtn,
    //   0,
    //   -75,
    // );
  }
}