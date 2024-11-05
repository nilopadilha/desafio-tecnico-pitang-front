import { Routes } from '@angular/router';
import { CarFormComponent } from './car-form/car-form.component';
import { CarListComponent } from './car-list/car-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserListComponent } from './user-list/user-list.component';

export const routes: Routes = [{ path: 'users', component: UserListComponent },
  { path: 'users/new', component: UserFormComponent },
  { path: 'users/edit/:id', component: UserFormComponent },
  { path: '', redirectTo: '/users', pathMatch: 'full' }
  { path: 'cars', component: CarListComponent },
  { path: 'cars/new', component: CarFormComponent },
  { path: 'cars/edit/:id', component: CarFormComponent },
  { path: '', redirectTo: '/cars', pathMatch: 'full' }
];
