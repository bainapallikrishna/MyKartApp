import { Routes } from '@angular/router';
import { Login } from '../Pages/login/login';
import { Product } from '../Pages/product/product';
export const routes: Routes = [
    {path: 'login', component: Login},
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'products', loadComponent: () => import('../Pages/product/product').then(m => m.Product) }

];
