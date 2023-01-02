// var nextCount = 0;
// var dragEnable = false;
// var areaLabelCode = 0;
// // var inputNumber = 0;
// var inputSelectionCode = 0;
// var showCursor = false;

var inputArray = [0,0,0,0];
var correctArray = [[1,1,0,1],[1,0,1,1],[1,1,0,0],[0,1,1,0],[1,0,1,0],[0,1,1,1]];
var clickCount = 0;
var wrongAttemptCountArray = [0,0,0,0,0,0]


var totalCorrectInputted = 0;
var totalCorrectInThequestion = 0;
var totalWrongInputted = 0;

var cutTargetYPosition = 238;


var RandomNumber = Phaser.Math.Between(100000000, 10000000000);







var front = [
  ["front_option1_A" , "front_option2_A" , "front_option3_A" , "front_option4_A"],
  ["front_option1_B" , "front_option2_B" , "front_option3_B" , "front_option4_B"],
  ["front_option1_C" , "front_option2_C" , "front_option3_C" , "front_option4_C"],
  ["front_option1_D" , "front_option2_D" , "front_option3_D" , "front_option4_D"],
  ["front_option1_E" , "front_option2_E" , "front_option3_E" , "front_option4_E"],
  ["front_option1_F" , "front_option2_F" , "front_option3_F" , "front_option4_F"],
];

var back = [
  ["back_option1_A" , "back_option2_A" , "back_option3_A" , "back_option4_A"],
  ["back_option1_B" , "back_option2_B" , "back_option3_B" , "back_option4_B"],
  ["back_option1_C" , "back_option2_C" , "back_option3_C" , "back_option4_C"],
  ["back_option1_D" , "back_option2_D" , "back_option3_D" , "back_option4_D"],
  ["back_option1_E" , "back_option2_E" , "back_option3_E" , "back_option4_E"],
  ["back_option1_F" , "back_option2_F" , "back_option3_F" , "back_option4_F"],
];

var master = [
  ["front_master_A" , "back_master_A"],
  ["front_master_B" , "back_master_B"],
  ["front_master_C" , "back_master_C"],
  ["front_master_D" , "back_master_D"],
  ["front_master_E" , "back_master_E"],
  ["front_master_F" , "back_master_F"],
]

var question = [
  ["text1_A"],
  ["text1_B"],
  ["text1_C"],
  ["text1_D"],
  ["text1_E"],
  ["text1_F"],
]


/* TODO

[y] make optioncard interactive in later stage
[y] no mouse movement, glitch in bordermovement
[y] reset completly on next attempts
[y] full screen
[]
[]

      this.time.delayedCall(1600, () => {this.startLengthOfEachGarden();},[],this);


*/






class GameScene extends Phaser.Scene {
  constructor() {
    super({
      key: "GameScene",
    });
  }



  preload() {}

