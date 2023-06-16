import { Component, Inject } from "@angular/core";

@Component({
  template: require("./app.component.html"),
})
export class AppComponent {

  constructor(@Inject('piral') piral: any) {
    console.log('AppComponent rendered', piral.meta);
  }
}
