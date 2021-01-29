class Phrase{
  constructor(phrase){
    this.phrase = phrase.toLowerCase();
  }

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

  checkLetter(letter){
    if (this.phrase.split('').includes(letter)){
      console.log('correct letter')
      return true;
    } else {
      return false;
    }
  };

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
