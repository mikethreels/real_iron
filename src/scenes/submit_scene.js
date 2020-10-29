import Phaser from 'phaser';
import ApiModule from '../objects/api_data';
import { createAligned } from '../objects/create_aligned';

export default class SubmitScore extends Phaser.Scene {
  constructor() {
    super('SubmitScore');
  }

  create() {
    this.cameras.main.setBackgroundColor('#fff');
    createAligned(this, 3, 'cityforeground', 0, 1)

    const element = this.add.dom(400, 600).createFromCache('form_for_username');
    element.setPerspective(800);
    element.addListener('click');
    element.on('click', (event) => {
      if (event.target.name === 'confirm') {
        const username = element.getChildByName('username');
        if (username.value !== '') {
          localStorage.setItem('username', username.value);
          const loadMessage = this.add.bitmapText(100, 100, 'arcade', 'Saving your score...').setTint(0x000000);
          ApiModule.writeScore(username.value, localStorage.getItem('score')).then(() => {
            loadMessage.destroy();
            element.scene.scene.start('Title');
          }).catch(() => {
            alert('Error. Unable to save your score');
          });
        } else {
          element.scene.tweens.add({
            targets: submitLabel,
            alpha: 0.1,
            duration: 300,
            ease: 'Power2',
            yoyo: true,
          });
        }
      }
    });

    this.tweens.add({
      targets: element,
      y: 300,
      duration: 3000,
      ease: 'Power3',
    });
  }
}