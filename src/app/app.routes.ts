import { Routes } from '@angular/router';
import { Login } from '../Pages/login/login';
import { SubjectConcept } from './Practice/subject/subject';
import { User } from '../Pages/user/user';
import { Category } from '../Pages/category/category';
import { Products } from '../Pages/products/products';

export const routes: Routes = [

    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'login', component: Login},
    {path: 'User', component: User},
    {path: 'subject', component: SubjectConcept},
    {path: 'categories', component: Category},
    {path: '**', redirectTo: 'login', pathMatch: 'full'},
    {path:"products", component:Products},

  

];
