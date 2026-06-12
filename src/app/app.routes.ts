import { Routes } from '@angular/router';
import { Login } from '../Pages/login/login';
import { Products } from '../Pages/products/products';
export const routes: Routes = [
    {path: 'login', component: Login},
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'products', loadComponent: () => import('../Pages/products/products').then(m => m.Products) }

];
