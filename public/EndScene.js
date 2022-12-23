var videoPlayed = false;

class EndScene extends Phaser.Scene {
  constructor() {
    super({
      key: "EndScene",
    });
  }

  preload() {}

  create() {

    this.endSceneVideo = this.add.video(0, 0, 'endSceneVideo').setDepth(4).setOrigin(0).play(true).setLoop(false);
    // this.endSceneVideo.play(false).setVisible(true);



    this.tweens.add({
      targets: config.audio.bgmusic,
      volume: 0,
      duration: 8000,
      onComplete: () => {},
    });

    config.audio.coinReveal = this.sound.add("coinReveal").setVolume(0.05);
    config.audio.cuemathLogoReveal = this.sound.add("cuemathLogoReveal").setVolume(0.05);

    config.audio.coinReveal.play();

    this.time.delayedCall(9000, () => {config.audio.cuemathLogoReveal.play();},[],this);

    this.time.delayedCall(14000, () => {
      this.scale.stopFullscreen(); 
      config.audio.bgmusic.stop();
      videoPlayed = true;

    },[],this);

  }

  update() {

    if(videoPlayed){
      this.endSceneVideo.stop();
    }
  }
}
