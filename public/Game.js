const gameState = {
  // score: 0,
  // attempted: 0, // will have to update this variable to be shown in the end screen
  questionNumber: 0,
  // hints: 0,
  // gameWin: false,
  // firstMistake: false,
  // retry:0,
};

const config = {
  type: Phaser.AUTO,
  width: 1280,
  height: 720,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  zoom: 1,
  fps: { target: 60 },
  backgroundColor: "ffffff",
  physics: {
    default: "arcade",
  },
  scene: [LoadScene, StartScene, GameScene, EndScene], 

  audio: {
    disableWebAudio: true,
    allcorrectanswerselected: null,
    bgmusic: null,
    cardsflippingbacktonumber: null,
    correctselection: null,
    incorrectanswer: null,
    OptionCardsSlideIN: null,
    cardhover: null,
    cardsgotorewardbar: null,
  },

};

const game = new Phaser.Game(config);
