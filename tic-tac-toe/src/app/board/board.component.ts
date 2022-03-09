import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  squares: any[];
  xIsNext:  boolean;
  winner: string | null;
  isDisabled: boolean;

  constructor() {
    this.squares = Array(9).fill(null);
    this.winner = null;
    this.xIsNext = true;
    this.isDisabled = false;
   }

  ngOnInit(): void {
  }

  newGame() {
    this.squares = Array(9).fill(null);
    this.winner = null;
    this.xIsNext = true;
    this.isDisabled = false;
  }

  get player() {
    return this.xIsNext ? 'X' : 'O';
  }

  makeMove(index: number){
    console.log(index)
    if (!this.squares[index]){
      this.squares.splice(index, 1, this.player);
      this.xIsNext = !this.xIsNext;
    }
    this.winner = this.calculateWinner()
    this.isDisabled = this.winner ? true : false;
    console.log('made a move');
    console.log(this.isDisabled);
  }

  calculateWinner():  string | null{
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let i = 0; i < lines.length; i++){
      const [a, b, c] = lines[i];
      if (
        this.squares[a] &&
        this.squares[a] === this.squares[b] &&
        this.squares[a] === this.squares[c]
      ){
        return this.squares[a];
      }
    }
    return null;
  }
}
