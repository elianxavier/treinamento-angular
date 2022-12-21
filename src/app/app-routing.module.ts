import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CidadesComponent } from "./pages/cidades/cidades.component";
import { HomeComponent } from "./pages/home/home.component";
import { CnnComponent } from "./pages/cnn/cnn.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "cnn", component: CnnComponent },
  { path: "cidades", component: CidadesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