  create() {

    console.log(RandomNumber);

    




    gameState.questionNumber+=1;

    this.add.sprite(config.width / 2, config.height / 2, "background");

    config.audio.bgmusic = this.sound.add("bgmusic").setVolume(0.02).setLoop(true);
    config.audio.bgmusic.play();

    this.loadVideo();
    this.load.start();



    config.audio.allcorrectanswerselected = this.sound.add("allcorrectanswerselected").setVolume(0.05);
    config.audio.cardsflippingbacktonumber = this.sound.add("cardsflippingbacktonumber").setVolume(0.05);
    config.audio.correctselection = this.sound.add("correctselection").setVolume(0.05);
    config.audio.incorrectanswer = this.sound.add("incorrectanswer").setVolume(0.05);
    config.audio.OptionCardsSlideIN = this.sound.add("OptionCardsSlideIN").setVolume(0.05);
    config.audio.cardhover = this.sound.add("cardhover").setVolume(0.05);
    config.audio.cardsgotorewardbar = this.sound.add("cardsgotorewardbar").setVolume(0.05);

    this.borderCard_1 = this.add.sprite(248+69, 374+100, "border_purple").setOrigin(0.5).setVisible(false);
    this.borderCard_2 = this.add.sprite(463+69, 374+100, "border_purple").setOrigin(0.5).setVisible(false);
    this.borderCard_3 = this.add.sprite(678+69, 374+100, "border_purple").setOrigin(0.5).setVisible(false);
    this.borderCard_4 = this.add.sprite(893+69, 374+100, "border_purple").setOrigin(0.5).setVisible(false);

    this.masterCard = this.add.sprite(571+69, -569+100, master[gameState.questionNumber-1][0]).setOrigin(0.5).setVisible(true);

    this.optionCard_1 = this.add.sprite(248+69, 900+100, front[gameState.questionNumber-1][0]).setOrigin(0.5).setVisible(true);
    this.optionCard_2 = this.add.sprite(463+69, 900+100, front[gameState.questionNumber-1][1]).setOrigin(0.5).setVisible(true);
    this.optionCard_3 = this.add.sprite(678+69, 900+100, front[gameState.questionNumber-1][2]).setOrigin(0.5).setVisible(true);
    this.optionCard_4 = this.add.sprite(893+69, 900+100, front[gameState.questionNumber-1][3]).setOrigin(0.5).setVisible(true);

    this.feedbackIconTick_1 = this.add.sprite(248+69, 374+100+105, "tick").setOrigin(0.5).setVisible(false).setScale(0.2);
    this.feedbackIconTick_2 = this.add.sprite(463+69, 374+100+105, "tick").setOrigin(0.5).setVisible(false).setScale(0.2);
    this.feedbackIconTick_3 = this.add.sprite(678+69, 374+100+105, "tick").setOrigin(0.5).setVisible(false).setScale(0.2);
    this.feedbackIconTick_4 = this.add.sprite(893+69, 374+100+105, "tick").setOrigin(0.5).setVisible(false).setScale(0.2);

    this.feedbackIconCross_1 = this.add.sprite(248+69, 374+100+105, "cross").setOrigin(0.5).setVisible(false).setScale(0.9);
    this.feedbackIconCross_2 = this.add.sprite(463+69, 374+100+105, "cross").setOrigin(0.5).setVisible(false).setScale(0.9);
    this.feedbackIconCross_3 = this.add.sprite(678+69, 374+100+105, "cross").setOrigin(0.5).setVisible(false).setScale(0.9);
    this.feedbackIconCross_4 = this.add.sprite(893+69, 374+100+105, "cross").setOrigin(0.5).setVisible(false).setScale(0.9);9
    this.confetti = this.add.sprite(config.width / 2, config.height / 2, "confetti").setVisible(false);

    this.button_confirm = this.add.sprite(567, 803, "button_confirm").setOrigin(0).setVisible(true);

    this.text1 = this.add.sprite(153, 96, question[gameState.questionNumber-1]).setOrigin(0).setAlpha(0);
    this.text2 = this.add.sprite(153, 96, "text2_A").setOrigin(0).setAlpha(0);

    this.bar = this.add.sprite(0,0, "sidebarAnim").setOrigin(0,0).setVisible(true);
    this.scoreMeter= this.add.image(20-2,25-2,'scoreMeter').setOrigin(0).setDepth(3).setVisible(true);
    this.cut = this.add.sprite(0,238);

    this.askQuestion();

    this.enableOptions(this.optionCard_1,this.borderCard_1,0);
    this.enableOptions(this.optionCard_2,this.borderCard_2,1);
    this.enableOptions(this.optionCard_3,this.borderCard_3,2);
    this.enableOptions(this.optionCard_4,this.borderCard_4,3);

    this.button_confirm.on("pointerover", () => {
      this.button_confirm.setTexture("Hover_button_confirm");
    });
    this.button_confirm.on("pointerout", () => {
      this.button_confirm.setTexture("button_confirm");
    });
    this.button_confirm.on("pointerup", () => {

      this.evaluateInput();

      // this.collapseCards(this.optionCard_1,this.borderCard_1,0);
      // this.collapseCards(this.optionCard_2,this.borderCard_2,100);
      // this.collapseCards(this.optionCard_3,this.borderCard_3,200);
      // this.collapseCards(this.optionCard_4,this.borderCard_4,300);


    });


    this.anims.create({
      key: "barshine",
      frames: this.anims.generateFrameNames("sidebarAnim", {
        start: 0,
        end: 59,
        zeroPad: 0,
        prefix: "sidebar",
        suffix: ".png",
      }),
      frameRate: 30,
      repeat: -1,
    });

    this.bar.play("barshine");

    this.anims.create({
      key: "tickkey",
      frames: this.anims.generateFrameNames("tick", {
        start: 0,
        end: 19,
        zeroPad: 0,
        prefix: "tick",
        suffix: ".png",
      }),
      frameRate: 30,
      repeat: 0,
    });
    this.anims.create({
      key: "crosskey",
      frames: this.anims.generateFrameNames("cross", {
        start: 0,
        end: 6,
        zeroPad: 0,
        prefix: "cross",
        suffix: ".png",
      }),
      frameRate: 30,
      repeat: 0,
    });
    this.anims.create({
      key: "confettipop",
      frames: this.anims.generateFrameNames("confetti", {
        start: 0,
        end: 122,
        zeroPad: 0,
        prefix: "CONFETTI0",
        suffix: ".png",
      }),
      frameRate: 30,
      repeat: 0,
    });



    // this.endSceneVideo.play(true).setVisible(true);


  }

