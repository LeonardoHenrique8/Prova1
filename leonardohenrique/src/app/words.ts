export class Words {
    word: string
    significado: string
    id: number
  
    constructor(word?: string,id?: number, significado?: string) {
      this.word = word
      this.id = id
      this.significado = significado
    }
  }