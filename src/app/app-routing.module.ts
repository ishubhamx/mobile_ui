import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./Component/home/home.component";
import { ViewAllComponent } from "./Component/view-all/view-all.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "viewall", component: ViewAllComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