  loadVideo(){
    this.load.video('endSceneVideo', 'assets/endSceneVideo.mp4', 'loadeddata', false, true);
  }




  clearFeedbackIcons(){

    this.feedbackIconTick_1.setVisible(false).setFrame(0);
    this.feedbackIconTick_2.setVisible(false).setFrame(0);
    this.feedbackIconTick_3.setVisible(false).setFrame(0);
    this.feedbackIconTick_4.setVisible(false).setFrame(0);

    this.feedbackIconCross_1.setVisible(false).setFrame(0);
    this.feedbackIconCross_2.setVisible(false).setFrame(0);
    this.feedbackIconCross_3.setVisible(false).setFrame(0);
    this.feedbackIconCross_4.setVisible(false).setFrame(0);

  }
  evaluateInput(){  
    for (let i = 0; i < 4; i++) {
      if(correctArray[gameState.questionNumber-1][i] == inputArray[i] &&  inputArray[i] == 1){
        totalCorrectInputted+=1;
        // console.log(inputArray[i] == 1);
      }

      if(correctArray[gameState.questionNumber-1][i] != inputArray[i] &&  inputArray[i] == 1){
        totalWrongInputted+=1;
        // console.log(inputArray[i] == 1);
      }
    }

    for (var j in correctArray[gameState.questionNumber-1]) {
      totalCorrectInThequestion += correctArray[gameState.questionNumber-1][j];
    }    
      // console.log(totalCorrectInputted);
      // console.log(totalWrongInputted);

      // console.log(totalCorrectInThequestion);

      this.clearFeedbackIcons();



      this.text2.setAlpha(0);

          if(inputArray.toString() == correctArray[gameState.questionNumber-1].toString()){

            this.correctInput();

            // console.log("all correct");
            
          }else if(totalCorrectInThequestion>totalCorrectInputted && totalWrongInputted == 0){
            this.missingInput();
            // console.log("missing");
            wrongAttemptCountArray[gameState.questionNumber-1]+=1;

          }else{
            this.wrongInput();
            // console.log("all wrong");
            wrongAttemptCountArray[gameState.questionNumber-1]+=1;


          }

  }
  popInOutConfirm(code,delay){
    //code 0 in, 1 out, 2 override, 3 out without disablining

    // console.log(this.inputArray == [0]);
    // console.log(code);


    if((clickCount == 0 &&code==0) || code==2){
      this.tweens.add({
        targets: this.button_confirm,
        // y:()=>{if(code == 0 || code == 0){return 900} else if(code == 0){return -569}},
        y:603,
        ease: 'Cubic',
        duration: 500,
        repeat: 0, 
        yoyo: false,
        delay:delay,
        completeDelay: 0,
        onComplete: function () {
          this.button_confirm.setInteractive({ cursor: "pointer" });
          this.enableDisablecards(0);


          

        },
        onCompleteScope: this,
    });

    }else if(code==1){

      this.tweens.add({
        targets: this.button_confirm,
        // y:()=>{if(code == 0 || code == 0){return 900} else if(code == 0){return -569}},
        y:803,
        ease: 'Cubic',
        duration: 500,
        repeat: 0, 
        yoyo: false,
        delay:delay,
        completeDelay: 0,
        onComplete: function () {
          // this.button_confirm.removeInteractive();
          this.enableDisablecards(1);


          
        },
        onCompleteScope: this,
    });

    }else if(code==3){

      this.tweens.add({
        targets: this.button_confirm,
        // y:()=>{if(code == 0 || code == 0){return 900} else if(code == 0){return -569}},
        y:803,
        ease: 'Cubic',
        duration: 500,
        repeat: 0, 
        yoyo: false,
        delay:delay,
        completeDelay: 0,
        onComplete: function () {          
        },
        onCompleteScope: this,
    });

    }

  }
  collapseCards(object,borderobject,delay){
    this.tweens.add({
      targets: object,
      x: 39,
      y: 162,
      scale:0,
      ease: 'Cubic',       // 'Cubic', 'Elastic', 'Bounce', 'Back' ,'Sine.easeOut',
      duration: 500,
      repeat: 0,            // -1: infinity
      yoyo: false,
      delay:delay,
      completeDelay: 0,
      onComplete: function () {
        // this.object.setVisible(false);
      },
      onCompleteScope: this,
  });

  this.tweens.add({
    targets: borderobject,
    x: 39,
    y: 162,
    scale:0,
    ease: 'Cubic',       // 'Cubic', 'Elastic', 'Bounce', 'Back' ,'Sine.easeOut',
    duration: 500,
    repeat: 0,            // -1: infinity
    yoyo: false,
    delay:delay,
    completeDelay: 0,
    onComplete: function () {
      // this.object.setVisible(false);
    },
    onCompleteScope: this,
});

  }
  cardInAndOut(inoutcode,object,delay,cardcode){
    //inoutcode 0:in, 1:out.
    //cardcode 1 for cards, 2 for master

    // console.log(inoutcode);

    if(inoutcode == 0){
      this.tweens.add({
        targets: object,
        y: { from:()=>{if(cardcode==1){return 900+100} else if(cardcode==2){return -569+100}}, to:()=>{if(cardcode==1){return 374+100} else if(cardcode==2){return 69+100}}},
        // y:()=>{if(cardcode==1){return 374} else if(cardcode==2){return 69}},
        ease: 'Cubic',       // 'Cubic', 'Elastic', 'Bounce', 'Back' ,'Sine.easeOut',
        duration: 700,
        repeat: 0,            // -1: infinity
        yoyo: false,
        delay:delay,
        completeDelay: 0,
        onComplete: function () {
          this.enableDisablecards(0);
  
        },
        onCompleteScope: this,
    });
    }else if(inoutcode == 1){

      this.tweens.add({
        targets: object,
        y: { from:()=>{if(cardcode==1){return 374+100} else if(cardcode==2){return 69+100}}, to:()=>{if(cardcode==1){return 900+100} else if(cardcode==2){return -569+100}}},
        // y:()=>{if(cardcode==1){return 374} else if(cardcode==2){return 69}},
        ease: 'Cubic',       // 'Cubic', 'Elastic', 'Bounce', 'Back' ,'Sine.easeOut',
        duration: 1000,
        repeat: 0,            // -1: infinity
        yoyo: false,
        delay:delay,
        completeDelay: 0,
        onComplete: function () {
          // this.enableDisablecards(0);
  
        },
        onCompleteScope: this,
    });

    }






     
  }
  enableOptions(target,bordertarget,positioninarray){
    target.on("pointerover", () => {
      target.setY(374-20+100);
      bordertarget.setY(374-30+100+10);
      config.audio.cardhover.play();


    });
    target.on("pointerout", () => {
      target.setY(374+100);
      bordertarget.setY(374-10+100+10);

    });
    target.on("pointerup", () => {
      //pointerover will takecare of this, this will take care even if no mouse movement is made.
      target.setY(374-20+100);
      bordertarget.setY(374-30+100+10);

      this.popInOutConfirm(0,0);
      

      if(bordertarget.visible){
        bordertarget.setVisible(false);
        inputArray[positioninarray] = 0;
        clickCount-=1;
      }else{
        bordertarget.setVisible(true);
        inputArray[positioninarray] = 1;
        clickCount+=1;
      }

      if(clickCount==0)
      {
      this.popInOutConfirm(3,0);

      }



    });
  }
  changeQuestion(){

  if(gameState.questionNumber<3){
    gameState.questionNumber+=1;
    clickCount = 0;
    totalCorrectInputted = 0;
    totalCorrectInThequestion = 0;
    totalWrongInputted = 0;


    inputArray = [0,0,0,0];
    this.clearFeedbackIcons();

    this.masterCard.setTexture(master[gameState.questionNumber-1][0]);

    this.optionCard_1.setTexture(front[gameState.questionNumber-1][0]);
    this.optionCard_2.setTexture(front[gameState.questionNumber-1][1]);
    this.optionCard_3.setTexture(front[gameState.questionNumber-1][2]);
    this.optionCard_4.setTexture(front[gameState.questionNumber-1][3]);

    this.text1.setTexture(question[gameState.questionNumber-1]).setAlpha(0);


    this.borderCard_1.setPosition(248+69, 374+100).setScale(1).setTexture("border_purple").setVisible(false);
    this.borderCard_2.setPosition(463+69, 374+100).setScale(1).setTexture("border_purple").setVisible(false);
    this.borderCard_3.setPosition(678+69, 374+100).setScale(1).setTexture("border_purple").setVisible(false);
    this.borderCard_4.setPosition(893+69, 374+100).setScale(1).setTexture("border_purple").setVisible(false);

    this.masterCard.setPosition(571+69, -569+100).setScale(1);

    this.optionCard_1.setPosition(248+69, 900+100).setScale(1);
    this.optionCard_2.setPosition(463+69, 900+100).setScale(1);
    this.optionCard_3.setPosition(678+69, 900+100).setScale(1);
    this.optionCard_4.setPosition(893+69, 900+100).setScale(1);
    this.askQuestion();

  }else{


    var xhr = new XMLHttpRequest();
      var url = "https://expressserveronrailway-production-00c1.up.railway.app/postcardgamedata";
      xhr.open("POST", url, true);
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.onreadystatechange = function () {
          if (xhr.readyState === 4 && xhr.status === 200) {
              var json = JSON.parse(xhr.responseText);
              console.log(json.RandomNumber + ", " + json.wrongAttemptCountArray);
          }
      };
      var data = JSON.stringify({"RandomNumber":RandomNumber,"wrongAttemptCountArray":wrongAttemptCountArray});

      

      
      xhr.send(data);


      

    this.scene.stop("GameScene");
    this.scene.start("EndScene");




    
    
    // this.endSceneVideo.play(true).setVisible(true);

  }
    //change textures
  }
  objectFadeInOut(object,duration,code,delay){

    //code 0 in, 1 out

    if(code==0){
      this.tweens.add({
        targets: object,
        delay:delay,
        alpha: { from: 0, to: 1},
        ease: 'Cubic',       // 'Cubic', 'Elastic', 'Bounce', 'Back' ,'Sine.easeOut',
        duration: duration,
        repeat: 0,            // -1: infinity
        yoyo: false,
    });

    }else if(code==1){

      this.tweens.add({
        targets: object,
        delay: delay,
        alpha: { from: 1, to: 0},
        ease: 'Cubic',       // 'Cubic', 'Elastic', 'Bounce', 'Back' ,'Sine.easeOut',
        duration: duration,
        repeat: 0,            // -1: infinity
        yoyo: false,
    });
    }
  }
  scoreMeterIncrease(code,delaytime){
    //question number
    this.tweens.add({
      targets:this.cut,
      y:238 - (29.83*code),
      duration: 1000,
      repeat: 0,
      delay:delaytime,
      });
  }
  askQuestion(){

    config.audio.OptionCardsSlideIN.play();

    this.cardInAndOut(0,this.optionCard_1,500+100,1);
    this.cardInAndOut(0,this.optionCard_2,500+150,1);
    this.cardInAndOut(0,this.optionCard_3,500+200,1);
    this.cardInAndOut(0,this.optionCard_4,500+250,1);

    this.cardInAndOut(0,this.masterCard,0,2);

    this.objectFadeInOut(this.text1,500,0,1500);
  }
  enableDisablecards(code){
    //code 0 enable, 1 disable

    if(code == 0){
      this.optionCard_1.setInteractive({ cursor: "pointer" });
      this.optionCard_2.setInteractive({ cursor: "pointer" });
      this.optionCard_3.setInteractive({ cursor: "pointer" });
      this.optionCard_4.setInteractive({ cursor: "pointer" });

    }else if (code == 1){
      this.optionCard_1.removeInteractive();
      this.optionCard_2.removeInteractive();
      this.optionCard_3.removeInteractive();
      this.optionCard_4.removeInteractive();

      

    }





  }


