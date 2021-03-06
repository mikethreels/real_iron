/* eslint-disable no-alert */
import Phaser from 'phaser';
import ApiModule from '../objects/api_data';
import Button from '../objects/button';


class Leaderboard extends Phaser.Scene {
  constructor() {
    super('Leaderboard');
  }

  create() {
    this.cameras.main.setBackgroundColor('#fff');
    this.menuButton = new Button(this, 500, 550, 'blueButton1', 'blueButton2', 'Menu', 'Title');
    const loadMessage = this.add.bitmapText(100, 100, 'arcade', 'Fetching highest scores...').setTint(0x000000);
    ApiModule.readScore().then((scores) => {
      const highestValues = scores.sort((a, b) => b.score - a.score).slice(0, 5);
      loadMessage.destroy();
      this.add.bitmapText(100, 50, 'arcade', 'RANK  SCORE   NAME').setTint(0x000000).setScale(0.5);
      highestValues.forEach((currentScore, index) => {
        this.add.bitmapText(100, 90 * (index + 1), 'arcade', ` ${index + 1}     ${currentScore.score}   ${currentScore.user}`).setTint(0x000000).setScale(0.5);
      });
    }).catch(() => {
      alert('Unable to get the leaderboard');
    });
  }
}

export default Leaderboard;