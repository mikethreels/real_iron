import 'phaser';
import config from './Config/config';
import GameScene from './Scenes/GameScene';
import GameOverScene from './Scenes/GameOverScene'
import BootScene from './Scenes/BootScene';
import PreloaderScene from './Scenes/PreloaderScene';
import TitleScene from './Scenes/TitleScene';
import OptionsScene from './Scenes/OptionsScene';
import SubmitScore from './Scenes/submitScene';
import CreditsScene from './Scenes/CreditsScene';
import Model from './Model';
import Leaderboard from './Scenes/LeaderBoard'
 
class Game extends Phaser.Game {
  constructor () {
    super(config);
    const model = new Model();
    this.globals = { model, bgMusic: null };
    this.scene.add('Boot', BootScene);
    this.scene.add('Preloader', PreloaderScene);
    this.scene.add('Title', TitleScene);
    this.scene.add('Options', OptionsScene);
    this.scene.add('Credits', CreditsScene);
    this.scene.add('Game', GameScene);
    this.scene.add('GameOver', GameOverScene);
    this.scene.add('SubmitScore', SubmitScore);
    this.scene.add('Leaderboard', Leaderboard);
    this.scene.start('Boot');
  }
}
 
window.game = new Game();