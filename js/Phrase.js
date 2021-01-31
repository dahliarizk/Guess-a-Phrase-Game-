//constructor method that creates new phrase, sets all chars to lowercase
class Phrase{
  constructor(phrase){
    this.phrase = phrase.toLowerCase();
  }

//adds li elements, each for a letter or space, to the gameboard.
  addPhraseToDisplay(){
    let letters = this.phrase.split('');
    let ul = document.getElementById('phrase').firstElementChild;
    letters.forEach(letter => {
      let li = document.createElement('li');
      ul.appendChild(li);
      if (letter !== ' ') {
      li.className = `hide letter ${letter}`
      li.textContent = letter;
    } else {
      li.className = "space";
      li.textContent = ' ';
    }
    });
    return ul;
  }

//checks each letter in the phrase to see if selected letter matches
  checkLetter(letter){
    if (this.phrase.split('').includes(letter)){
      return true;
    } else {
      return false;
    }
  };

//changes class name for li element so that it displays if there's a match.
  showMatchedLetter(letter){
    let lis = document.querySelector('ul').children;
    for (let i = 0; i < lis.length; i++){
      if (this.checkLetter(letter)){
        if (lis[i].textContent === letter){
        lis[i].className = `show letter ${letter}`
        }
      }
    }
  };


}
