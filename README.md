# Current status

> Failing

# Start

- `npm i`
- `npm run build`
- `npm run start`

# Bug with imports relative to baseUrl

> second.component.ts

```ts
// working:
import { SearchbarComponent } from "../../components/searchbar/searchbar.component";

// failing:
import { SearchbarComponent } from "src/app/components/searchbar/searchbar.component";
```