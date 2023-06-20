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

Output:

> ERROR in ./src/app/pages/second/second.component.ts 4:0-86
Module not found: Error: Can't resolve 'src/app/components/searchbar/searchbar.component' in '...\testpilet-ng16\src\app\pages\second'
resolve 'src/app/components/searchbar/searchbar.component' in '...\testpilet-ng16\src\app\pages\second'