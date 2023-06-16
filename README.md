# Start

- `npm i`
- `npm run build`
- `npm run start`

# Routing bug (solved)

- Navigate to `/foo` -> 404
```ts
  // failing:
  app.registerPage('/foo/*', fromNg(AppComponent));

  // working:
  app.registerPage('/foo/:path*', fromNg(AppComponent));
```

# Styling bug

- use `styles: [require("./app.component.scss")]`
- see error:
> piral-base-full.mjs:1020 Failed to load SystemJS module http://localhost:1234/$pilet-api/0/index.js?> updated=1686919201670 Error: Module build failed (from ./node_modules/css-loader/dist/cjs.js):
ValidationError: Invalid options object. CSS Loader has been initialized using an options object that does not match the API schema.
> - options.esModule should be a boolean.
>   -> Use the ES modules syntax.
>   -> Read more at https://github.com/webpack-contrib/css-loader#esmodule