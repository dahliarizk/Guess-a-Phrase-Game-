//initializes a game object, with 5 phrase objects. sets missed property to 0,
//and activePhrase to null.
class Game{
  constructor(){
    this.missed = 0;
    this.phrases = [
    new Phrase("Heres looking at you kid"),
    new Phrase("Toto I dont think were in Kansas anymore"),
    new Phrase("I am big Its the pictures that got small"),
    new Phrase("Make him an offer he cant refuse"),
    new Phrase("You cant handle the truth")
    ];
    this.activePhrase = null;
  }

//returns random phrase from this.phrases array
  getRandomPhrase(){
    let index = Math.floor(Math.random() * (this.phrases.length));
    phrase.phrase = this.phrases[index];
    console.log(phrase.phrase);
    return phrase.phrase;
  }

//sets activePhrase in the game according to the phrase returned from getter
//method.
  startGame(){
    document.getElementById('overlay').style.display = 'none';
    this.activePhrase = this.getRandomPhrase();
    this.activePhrase.addPhraseToDisplay();
  }

//method to be called during event listeners when a key is clicked or keyed
//from keyboard. disables keys, modifies class Names, removes life and ends game if
//game is lost (checkForWin method returns true) or lost (missed property equals 5).

  handleInteraction(key){
    let keyrows = document.querySelectorAll('.keyrow')
    let keys = []
    for (let i = 0; i < keyrows.length; i++){
      for (let j = 0; j < keyrows[i].children.length; j++){
        keys.push(keyrows[i].children[j]);
      }
    }
    let lis = document.querySelector('ul').children;
    let letters = [];
    for (let i = 0; i < lis.length; i++){
      letters.push(lis[i].textContent);
    } if (letters.includes(key.textContent)) {
        key.disabled = true;
        key.classList.add('chosen');
        this.activePhrase.showMatchedLetter(key.textContent);
        if (this.checkForWin())
          this.gameOver();
    } else if (!letters.includes(key.textContent) && !key.disabled) {
        key.disabled = true;
        key.classList.add('wrong');
        this.removeLife();
    }
  };


//checks if letter selected matches letter in activePhrase. if so, added to numberRevealed.
//if numberRevealed = length of activePhrase, method returns true.
  checkForWin(){
    let lis = document.querySelector('ul').children;
    let numberRevealed = 0;
    for (let i = 0; i < lis.length; i++) {
      if (lis[i].className.startsWith('hide')){
        return false
    } else if (lis[i].className.startsWith('show')){
          numberRevealed++;
    } else if (lis[i].className.startsWith('space')){
          numberRevealed++;
    } if (numberRevealed === lis.length){
            return true
    }
  }
};

//replaces liveHeart image with lostHeart image each time a wrong letter is guessed
//or method is called. if this.missed = 5, gameOver method is called.
  removeLife(){
    let lives = document.getElementsByTagName('img');
    lives[this.missed].src = "images/lostHeart.png"
    this.missed+=1;
    if (this.missed === 5){
        this.gameOver();
      }
    };

//changes display of overlay element and textContent of gameover message
//depending on whether game is lost or won.
  gameOver(gameWon){
    document.getElementById('overlay').style.display = 'block';
    if (this.missed === 5 || !this.checkForWin()){
      gameWon = false;
      document.getElementById('game-over-message').textContent = 'Sorry, game over!'
      document.getElementById('overlay').className = 'lose';
  } else if (this.checkForWin()){
      gameWon = true;
      document.getElementById('game-over-message').textContent = 'You win!'
      document.getElementById('overlay').className = 'win';
    }
  }
};
