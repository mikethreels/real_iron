import 'phaser';
import { Preload } from './PreloaderScene'; 

export default class GameScene extends Phaser.Scene {
  constructor () {
    super('Game');
    this.platforms = null;
    this.wall = null;
    this.player = null;
    this.stars = null;
    this.score = 0;
    this.scoreText = null;
    this.bots = null;
    this.cursors = null;
    this.over = null;
  }
 
  preload () {
    this.load.image('sky', '../assets/background/skill-desc_0003_bg.png');
    this.load.image('buildings', '../assets/background/skill-desc_0001_buildings.png');
    this.load.image('farBuildings', '../assets/background/skill-desc_0002_far-buildings.png');
    this.load.image('foreground', '../assets/background/skill-desc_0000_foreground.png');
    this.load.image('ground', '../assets/background/platform.png');
    this.load.image('collect1', '../assets/collect/brawlbot_arm_fist_l.png')
    this.load.image('collect2', '../assets/collect/brawlbot_chest.png')
    this.load.image('collect3', '../assets/collect/brawlbot_head.png')
    this.load.image('collect4', '../assets/collect/brawlbot_leg_foot_l.png')
    this.load.image('collect5', '../assets/collect/brawlbot_pelvis.png')
    this.load.image('star', '../assets/collect/star.png');
    this.load.image('invisibleWall', '../assets/background/invisible_wall.png')
    this.load.spritesheet('bomb', 
        '../assets/enemy/hoverbot1sheet.png',
        { frameWidth: 28, frameHeight: 30 }
    );
    this.load.spritesheet('dude', 
        '../assets/player/dude.png',
        { frameWidth: 62, frameHeight: 62 }
    );
  }
 
  create () {
    const width = this.scale.width;
    const height = this.scale.height
    createAligned(this, 1, 'sky', 0, 4.2)
  
    createAligned(this, 3, 'farBuildings', 0.33, 4)
  
    createAligned(this, 3, 'buildings', 0.66, 4)
  
    createAligned(this, 3, 'foreground', 1, 4)
  
    this.platforms = this.physics.add.staticGroup();
    this.wall = this.physics.add.staticGroup();
    let count1 = 0;
    createGround(this.platforms, 100, 'ground', count1, this.wall, 'invisibleWall')
    
    this.player = this.physics.add.sprite(100, 50, 'dude');
    this.player.setBounce(0.0);
  
    this.player.body.setGravityY(200)
    this.cameras.main.startFollow(this.player, false, 1, 1, -100, 100);
  
    this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
        frameRate: 10,
        repeat: -1
    });
  
    this.anims.create({
        key: 'turn',
        frames: [ { key: 'dude', frame: 0 } ],
        frameRate: 20
    });
  
  
    this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
        frameRate: 10,
        repeat: -1
    });
  
    this.physics.add.collider(this.player, this.platforms);
  
    this.cursors = this.input.keyboard.createCursorKeys();
  
    this.stars = this.physics.add.group();
    createStars(this.stars, 'star', 100);
    this.stars.children.iterate(function (child) {
  
        child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8)).setGravityY(-300);
  
    });
  
    this.physics.add.overlap(this.player, this.stars, collectStar, null, this);
    function collectStar (player, star)
    {
        star.disableBody(true, true);
        this.score += 10;
        this.scoreText.setText('Score: ' + this.score);
    }
  
    this.scoreText = this.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#fff' })
      .setScrollFactor(0);
  
    this.bots = this.physics.add.group();
  
    this.physics.add.collider(this.bots, this.platforms);
    this.physics.add.collider(this.bots, this.wall);
  
    this.physics.add.collider(this.player, this.bots, hitBomb, null, this);
    function moveEnemy(enemy,platform){
      if(enemy.xSpeed>0 && enemy.x>platform.x+platform.width/2 || enemy.xSpeed<0 && enemy.x<platform.x-platform.width/2){
        enemy.xSpeed*=-1;
      }	
    }
    function hitBomb (player, bomb)
    {
        this.physics.pause();
  
        player.setTint(0xff0000);
  
        player.anims.play('turn');
  
        this.over = this.add.text(300, 300, 'score: 0', { fontSize: '50px', fill: 'red' })
        .setScrollFactor(0);
        this.over.setText("Game Over");
  
        gameOver = true;
    }
    var x = (this.player.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);
    createBots(this.bots, 'bomb', 1000);
    
  }

  update (){
    if (this.cursors.left.isDown)
    {
        this.player.setVelocityX(-240);
        this.player.flipX = true;
        this.player.anims.play('left', true);
    }
    else if (this.cursors.right.isDown)
    {
   
        this.player.setVelocityX(240);
        this.player.flipX = false;
        this.player.anims.play('right', true);
    }
    else
    {
        this.player.setVelocityX(0);

        this.player.anims.play('turn');
    }
    
    if (this.player.body.touching.down && this.player.jumpCount !== 0) {
      this.player.jumpCount = 0
    }

    if (Phaser.Input.Keyboard.JustDown(this.cursors.up) && this.cursors.up.isDown && this.player.jumpCount < 2){
      this.player.jumpCount ++;
      this.player.setVelocityY(-440);
    }  
  };

};

