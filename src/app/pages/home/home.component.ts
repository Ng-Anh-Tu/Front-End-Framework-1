import { Component } from '@angular/core';
import { product } from 'src/app/common/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  products: product[]= [
    {
      id:'1',
      name:'product 1',
      price:100,

      description :'Product 1 description',
      imgUrl:'https://file.hstatic.net/200000053174/file/cac-loai-ao-vest-nam_07a5c0b0bfee420b8edc3225a9529187.jpg',
    },
    {
      id:'2',
      name:'product 2',
      price:200,
      description :'Product 1 description',
      imgUrl:'https://file.hstatic.net/200000053174/file/cac-loai-ao-vest-nam_07a5c0b0bfee420b8edc3225a9529187.jpg',
    },
    {
      id:'3',
      name:'product 3',
      price:300,
      description :'Product 1 description',
      imgUrl:'https://file.hstatic.net/200000053174/file/cac-loai-ao-vest-nam_07a5c0b0bfee420b8edc3225a9529187.jpg',
    },
  ]
}
