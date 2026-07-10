import { Component } from '@angular/core';
import { LoaderService } from '../loader-service';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loader.html',
  styleUrl: './loader.css',
})
export class Loader {
  loading$: Observable<boolean>;

  constructor(private loaderService: LoaderService) {
    this.loading$ = this.loaderService.loading$;
  }
}