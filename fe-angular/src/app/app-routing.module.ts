import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LaptopsComponent } from './components/laptops/laptops.component';
import { MobilesComponent } from './components/mobiles/mobiles.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { TabletsComponent } from './components/tablets/tablets.component';

const routes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: 'products', component: ProductListComponent },
  { path: 'mobiles', component: MobilesComponent },
  { path: 'laptops', component: LaptopsComponent },
  { path: 'tablets', component: TabletsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
