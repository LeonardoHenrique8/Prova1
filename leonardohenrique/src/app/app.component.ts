import { Component } from '@angular/core';
import { Words } from './words';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  
  palavra: Words = new Words()
  palavras: Words[] = []
  verificarWord = false

  wordSave(form) {

    /*verficar(id){
      if(this.words.find(s=> s.id === id))
    }*/
    
    if (!this.palavra.id) {
      this.palavra.id = (new Date()).getTime()
      this.palavras.push(this.palavra)
    
    } else {
      let teste = this.palavras.find(s => s.id === this.palavra.id)
      teste.word = this.palavra.word
      teste.significado = this.palavra.significado
    }

    
    this.palavra = new Words()
    form.resetForm()
  }


}
