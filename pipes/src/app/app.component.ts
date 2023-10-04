import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name!: string;
  date!: string;
  amount!: number;
  miles!: number;

  onNameChange(value:string){
    this.name = value;
  }
  onDateChange(value:string){
    this.date = value;
  }

  onAmountChange(value:string){
    this.amount = parseFloat(value);
  }

/* GENERATING A PIPE */
  onMilesChange(value:string){
    this.miles = parseFloat(value);
  }
}
