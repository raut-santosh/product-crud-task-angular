import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products = [
    {
      name: "Acer Aspire",
      price: 49000,
      sku: "ASC-AP-21",
      images: [
        {
          path: "assets/products/product1.jpg"
        }
      ]
    },
    {
      name: "Lenovo ideapad",
      price: 36000,
      sku: "LN-15IKB",
      images: [
        {
          path: "assets/products/product2.jpg"
        }
      ]
    },
    {
      name: "Dell Legion",
      price: 56000,
      sku: "DL-LG-121",
      images: [
        {
          path: "assets/products/product3.jpg"
        }
      ]
    },
    {
      name: "Acer Alien",
      price: 66000,
      sku: "AL-21",
      images: [
        {
          path: "assets/products/product4.jpg"
        }
      ]
    },
    {
      name: "Nike Shoe",
      price: 6000,
      sku: "NK-21",
      images: [
        {
          path: "assets/products/product5.jpg"
        }
      ]
    },
    {
      name: "Nike Bag",
      price: 3000,
      sku: "NK-BG-1",
      images: [
        {
          path: "assets/products/product6.jpg"
        }
      ]
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
