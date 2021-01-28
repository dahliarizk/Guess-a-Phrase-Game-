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
      li.className = `hide letter ${letter}`
      li.textContent = letter;
    });
    return ul;
    console.log('ul section populated')
  }
}
