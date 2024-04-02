import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeVetmentsComponent } from './liste-vetments/liste-vetments.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'collection', component: ListeVetmentsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
