import { Component } from '@angular/core';
import { Product } from '../../Services/product';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { inject } from '@angular/core';
@Component({
  selector: 'app-products',
  imports: [CommonModule, FormsModule],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  products: any[] = [];
  constructor(private productService: Product) {
    this.productService.getProducts().subscribe((data) => {
      console.log('Products:', data);
      this.products = data;
    });
  }
}
