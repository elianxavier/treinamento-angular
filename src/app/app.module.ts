import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { CidadesComponent } from "./pages/cidades/cidades.component";
import { HomeComponent } from "./pages/home/home.component";
import { CardComponent } from './components/card/card.component';
import { CardPrincipalComponent } from './components/card-principal/card-principal.component';
import { CardLateralComponent } from './components/card-lateral/card-lateral.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CidadesComponent,
    HomeComponent,
    CardComponent,
    CardPrincipalComponent,
    CardLateralComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