  correctInput(){


    

  
    this.clearFeedbackIcons;

    this.popInOutConfirm(1,0);
    this.enableDisablecards(1);

    this.objectFadeInOut(this.text1,500,1,0);

    this.confetti.play("confettipop").setVisible(true);


    this.borderCard_1.setTexture("border_green");
    this.borderCard_2.setTexture("border_green");
    this.borderCard_3.setTexture("border_green");
    this.borderCard_4.setTexture("border_green");


    this.time.delayedCall(500, () => {
      config.audio.allcorrectanswerselected.play();
      this.flipCard(0,this.masterCard,this.borderCard_1,master[gameState.questionNumber-1][0],master[gameState.questionNumber-1][1]);

      this.flipCard(0,this.optionCard_1,this.borderCard_1,front[gameState.questionNumber-1][0],back[gameState.questionNumber-1][0]);
      this.flipCard(0,this.optionCard_2,this.borderCard_2,front[gameState.questionNumber-1][1],back[gameState.questionNumber-1][1]);
      this.flipCard(0,this.optionCard_3,this.borderCard_3,front[gameState.questionNumber-1][2],back[gameState.questionNumber-1][2]);
      this.flipCard(0,this.optionCard_4,this.borderCard_4,front[gameState.questionNumber-1][3],back[gameState.questionNumber-1][3]);
  
    this.time.delayedCall(800, () => {


      this.clearFeedbackIcons();
  
      if(this.borderCard_1.visible){this.feedbackIconTick_1.setVisible(true).setFrame(0).play("tickkey")};
      if(this.borderCard_2.visible){this.feedbackIconTick_2.setVisible(true).setFrame(0).play("tickkey")};
      if(this.borderCard_3.visible){this.feedbackIconTick_3.setVisible(true).setFrame(0).play("tickkey")};
      if(this.borderCard_4.visible){this.feedbackIconTick_4.setVisible(true).setFrame(0).play("tickkey")};

      // this.feedbackIconTick_1.setFrame(0).play("tickkey");
      // this.feedbackIconTick_2.setFrame(0).play("tickkey");
      // this.feedbackIconTick_3.setFrame(0).play("tickkey");
      // this.feedbackIconTick_4.setFrame(0).play("tickkey");


    },[],this);



      this.time.delayedCall(5500, () => {

        this.clearFeedbackIcons();

        config.audio.cardsflippingbacktonumber.play();


        this.flipCard(0,this.masterCard,this.borderCard_1,master[gameState.questionNumber-1][1],master[gameState.questionNumber-1][0]);

        this.flipCard(0,this.optionCard_1,this.borderCard_1,back[gameState.questionNumber-1][0],front[gameState.questionNumber-1][0]);
        this.flipCard(0,this.optionCard_2,this.borderCard_2,back[gameState.questionNumber-1][1],front[gameState.questionNumber-1][1]);
        this.flipCard(0,this.optionCard_3,this.borderCard_3,back[gameState.questionNumber-1][2],front[gameState.questionNumber-1][2]);
        this.flipCard(0,this.optionCard_4,this.borderCard_4,back[gameState.questionNumber-1][3],front[gameState.questionNumber-1][3]);

        config.audio.cardsgotorewardbar.play();


        this.time.delayedCall(800, () => {
          // console.log(correctArray[gameState.questionNumber-1][0]);



          if(correctArray[gameState.questionNumber-1][0] == 1){this.collapseCards(this.optionCard_1,this.borderCard_1,0);};
          if(correctArray[gameState.questionNumber-1][1] == 1){this.collapseCards(this.optionCard_2,this.borderCard_2,100);};
          if(correctArray[gameState.questionNumber-1][2] == 1){this.collapseCards(this.optionCard_3,this.borderCard_3,200);};
          if(correctArray[gameState.questionNumber-1][3] == 1){this.collapseCards(this.optionCard_4,this.borderCard_4,300);};

          this.scoreMeterIncrease(gameState.questionNumber,400);

          this.time.delayedCall(1500, () => {

          
            this.cardInAndOut(1,this.optionCard_1,0,1);
            this.cardInAndOut(1,this.optionCard_2,0,1);
            this.cardInAndOut(1,this.optionCard_3,0,1);
            this.cardInAndOut(1,this.optionCard_4,0,1);
        
            this.cardInAndOut(1,this.masterCard,0,2);

            inputArray = [0,0,0,0];

            this.time.delayedCall(1000, () => {
              this.changeQuestion();
            },[],this);

          },[],this);
        },[],this);
      },[],this);
    },[],this);






  }

