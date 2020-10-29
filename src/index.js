import 'phaser';
import { config } from './config/config';
import { GameScene } from './scenes/game_scene';
import { GameOverScene } from './scenes/game_over_scene'
import { BootScene } from './scenes/boot_scene';
import { PreloaderScene } from './scenes/preloader_scene';
import { TitleScene } from './scenes/title_scene';
import { OptionsScene } from './scenes/options_scene';
import { SubmitScore } from './scenes/submit_scene';
import { CreditsScene } from './scenes/credits_scene';
import { Model } from './model';
import { Leaderboard } from './scenes/leader_board'
 
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