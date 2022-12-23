class StartScene extends Phaser.Scene {
  constructor() {
    super({
      key: "StartScene",
    });
  }

  preload() {}

  create() {

    this.add.sprite(config.width / 2, config.height / 2, "startBackground");

    this.character = this.add.sprite(config.width / 2, config.height / 2, "character");



    this.playButton = this.add
    .sprite(537,570, "playButton")
    .setOrigin(0)
    .setInteractive({ cursor: "pointer" })
    .setDepth(4);


    this.anims.create({
      key: "givelife",
      frames: this.anims.generateFrameNames("startAnim", {
        start: 0,
        end: 90,
        zeroPad: 0,
        prefix: "startSceneAnim",
        suffix: ".png",
      }),
      frameRate: 30,
      repeat: -1,
    });

    this.character.play("givelife")


    this.playButton.on("pointerover", () => {
      this.playButton.setTexture("hover_playButton");
    });
    this.playButton.on("pointerout", () => {
      this.playButton.setTexture("playButton");
    });
    this.playButton.on("pointerup", () => {
      // config.audio.watering.stop();

      this.scene.stop("StartScene");
      this.scene.start("GameScene");

      // this.scene.start("EndScene");


      this.scale.startFullscreen();

      // {"name":"Rohit","email":"rohit@email.com","id":7555}

      // var xhr = new XMLHttpRequest();
      // var url = "https://expressserveronrailway-production.up.railway.app/post";
      // xhr.open("POST", url, true);
      // xhr.setRequestHeader("Content-Type", "application/json");
      // xhr.onreadystatechange = function () {
      //     if (xhr.readyState === 4 && xhr.status === 200) {
      //         var json = JSON.parse(xhr.responseText);
      //         console.log(json.name + ", " + json.email+ ", " + json.id);
      //     }
      // };
      // var data = JSON.stringify({"name":"Rohit","email":"rohit@email.com","id":7555});
      // xhr.send(data);
      


    });

  }

  update() {}
}
