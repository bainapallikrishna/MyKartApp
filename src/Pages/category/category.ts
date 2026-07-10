import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { CategoryService } from '../../Services/category-service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Loader } from '../../Shared/loader/loader';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-category',
  imports: [RouterModule, CommonModule,FormsModule,Loader],
  templateUrl: './category.html',
  styleUrl: './category.css',
})
export class Category {
  public category: any[] = [];
  public categoeryservice=inject(CategoryService);
  constructor() {
    this.categoeryservice.getCategories().subscribe((data: any) => {
      this.category = data;
      console.log('Category Data:', this.category);
    });
  }
}
