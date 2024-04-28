import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DetailsComponent } from './ProfilComponents/details/details.component';
import { AboutComponent } from './about/about.component';
import { AffiliateComponent } from './affiliate/affiliate.component';
import { AuthGuard } from './auth.guard';
import { CartComponent } from './cart/cart.component';
import { ContactComponent } from './contact/contact.component';
import { DetailsVetmentComponent } from './details-vetment/details-vetment.component';
import { FaqComponent } from './faq/faq.component';
import { HomeComponent } from './home/home.component';
import { ListeVetmentsComponent } from './liste-vetments/liste-vetments.component';
import { LoginComponent } from './login/login.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { ProfilComponent } from './profil/profil.component';
import { RechercheComponent } from './recherche/recherche.component';
import { RegisterComponent } from './register/register.component';
import { ReturnsComponent } from './returns/returns.component';
import { ServicesComponent } from './services/services.component';
import { ShippingComponent } from './shipping/shipping.component';
import { VetementNewComponent } from './vetement-new/vetement-new.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'collection', component: ListeVetmentsComponent },
  { path: 'detail/:id', component: DetailsVetmentComponent },
  { path: 'panier', component: CartComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profil', component: ProfilComponent, canActivate: [AuthGuard] },
  { path: 'rechercher', component: RechercheComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'new', component: VetementNewComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'privacy', component: PrivacyComponent },
  { path: 'affiliate', component: AffiliateComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'shipping', component: ShippingComponent },
  { path: 'returns', component: ReturnsComponent },
  { path: 'details', component: DetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
