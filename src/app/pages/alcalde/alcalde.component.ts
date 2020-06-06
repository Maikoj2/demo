import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alcalde',
  templateUrl: './alcalde.component.html',
  styles: [
  ]
})
export class AlcaldeComponent implements OnInit {

  alcalde: Array<object> = [{ 
    image: 'assets/images/alcalde.png',
  thumbImage: 'assets/images/alcalde.png'
  }
];
  constructor() { }

  ngOnInit(): void {
  }

}
