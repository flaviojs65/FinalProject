import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeVetmentsComponent } from './liste-vetments/liste-vetments.component';
import { HomeComponent } from './home/home.component';
import { DetailsVetmentComponent } from './details-vetment/details-vetment.component';
import {AchatComponent} from "./achat/achat.component";
import {LoginComponent} from "./login/login.component";

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'collection', component: ListeVetmentsComponent },
  { path: 'achat', component: AchatComponent },
  { path: 'login', component: LoginComponent },
  { path: 'detail/:id', component: DetailsVetmentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
