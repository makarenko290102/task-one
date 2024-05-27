import { Component } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrl: './calc.component.scss'
})
export class CalcComponent {
    first: number = 1;
    second: number =1;

    operation: string = '+';

    operations: string[] = ['+', '-', '*', '/',];

    result: number | undefined = undefined;

    calc() { 
        switch(this.operation){
          case '+':
            this.result = this.first + this.second;
            break;
          case '-':
            this.result = this.first - this.second;
            break;
          case '*':
            this.result = this.first * this.second;
            break;
          case '/':
            this.result = this.first / this.second;
            break;

        }
    }
  }
