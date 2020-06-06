import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  imgpueblo: Array<object> = [{ 
      image: 'assets/images/t1.jpg',
    thumbImage: 'assets/images/t1.jpg'
     },
     { 
      image: 'assets/images/t2.jpg',
    thumbImage: 'assets/images/t2.jpg'
     },
     { 
      image: 'assets/images/t3.jpg',
    thumbImage: 'assets/images/t3.jpg'
     }
];

imgpueblo2: Array<object> = [{ 
  image: 'assets/images/t4.jpg',
thumbImage: 'assets/images/t4.jpg'
 },
 { 
  image: 'assets/images/t5.png',
thumbImage: 'assets/images/t5.png'
 },
 { 
  image: 'assets/images/3.jpg',
thumbImage: 'assets/images/3.jpg'
 }
];

  constructor() { }

  ngOnInit(): void {
  }

}
