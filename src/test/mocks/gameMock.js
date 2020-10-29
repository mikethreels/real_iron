import 'jest-canvas-mock';
import 'phaser';
import { GameScene } from '../../scenes/GameScene';
import { GameOverScene } from '../../Scenes/GameOverScene'
import { BootScene } from '../../Scenes/BootScene';
import { PreloaderScene } from '../../Scenes/PreloaderScene';
import { TitleScene } from '../../Scenes/TitleScene';
import { OptionsScene } from '../../Scenes/OptionsScene';
import { SubmitScore } from '../../Scenes/submitScene';
import { CreditsScene } from '../../Scenes/CreditsScene';
import { Model } from '../../Model';
import { Leaderboard } from '../../scenes/LeaderBoard'
const game = (() => {
  const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'divld',
    dom: {
      createContainer: true,
    },
    physics: {
      default: 'arcade',
      arcade: {
        gravity: { y: 300 },
        debug: false,
      },
    },
    scene: [GameScene,
      GameOverScene,
      BootScene,
      PreloaderScene,
      TitleScene,
      OptionsScene,
      SubmitScore,
      CreditsScene,
      Model,
      Leaderboard,
    ],
  };

  // eslint-disable-next-line no-unused-vars
  const game = new Phaser.Game(config);
  return { game };
})();

export default game;