// class StartScene extends Phaser.Scene {
//   constructor() {
//     super({
//       key: "StartScene",
//     });
//   }

//   preload() {}

//   create() {

//     this.add.sprite(config.width / 2, config.height / 2, "startBackground");

//     this.character = this.add.sprite(config.width / 2, config.height / 2, "character");



//     this.playButton = this.add
//     .sprite(537,570, "playButton")
//     .setOrigin(0)
//     .setInteractive({ cursor: "pointer" })
//     .setDepth(4);


//     this.anims.create({
//       key: "givelife",
//       frames: this.anims.generateFrameNames("startAnim", {
//         start: 0,
//         end: 90,
//         zeroPad: 0,
//         prefix: "startSceneAnim",
//         suffix: ".png",
//       }),
//       frameRate: 30,
//       repeat: -1,
//     });

//     this.character.play("givelife")


//     this.playButton.on("pointerover", () => {
//       this.playButton.setTexture("hover_playButton");
//     });
//     this.playButton.on("pointerout", () => {
//       this.playButton.setTexture("playButton");
//     });
//     this.playButton.on("pointerup", () => {
//       // config.audio.watering.stop();

//       this.scene.stop("StartScene");
//       this.scene.start("GameScene");

//       // this.scene.start("EndScene");


//       this.scale.startFullscreen();

//       // {"name":"Rohit","email":"rohit@email.com","id":7555}

//       var RandomTime = Phaser.Math.Between(100000000, 10000000000);

//       const d = new Date();
//       let time = d.getTime();

      console.log("Version: " + "1.5");


//       var xhr = new XMLHttpRequest();
//       // var url = "https://expressserveronrailway-production-00c1.up.railway.app/postsomeotherdata";
//       // xhr.setRequestHeader("Content-Type", "application/json");
//       // xhr.open("POST", url, true);

//       xhr.onreadystatechange = function () {
//           if (xhr.readyState === 4 && xhr.status === 200) {
//               // var json = JSON.parse(xhr.responseText);
//               // console.log(json.name + ", " + json.email+ ", " + json.id);
//               console.log("data posted");
//             console.log(xhr);
//           }
//       };

      
      
//       xhr.onerror = function (event) {
//         retry(xhr)
//       }
//       xhr.onload = function (event) {
//         if (xhr.status < 200 || xhr.status >= 300)
//         // if (xhr.readyState === 4 && xhr.status === 200)
//           retry(xhr)
//       }
//       xhr.ontimeout = function (event) {
//         retry(xhr)
//       }
//       openAndSend(xhr)

//     });

//     function retry(xhr) {
//       setTimeout(function () {
//         openAndSend(xhr)
//       }, 1000)
//     }
//     function openAndSend(xhr) {
//       // xhr.open("GET", "http://example.com/")
  
//       xhr.open("POST", "https://expressserveronrailway-production-00c1.up.railway.app/postsomeotherdata", true);
//       xhr.setRequestHeader("Content-Type", "application/json");
//       // xhr.send()
  
//       // var RandomTime = Phaser.Math.Between(100000000, 10000000000);
  
//       // const d = new Date();
//       // let time = d.getTime();
  
//       var data1 = JSON.stringify({"totalTime":1000,"unixTime":1010});
//       xhr.send(data1);   
//     }


//   }






//   update() {}
// }

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

      var RandomTime = Phaser.Math.Between(100000000, 10000000000);

      const d = new Date();
      let time = d.getTime();


      // var xhr = new XMLHttpRequest();
      // var url = "https://expressserveronrailway-production-00c1.up.railway.app/postsomeotherdata";
      // xhr.open("POST", url, true);
      // xhr.setRequestHeader("Content-Type", "application/json");
      // xhr.onreadystatechange = function () {
      //     if (xhr.readyState === 4 && xhr.status === 200) {
      //         var json = JSON.parse(xhr.responseText);
      //         // console.log(json.name + ", " + json.email+ ", " + json.id);
      //         console.log("data posted");

      //     }
      // };
      // var data = JSON.stringify({"totalTime":RandomTime,"unixTime":time});
      // xhr.send(data);
      


    });

  }

  update() {}
}

