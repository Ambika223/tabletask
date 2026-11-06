import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  searchProductName!: string

  constructor() { }
  ngOnInit(): void {

  }

  onProdAdd(productName:) {
  
  }
}