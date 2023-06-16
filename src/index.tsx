// angular stuff
import "@angular/compiler";
// other
import * as React from 'react';
import { Link } from 'react-router-dom';
import type { PiletApi } from 'sample-piral';
import { AppModule } from './app/app.module';
import { defineNgModule, fromNg } from 'piral-ng/convert';
import { Tile } from './Tile';
import { AppComponent } from "./app/app.component";

const Page = React.lazy(() => import('./Page'));

export function setup(app: PiletApi) {
  app.registerPage('/page', Page);

  app.showNotification('Hello from Piral!', {
    autoClose: 2000,
  });
  app.registerMenu(() => <Link to="/page">Page</Link>);
  app.registerMenu(() => <Link to="/sub">Angular-Pages</Link>);
  
  app.registerTile(() => <div>Welcome to Piral!</div>, {
    initialColumns: 2,
    initialRows: 2,
  });


  defineNgModule(AppModule);
  app.registerPage("sub/*", fromNg(AppComponent));

  app.registerTile(fromNg(Tile), {
    initialColumns: 2,
    initialRows: 2,
  });
}
