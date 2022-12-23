class LoadScene extends Phaser.Scene {
  constructor() {
    super({
      key: "LoadScene",
    });
  }

  preload() {
    this.load.atlas("load", "assets/loadAnims/loadAnim.png", "assets/loadAnims/loadAnim.json");
    this.load.atlas("load2", "assets/loadAnims/loadAnim2.png", "assets/loadAnims/loadAnim2.json");

    this.load.atlas("tick", "assets/anims/tickAnim.png", "assets/anims/tickAnim.json");
    this.load.atlas("cross", "assets/anims/crossAnim.png", "assets/anims/crossAnim.json");

    this.load.atlas("cross", "assets/anims/crossAnim.png", "assets/anims/crossAnim.json");

    this.load.atlas("sidebarAnim", "assets/anims/sidebarAnim.png", "assets/anims/sidebarAnim.json");


    this.load.multiatlas("confetti", "assets/anims/confettiAnim.json", "assets/anims/");

    this.load.multiatlas("startAnim", "assets/startAnim/startSceneAnim.json", "assets/startAnim/");

  }

  simAssetsLoad() {

    // anims
    this.load.image('crossAnim','assets/anims/crossAnim.png');
    this.load.image('sidebarAnim','assets/anims/sidebarAnim.png');
    this.load.image('tickAnim','assets/anims/tickAnim.png');

    // GameScene
    this.load.image('background','assets/GameScene/background.png');
    this.load.image('scoreMeter','assets/GameScene/scoreMeter.png');
    this.load.image('back_master_A','assets/GameScene/back_master_A.png');
    this.load.image('back_master_B','assets/GameScene/back_master_B.png');
    this.load.image('back_master_C','assets/GameScene/back_master_C.png');
    this.load.image('back_master_D','assets/GameScene/back_master_D.png');
    this.load.image('back_master_E','assets/GameScene/back_master_E.png');
    this.load.image('back_master_F','assets/GameScene/back_master_F.png');
    this.load.image('back_option1_A','assets/GameScene/back_option1_A.png');
    this.load.image('back_option1_B','assets/GameScene/back_option1_B.png');
    this.load.image('back_option1_C','assets/GameScene/back_option1_C.png');
    this.load.image('back_option1_D','assets/GameScene/back_option1_D.png');
    this.load.image('back_option1_E','assets/GameScene/back_option1_E.png');
    this.load.image('back_option1_F','assets/GameScene/back_option1_F.png');
    this.load.image('back_option2_A','assets/GameScene/back_option2_A.png');
    this.load.image('back_option2_B','assets/GameScene/back_option2_B.png');
    this.load.image('back_option2_C','assets/GameScene/back_option2_C.png');
    this.load.image('back_option2_D','assets/GameScene/back_option2_D.png');
    this.load.image('back_option2_E','assets/GameScene/back_option2_E.png');
    this.load.image('back_option2_F','assets/GameScene/back_option2_F.png');
    this.load.image('back_option3_A','assets/GameScene/back_option3_A.png');
    this.load.image('back_option3_B','assets/GameScene/back_option3_B.png');
    this.load.image('back_option3_C','assets/GameScene/back_option3_C.png');
    this.load.image('back_option3_D','assets/GameScene/back_option3_D.png');
    this.load.image('back_option3_E','assets/GameScene/back_option3_E.png');
    this.load.image('back_option3_F','assets/GameScene/back_option3_F.png');
    this.load.image('back_option4_A','assets/GameScene/back_option4_A.png');
    this.load.image('back_option4_B','assets/GameScene/back_option4_B.png');
    this.load.image('back_option4_C','assets/GameScene/back_option4_C.png');
    this.load.image('back_option4_D','assets/GameScene/back_option4_D.png');
    this.load.image('back_option4_E','assets/GameScene/back_option4_E.png');
    this.load.image('back_option4_F','assets/GameScene/back_option4_F.png');
    this.load.image('border_green','assets/GameScene/border_green.png');
    this.load.image('border_purple','assets/GameScene/border_purple.png');
    this.load.image('border_red','assets/GameScene/border_red.png');
    this.load.image('button_confirm','assets/GameScene/button_confirm.png');
    this.load.image('Hover_button_confirm','assets/GameScene/Hover_button_confirm.png');
    this.load.image('front_master_A','assets/GameScene/front_master_A.png');
    this.load.image('front_master_B','assets/GameScene/front_master_B.png');
    this.load.image('front_master_C','assets/GameScene/front_master_C.png');
    this.load.image('front_master_D','assets/GameScene/front_master_D.png');
    this.load.image('front_master_E','assets/GameScene/front_master_E.png');
    this.load.image('front_master_F','assets/GameScene/front_master_F.png');
    this.load.image('front_option1_A','assets/GameScene/front_option1_A.png');
    this.load.image('front_option1_B','assets/GameScene/front_option1_B.png');
    this.load.image('front_option1_C','assets/GameScene/front_option1_C.png');
    this.load.image('front_option1_D','assets/GameScene/front_option1_D.png');
    this.load.image('front_option1_E','assets/GameScene/front_option1_E.png');
    this.load.image('front_option1_F','assets/GameScene/front_option1_F.png');
    this.load.image('front_option2_A','assets/GameScene/front_option2_A.png');
    this.load.image('front_option2_B','assets/GameScene/front_option2_B.png');
    this.load.image('front_option2_C','assets/GameScene/front_option2_C.png');
    this.load.image('front_option2_D','assets/GameScene/front_option2_D.png');
    this.load.image('front_option2_E','assets/GameScene/front_option2_E.png');
    this.load.image('front_option2_F','assets/GameScene/front_option2_F.png');
    this.load.image('front_option3_A','assets/GameScene/front_option3_A.png');
    this.load.image('front_option3_B','assets/GameScene/front_option3_B.png');
    this.load.image('front_option3_C','assets/GameScene/front_option3_C.png');
    this.load.image('front_option3_D','assets/GameScene/front_option3_D.png');
    this.load.image('front_option3_E','assets/GameScene/front_option3_E.png');
    this.load.image('front_option3_F','assets/GameScene/front_option3_F.png');
    this.load.image('front_option4_A','assets/GameScene/front_option4_A.png');
    this.load.image('front_option4_B','assets/GameScene/front_option4_B.png');
    this.load.image('front_option4_C','assets/GameScene/front_option4_C.png');
    this.load.image('front_option4_D','assets/GameScene/front_option4_D.png');
    this.load.image('front_option4_E','assets/GameScene/front_option4_E.png');
    this.load.image('front_option4_F','assets/GameScene/front_option4_F.png');
    this.load.image('replayButton','assets/GameScene/replayButton.png');
    this.load.image('replayHover','assets/GameScene/replayHover.png');
    this.load.image('text1_A','assets/GameScene/text1_A.png');
    this.load.image('text1_B','assets/GameScene/text1_B.png');
    this.load.image('text1_C','assets/GameScene/text1_C.png');
    this.load.image('text1_D','assets/GameScene/text1_D.png');
    this.load.image('text1_E','assets/GameScene/text1_E.png');
    this.load.image('text1_F','assets/GameScene/text1_F.png');
    this.load.image('text2_A','assets/GameScene/text2_A.png');

    // loadAnims
    this.load.image('loadAnim','assets/loadAnims/loadAnim.png');
    this.load.image('loadAnim2','assets/loadAnims/loadAnim2.png');
    // StartScene
    this.load.image('hover_playButton','assets/StartScene/hover_playButton.png');
    this.load.image('playButton','assets/StartScene/playButton.png');
    this.load.image('startBackground','assets/StartScene/startBackground.png');

    // audio
    this.load.audio('allcorrectanswerselected','assets/audio/allcorrectanswerselected.mp3');
    this.load.audio('bgmusic','assets/audio/bgmusic.mp3');
    this.load.audio('cardsflippingbacktonumber','assets/audio/cardsflippingbacktonumber.mp3');
    this.load.audio('correctselection','assets/audio/correctselection.mp3');
    this.load.audio('incorrectanswer','assets/audio/incorrectanswer.mp3');
    this.load.audio('OptionCardsSlideIN','assets/audio/OptionCardsSlideIN.mp3');
    this.load.audio('cardhover','assets/audio/cardhover.wav');
    this.load.audio('cardsgotorewardbar','assets/audio/cardsgotorewardbar.wav');

    this.load.audio('cuemathLogoReveal','assets/audio/cuemathLogoReveal.mp3');
    this.load.audio('coinReveal','assets/audio/coinReveal.mp3');

    // this.load.video('endSceneVideo', 'assets/endSceneVideo.mp4', 'loadeddata', false, true);


  }

  create() {
    this.loadAnim = this.add.sprite(config.width / 2, config.height / 2, "load").setScale(0.25);
    this.loadAnim2 = this.add
      .sprite(config.width / 2, config.height / 2, "load2")
      .setVisible(false)
      .setScale(0.5);

    this.anims.create({
      key: "loading",
      frames: this.anims.generateFrameNames("load", {
        start: 0,
        end: 8,
        zeroPad: 0,
        prefix: "LOAD",
        suffix: ".png",
      }),
      frameRate: 20,
      repeat: -1,
    });

    this.anims.create({
      key: "loading2",
      frames: this.anims.generateFrameNames("load2", {
        start: 9,
        end: 40,
        zeroPad: 0,
        prefix: "LOAD",
        suffix: ".png",
      }),
      frameRate: 20,
      repeat: 0,
    });

    this.simAssetsLoad();

    this.load.start();

    this.load.on(
      "progress",
      function (value) {
        this.loadAnim.play("loading");
      },
      this
    );

    //this.load.on("fileprogress", function (file) {}, this);
    this.load.on(
      "complete",
      function () {
        // console.log("complete");
        this.loadAnim.destroy();
        this.loadAnim2.setVisible(true).play("loading2");
        this.loadAnim2.on(
          Phaser.Animations.Events.ANIMATION_COMPLETE,
          function () {
            this.scene.stop("LoadScene");
            this.scene.start("StartScene");
          },
          this
        );
      },
      this
    );
  }

  update() {}
}
