import { Component } from "@angular/core";

@Component({
  template: `
  <h1>More Routing</h1>
  <ul>
    <li><a routerLink="/foo/one">First page.</a></li>
    <li><a routerLink="/page">React page.</a></li>
  </ul>`,
})
export class SecondPageComponent {}
