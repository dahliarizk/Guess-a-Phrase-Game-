class Game{
  constructor(){
    this.missed = 0;
    this.phrases = [
    {phrase: "Here's looking at you, kid"},
    {phrase: "Toto, I don't think we're in Kansas anymore"},
    {phrase: "I am big. It's the pictures that got small"},
    {phrase: "Make him an offer he can't refuse"},
    {phrase: "You can't handle the truth"}
    ];
    this.activePhrase = null;
  }

  get randomPhrase(){
    let index = Math.floor(Math.random() * (this.phrases.length));
    phrase.phrase = this.phrases[index];
    console.log('random Phrase generated');
    return phrase.phrase;  
  }

  startGame(){
    document.getElementById('overlay').style.display = 'none';
    this.activePhrase = this.randomPhrase;
    this.activePhrase.addPhraseToDisplay;
    console.log('startGame method triggered');
  }
}
