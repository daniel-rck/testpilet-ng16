import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { FirstPageComponent } from "./first.component";
import { SecondPageComponent } from "./second.component";

const routes: Routes = [
  { path: "foo", redirectTo: "/foo/one", pathMatch: "full" },
  { path: "foo/one", component: FirstPageComponent },
  { path: "foo/two", component: SecondPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
