# Find the bug

- `npm i`
- `npm run build`
- `npm run start`
- Navigate to `/foo`

> why  404?

# Reason

Failing:
```ts
  app.registerPage('/foo/*', fromNg(AppComponent));
```

Working:

```ts
  app.registerPage('/foo/:path*', fromNg(AppComponent));
```
