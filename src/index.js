import 'phaser';
import config from './config/config';
import GameScene from './scenes/gameScene';
import GameOverScene from './scenes/gameOverScene'
import BootScene from './scenes/bootScene';
import PreloaderScene from './scenes/preloaderScene';
import TitleScene from './scenes/titleScene';
import OptionsScene from './scenes/optionsScene';
import SubmitScore from './scenes/submitScene';
import CreditsScene from './scenes/creditsScene';
import Model from './model';
import Leaderboard from './scenes/leaderBoard'
 
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