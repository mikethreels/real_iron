/* eslint-disable max-len */
/* eslint-disable no-mixed-operators */
/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */
import 'phaser';
import { createAligned } from '../objects/create_aligned';
import { createGround } from '../objects/create_ground';
import { createStars } from '../objects/create_stars';
import { createBots } from '../objects/create_bots';

export default class GameScene extends Phaser.Scene {
  constructor() {
    super('Game');
    this.platforms = null;
    this.wall = null;
    this.player = null;
    this.stars = null;
    this.score = 0;
    this.scoreText = null;
    this.bots = null;
    this.cursors = null;
    this.over = false;
  }

  create() {
    localStorage.setItem('score', this.score);
    createAligned(this, 1, 'sky', 0, 4.2);

    createAligned(this, 3, 'farBuildings', 0.33, 4);

    createAligned(this, 3, 'buildings', 0.66, 4);

    createAligned(this, 3, 'foreground', 1, 4);

    this.platforms = this.physics.add.staticGroup();
    this.wall = this.physics.add.staticGroup();
    const count1 = 0;
    createGround(this.platforms, 100, 'ground', count1, this.wall, 'invisibleWall');

    this.player = this.physics.add.sprite(100, 50, 'dude');
    this.player.setBounce(0.0);

    this.player.body.setGravityY(200);
    this.cameras.main.startFollow(this.player, false, 1, 1, -100, 100);

    this.anims.create({
      key: 'left',
      frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: 'turn',
      frames: [{ key: 'dude', frame: 0 }],
      frameRate: 20,
    });


    this.anims.create({
      key: 'right',
      frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1,
    });

    this.physics.add.collider(this.player, this.platforms);

    this.cursors = this.input.keyboard.createCursorKeys();

    this.stars = this.physics.add.group();
    createStars(this.stars, 'star', 100);
    this.stars.children.iterate((child) => {
      child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8)).setGravityY(-300);
    });

    this.physics.add.overlap(this.player, this.stars, collectStar, null, this);
    function collectStar(star) {
      star.disableBody(true, true);
      this.score += 10;
      this.scoreText.setText(`Score: ${this.score}`);
    }

    this.scoreText = this.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#fff' })
      .setScrollFactor(0);

    this.bots = this.physics.add.group();

    this.physics.add.collider(this.bots, this.platforms);
    this.physics.add.collider(this.bots, this.wall);

    this.physics.add.collider(this.player, this.bots, hitBomb, null, this);
    function hitBomb() {
      this.over = true;
    }

    createBots(this.bots, 'bomb', 1000);
  }

  update() {
    if (this.cursors.left.isDown) {
      this.player.setVelocityX(-340);
      this.player.flipX = true;
      this.player.anims.play('left', true);
    } else if (this.cursors.right.isDown) {
      this.player.setVelocityX(340);
      this.player.flipX = false;
      this.player.anims.play('right', true);
    } else {
      this.player.setVelocityX(0);

      this.player.anims.play('turn');
    }

    if (this.player.body.touching.down && this.player.jumpCount !== 0) {
      this.player.jumpCount = 0;
    }

    if (Phaser.Input.Keyboard.JustDown(this.cursors.up) && this.cursors.up.isDown && this.player.jumpCount < 2) {
      this.player.jumpCount += 1;
      this.player.setVelocityY(-440);
    }

    if (this.over) {
      localStorage.setItem('score', this.score);
      this.over = false;
      this.scene.start('GameOver');
    }
  }
}
