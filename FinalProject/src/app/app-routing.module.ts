import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { DetailsVetmentComponent } from './details-vetment/details-vetment.component';
import { HomeComponent } from './home/home.component';
import { ListeVetmentsComponent } from './liste-vetments/liste-vetments.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'collection', component: ListeVetmentsComponent },
  { path: 'detail/:id', component: DetailsVetmentComponent },
  { path: 'panier', component: CartComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
