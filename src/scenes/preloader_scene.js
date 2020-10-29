import 'phaser';

export default class PreloaderScene extends Phaser.Scene {
  constructor () {
    super('Preloader');
  }

  init () {
    this.readyCount = 0;
  }

  preload () {
    // add logo image
    this.add.image(400, 200, 'logo2');

    // load in assets

    var progressBar = this.add.graphics();
    var progressBox = this.add.graphics();
    progressBox.fillStyle(0x222222, 0.8);
    progressBox.fillRect(240, 470, 320, 50);

    var width = this.cameras.main.width;
    var height = this.cameras.main.height;
    var loadingText = this.make.text({
      x: width / 2,
      y: height / 2 + 150,
      text: 'Loading...',
      style: {
        font: '20px monospace',
        fill: '#ffffff'
      }
    });
    loadingText.setOrigin(0.5, 0.5);

    var percentText = this.make.text({
      x: width / 2,
      y: height / 2 + 195,
      text: '0%',
      style: {
        font: '18px monospace',
        fill: '#ffffff'
      }
    });
    percentText.setOrigin(0.5, 0.5);

    var assetText = this.make.text({
      x: width / 2,
      y: height / 2 + 250,
      text: '',
      style: {
        font: '18px monospace',
        fill: '#ffffff'
      }
    });
    assetText.setOrigin(0.5, 0.5);

    // update progress bar
    this.load.on('progress', function (value) {
      percentText.setText(parseInt(value * 100) + '%');
      progressBar.clear();
      progressBar.fillStyle(0xffffff, 1);
      progressBar.fillRect(250, 480, 300 * value, 30);
    });

    // update file progress text
    this.load.on('fileprogress', function (file) {
      assetText.setText('Loading asset: ' + file.key);
    });

    // remove progress bar when complete
    this.load.on('complete', function () {
      progressBar.destroy();
      progressBox.destroy();
      loadingText.destroy();
      percentText.destroy();
      assetText.destroy();
      this.ready();
    }.bind(this));

    this.timedEvent = this.time.delayedCall(3000, this.ready, [], this);

    // load assets needed in our game
    this.load.image('blueButton1', '../src/assets/ui/blue_button02.png');
    this.load.image('blueButton2', '../src/assets/ui/blue_button03.png');
    this.load.image('phaserLogo', '../src/assets/logo.png');
    this.load.image('box', '../src/assets/ui/grey_box.png');
    this.load.image('checkedBox', '../src/assets/ui/blue_boxCheckmark.png');
    this.load.audio('bgMusic', ['../src/assets/TownTheme.mp3']);
    this.load.image('sky', '../src/assets/skill-desc_0003_bg.png');
    this.load.image('buildings', '../src/assets/skill-desc_0001_buildings.png');
    this.load.image('farBuildings', '../src/assets/skill-desc_0002_far-buildings.png');
    this.load.image('foreground', '../src/assets/skill-desc_0000_foreground.png');
    this.load.image('cityforeground', '../src/assets/CityBackground/City_Foreground.png');
    this.load.image('ground', '../src/assets/platform.png');
    this.load.image('collect1', '../src/assets/brawlbot_arm_fist_l.png')
    this.load.image('collect2', '../src/assets/brawlbot_chest.png')
    this.load.image('collect3', '../src/assets/brawlbot_head.png')
    this.load.image('collect4', '../src/assets/brawlbot_leg_foot_l.png')
    this.load.image('collect5', '../src/assets/brawlbot_pelvis.png')
    this.load.image('star', '../src/assets/star.png');
    this.load.image('invisibleWall', '../src/assets/invisible_wall.png')
    this.load.html('form_for_username', '../src/assets/form.html')
    this.load.bitmapFont('arcade', '../src/assets/arcade.png', '../src/assets/arcade.xml');
    this.load.spritesheet('bomb', 
        '../src/assets/hoverbot1sheet.png',
        { frameWidth: 28, frameHeight: 30 }
    );
    this.load.spritesheet('dude', 
        '../src/assets/dude.png',
        { frameWidth: 62, frameHeight: 62 }
    );
  }

  ready () {
    this.scene.start('Title');
    this.readyCount++;
    if (this.readyCount === 2) {
      this.scene.start('Title');
    }
  }
};