  missingInput(){
// console.log("missing input");






this.clearFeedbackIcons();





if(correctArray[gameState.questionNumber-1][0] == inputArray[0] && inputArray[0] == 1){this.borderCard_1.setTexture("border_green");}
if(correctArray[gameState.questionNumber-1][1] == inputArray[1] && inputArray[1] == 1){this.borderCard_2.setTexture("border_green");}
if(correctArray[gameState.questionNumber-1][2] == inputArray[2] && inputArray[2] == 1){this.borderCard_3.setTexture("border_green");}
if(correctArray[gameState.questionNumber-1][3] == inputArray[3] && inputArray[3] == 1){this.borderCard_4.setTexture("border_green");}

this.enableDisablecards(1);
this.popInOutConfirm(1,0);
this.objectFadeInOut(this.text1,500,1,0);
this.objectFadeInOut(this.text2,500,0,500);


this.time.delayedCall(500, () => {

  config.audio.correctselection.play();
  
  if(this.borderCard_1.visible){this.flipCard(0,this.optionCard_1,this.borderCard_1,front[gameState.questionNumber-1][0],back[gameState.questionNumber-1][0]);};
  if(this.borderCard_2.visible){this.flipCard(0,this.optionCard_2,this.borderCard_2,front[gameState.questionNumber-1][1],back[gameState.questionNumber-1][1]);};
  if(this.borderCard_3.visible){this.flipCard(0,this.optionCard_3,this.borderCard_3,front[gameState.questionNumber-1][2],back[gameState.questionNumber-1][2]);};
  if(this.borderCard_4.visible){this.flipCard(0,this.optionCard_4,this.borderCard_4,front[gameState.questionNumber-1][3],back[gameState.questionNumber-1][3]);};

  this.time.delayedCall(800, () => {



this.clearFeedbackIcons();



if(this.borderCard_1.visible){this.feedbackIconTick_1.setVisible(true);}
  if(this.borderCard_2.visible){this.feedbackIconTick_2.setVisible(true);}
  if(this.borderCard_3.visible){this.feedbackIconTick_3.setVisible(true);}
  if(this.borderCard_4.visible){this.feedbackIconTick_4.setVisible(true);}


    this.feedbackIconTick_1.setFrame(0).play("tickkey");
    this.feedbackIconTick_2.setFrame(0).play("tickkey");
    this.feedbackIconTick_3.setFrame(0).play("tickkey");
    this.feedbackIconTick_4.setFrame(0).play("tickkey");



  },[],this);

  this.time.delayedCall(3000, () => {



this.clearFeedbackIcons();

config.audio.cardsflippingbacktonumber.play();






    if(this.borderCard_1.visible){this.flipCard(0,this.optionCard_1,this.borderCard_1,back[gameState.questionNumber-1][0],front[gameState.questionNumber-1][0]);};
    if(this.borderCard_2.visible){this.flipCard(0,this.optionCard_2,this.borderCard_2,back[gameState.questionNumber-1][1],front[gameState.questionNumber-1][1]);};
    if(this.borderCard_3.visible){this.flipCard(0,this.optionCard_3,this.borderCard_3,back[gameState.questionNumber-1][2],front[gameState.questionNumber-1][2]);};
    if(this.borderCard_4.visible){this.flipCard(0,this.optionCard_4,this.borderCard_4,back[gameState.questionNumber-1][3],front[gameState.questionNumber-1][3]);};

    inputArray = [0,0,0,0];
    clickCount = 0;
    totalCorrectInputted = 0;
    totalCorrectInThequestion = 0;
    totalWrongInputted = 0;

    // this.popInOutConfirm(0,800);

    this.objectFadeInOut(this.text1,500,0,500);
    this.objectFadeInOut(this.text2,500,1,0);
    
    this.time.delayedCall(800, () => {
      this.borderCard_1.setTexture("border_purple").setVisible(false);
      this.borderCard_2.setTexture("border_purple").setVisible(false);
      this.borderCard_3.setTexture("border_purple").setVisible(false);
      this.borderCard_4.setTexture("border_purple").setVisible(false);

      this.enableDisablecards(0);


    },[],this);

    // this.enableDisablecards(0);

  },[],this);

  },[],this);




  }

