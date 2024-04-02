import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HeroComponent } from './hero/hero.component';
import { BestSellerComponent } from './best-seller/best-seller.component';
import { CollectionsComponent } from './collections/collections.component';
import { SustainabilityComponent } from './sustainability/sustainability.component';
import { FooterComponent } from './footer/footer.component';
import { ListeVetmentsComponent } from './liste-vetments/liste-vetments.component';
import { HomeComponent } from './home/home.component';

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
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
