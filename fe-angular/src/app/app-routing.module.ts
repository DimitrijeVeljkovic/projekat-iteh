import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MobilesComponent } from './mobiles/mobiles.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: 'products', component: ProductListComponent },
  { path: 'mobiles', component: MobilesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
