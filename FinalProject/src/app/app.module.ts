import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BestSellerComponent } from './best-seller/best-seller.component';
import { CartComponent } from './cart/cart.component';
import { CollectionsComponent } from './collections/collections.component';
import { DetailsVetmentComponent } from './details-vetment/details-vetment.component';
import { FooterComponent } from './footer/footer.component';
import { HeroComponent } from './hero/hero.component';
import { HomeComponent } from './home/home.component';
import { ListeVetmentsComponent } from './liste-vetments/liste-vetments.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { SustainabilityComponent } from './sustainability/sustainability.component';


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
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
