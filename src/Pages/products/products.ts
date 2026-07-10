import { Component } from '@angular/core';
import { Product } from '../../Services/product';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Loader } from '../../Shared/loader/loader';
@Component({
  selector: 'app-products',
  imports: [CommonModule, FormsModule, RouterLink, Loader],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  private productService = inject(Product);
  products: any[] = [];
noProducts = false;
  ngOnInit() {
     this.productService.getProducts().subscribe((data) => {
      console.log('Products:', data);
      this.products = data;
      if (this.products.length === 0) {
        console.log('No products found.');
      }
    });
}
}
