/* eslint-disable no-undef */
/* eslint-disable import/named */
/* eslint-disable import/no-extraneous-dependencies */
import 'jest-canvas-mock';
import 'phaser';
import { GameScene } from '../../scenes/game_scene';
import { GameOverScene } from '../../scenes/game_over_scene';
import { BootScene } from '../../scenes/boot_scene';
import { PreloaderScene } from '../../scenes/preloader_scene';
import { TitleScene } from '../../scenes/title_scene';
import { OptionsScene } from '../../scenes/options_scene';
import { SubmitScore } from '../../scenes/submit_scene';
import { CreditsScene } from '../../scenes/credits_scene';
import { Model } from '../../model';
import { Leaderboard } from '../../scenes/leader_board';

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