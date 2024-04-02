import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeVetmentsComponent } from './liste-vetments/liste-vetments.component';
import { HomeComponent } from './home/home.component';
import { DetailsVetmentComponent } from './details-vetment/details-vetment.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'collection', component: ListeVetmentsComponent },
  { path: 'detail/:id', component: DetailsVetmentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
