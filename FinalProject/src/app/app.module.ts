import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AccountDashboardComponent } from './ProfilComponents/account-dashboard/account-dashboard.component';
import { DetailsComponent } from './ProfilComponents/details/details.component';
import { OrderHistoryComponent } from './ProfilComponents/order-history/order-history.component';
import { PasswordComponent } from './ProfilComponents/password/password.component';
import { AboutComponent } from './about/about.component';
import { AffiliateComponent } from './affiliate/affiliate.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BestSellerComponent } from './best-seller/best-seller.component';
import { CartComponent } from './cart/cart.component';
import { CollectionsComponent } from './collections/collections.component';
import { ContactComponent } from './contact/contact.component';
import { DetailsVetmentComponent } from './details-vetment/details-vetment.component';
import { FaqComponent } from './faq/faq.component';
import { FooterComponent } from './footer/footer.component';
import { HeroComponent } from './hero/hero.component';
import { HomeComponent } from './home/home.component';
import { ListeVetmentsComponent } from './liste-vetments/liste-vetments.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { ProfilComponent } from './profil/profil.component';
import { PromotionComponent } from './promotion/promotion.component';
import { RechercheComponent } from './recherche/recherche.component';
import { RegisterComponent } from './register/register.component';
import { ReturnsComponent } from './returns/returns.component';
import { ServicesComponent } from './services/services.component';
import { ShippingComponent } from './shipping/shipping.component';
import { SustainabilityComponent } from './sustainability/sustainability.component';
import { VetementNewComponent } from './vetement-new/vetement-new.component';




@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeroComponent,
    BestSellerComponent,
    CollectionsComponent,
    SustainabilityComponent,
    FooterComponent,
    ListeVetmentsComponent,
    HomeComponent,
    DetailsVetmentComponent,
    CartComponent,
    LoginComponent,
    PromotionComponent,
    ProfilComponent,
    AccountDashboardComponent,
    DetailsComponent,
    PasswordComponent,
    OrderHistoryComponent,
    RechercheComponent,
    RegisterComponent,
    VetementNewComponent,
    AboutComponent,
    ContactComponent,
    ServicesComponent,
    PrivacyComponent,
    AffiliateComponent,
    FaqComponent,
    ShippingComponent,
    ReturnsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
