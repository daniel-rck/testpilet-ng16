import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { FirstPageComponent } from "./pages/first/first.component";
import { SecondPageComponent } from './pages/second/second.component';

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
