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

  get randomPhrase(){
    let index = Math.floor(Math.random() * (this.phrases.length));
    phrase.phrase = this.phrases[index];
    console.log(phrase.phrase);
    return phrase.phrase;
  }

  startGame(){
    document.getElementById('overlay').style.display = 'none';
    this.activePhrase = this.randomPhrase;
    this.activePhrase.addPhraseToDisplay();
    console.log('startGame method triggered');
  }

  handleInteraction(e){
    e.target.disabled = true;
    let lis = document.querySelector('ul').children;
    for (let i = 0; i < lis.length; i++){
      if (e.target.textContent === lis[i].textContent) {
          e.target.classList.add('chosen');
          phrase.showMatchedLetter();
          if(game.checkForWin()){
            game.gameOver();
          }
      } else {
          e.target.classList.remove('wrong');
          this.removeLife();
      }
    }
  }

  checkforWin(){
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

  removeLife(){
    let lives = document.getElementsByTagName('img');
    if (lives[this.missed].src = "images/liveHeart.png"){
          lives[this.missed].src = "images/lostHeart.png"
          this.missed+=1;
    } if (lives[this.missed].src = "images/lostHeart.png"){
        this.missed+=1;
    } if (this.missed === 5){
        this.gameOver();
      }
    };


  gameOver(gameWon){
    document.getElementById('overlay').style.display = 'block';
    if (this.missed === 5){
      gameWon = false;
      document.getElementById('game-over-message').textContent = 'Sorry, game over!'
      document.getElementById('game-over-message').className = 'lose';
  } else if (this.checkforWin()){
      gameWon = true;
      document.getElementById('game-over-message').textContent = 'You win!'
      document.getElementById('game-over-message').className = 'win';
    } /// think you also need to check if checkForWin returns false.
  }
}