  wrongInput(){
    



    this.clearFeedbackIcons();

    this.popInOutConfirm(1,0);
    this.enableDisablecards(1);

    this.objectFadeInOut(this.text1,500,1,0);

    if(correctArray[gameState.questionNumber-1][0] == inputArray[0]){this.borderCard_1.setTexture("border_green");}else{this.borderCard_1.setTexture("border_red");}
    if(correctArray[gameState.questionNumber-1][1] == inputArray[1]){this.borderCard_2.setTexture("border_green");}else{this.borderCard_2.setTexture("border_red");}
    if(correctArray[gameState.questionNumber-1][2] == inputArray[2]){this.borderCard_3.setTexture("border_green");}else{this.borderCard_3.setTexture("border_red");}
    if(correctArray[gameState.questionNumber-1][3] == inputArray[3]){this.borderCard_4.setTexture("border_green");}else{this.borderCard_4.setTexture("border_red");}


    this.time.delayedCall(500, () => {

      config.audio.incorrectanswer.play();
      this.flipCard(0,this.masterCard,this.borderCard_1,master[gameState.questionNumber-1][0],master[gameState.questionNumber-1][1]);
  
      if(this.borderCard_1.visible){this.flipCard(0,this.optionCard_1,this.borderCard_1,front[gameState.questionNumber-1][0],back[gameState.questionNumber-1][0])};
      if(this.borderCard_2.visible){this.flipCard(0,this.optionCard_2,this.borderCard_2,front[gameState.questionNumber-1][1],back[gameState.questionNumber-1][1])};
      if(this.borderCard_3.visible){this.flipCard(0,this.optionCard_3,this.borderCard_3,front[gameState.questionNumber-1][2],back[gameState.questionNumber-1][2])};
      if(this.borderCard_4.visible){this.flipCard(0,this.optionCard_4,this.borderCard_4,front[gameState.questionNumber-1][3],back[gameState.questionNumber-1][3])};



      this.time.delayedCall(800, () => {
        if(correctArray[gameState.questionNumber-1][0] == inputArray[0] && this.borderCard_1.visible){this.feedbackIconTick_1.setFrame(0).setVisible(true).play("tickkey")};
        if(correctArray[gameState.questionNumber-1][1] == inputArray[1] && this.borderCard_2.visible){this.feedbackIconTick_2.setFrame(0).setVisible(true).play("tickkey")};
        if(correctArray[gameState.questionNumber-1][2] == inputArray[2] && this.borderCard_3.visible){this.feedbackIconTick_3.setFrame(0).setVisible(true).play("tickkey")};
        if(correctArray[gameState.questionNumber-1][3] == inputArray[3] && this.borderCard_4.visible){this.feedbackIconTick_4.setFrame(0).setVisible(true).play("tickkey")};


        if(correctArray[gameState.questionNumber-1][0] != inputArray[0] && this.borderCard_1.visible){this.feedbackIconCross_1.setFrame(0).setVisible(true).play("crosskey")}
        if(correctArray[gameState.questionNumber-1][1] != inputArray[1] && this.borderCard_2.visible){this.feedbackIconCross_2.setFrame(0).setVisible(true).play("crosskey")}
        if(correctArray[gameState.questionNumber-1][2] != inputArray[2] && this.borderCard_3.visible){this.feedbackIconCross_3.setFrame(0).setVisible(true).play("crosskey")}
        if(correctArray[gameState.questionNumber-1][3] != inputArray[3] && this.borderCard_4.visible){this.feedbackIconCross_4.setFrame(0).setVisible(true).play("crosskey")}

      },[],this);



      this.time.delayedCall(3000, () => {

this.clearFeedbackIcons();

config.audio.cardsflippingbacktonumber.play();

        
        this.flipCard(0,this.masterCard,this.borderCard_1,master[gameState.questionNumber-1][1],master[gameState.questionNumber-1][0]);


        if(this.borderCard_1.visible){this.flipCard(0,this.optionCard_1,this.borderCard_1,back[gameState.questionNumber-1][0],front[gameState.questionNumber-1][0]);};
        if(this.borderCard_2.visible){this.flipCard(0,this.optionCard_2,this.borderCard_2,back[gameState.questionNumber-1][1],front[gameState.questionNumber-1][1]);};
        if(this.borderCard_3.visible){this.flipCard(0,this.optionCard_3,this.borderCard_3,back[gameState.questionNumber-1][2],front[gameState.questionNumber-1][2]);};
        if(this.borderCard_4.visible){this.flipCard(0,this.optionCard_4,this.borderCard_4,back[gameState.questionNumber-1][3],front[gameState.questionNumber-1][3]);};


        this.borderCard_1.setTexture("border_purple").setVisible(false);
        this.borderCard_2.setTexture("border_purple").setVisible(false);
        this.borderCard_3.setTexture("border_purple").setVisible(false);
        this.borderCard_4.setTexture("border_purple").setVisible(false);


        inputArray = [0,0,0,0];
        clickCount = 0;
        totalCorrectInputted = 0;
        totalCorrectInThequestion = 0;
        totalWrongInputted = 0;

        // this.popInOutConfirm(0,800);
        this.enableDisablecards(0);



        this.objectFadeInOut(this.text1,500,0,0);
      },[],this);

    },[],this);

    

  }

  flipCard(delay, card,border, cardFront,cardBack) {
    //normal card flip for first time.
    this.time.delayedCall(
      delay,
      () => {
        var timeline = this.tweens.createTimeline({
          onComplete: () => {
            timeline.destroy();
          },
        });

        timeline.add({
          targets: [card,border],
          scale: 1.1,
          duration: 100,
        });

        timeline.add({
          targets: [card,border],
          scaleX: 0,
          duration: 200,
          delay: 100,
          onComplete: () => {
            if (card.texture.key == cardBack) {
              card.setTexture(cardFront);
            } else {
              card.setTexture(cardBack);
            }
          },
        });

        timeline.add({
          targets: [card,border],
          scaleX: 1.1,
          duration: 200,
        });

        timeline.add({
          targets: [card,border],
          scale: 1,
          duration: 100,
        });

        timeline.play();
      },
      [],
      this
    );
  }



  update() {
    // console.log(clickCount);

    // config.audio.bgmusic.stop();




    this.scoreMeter.setCrop(0,0,75,this.cut.y)
    // input = prompt();

  

}
}