import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { LaptopsComponent } from './components/laptops/laptops.component';
import { LoginComponent } from './components/login/login.component';
import { MobilesComponent } from './components/mobiles/mobiles.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { TabletsComponent } from './components/tablets/tablets.component';

const routes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: 'products', component: ProductListComponent },
  { path: 'mobiles', component: MobilesComponent },
  { path: 'laptops', component: LaptopsComponent },
  { path: 'tablets', component: TabletsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
