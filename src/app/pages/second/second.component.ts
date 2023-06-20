import { Component } from "@angular/core";
import { SearchbarComponent } from 'src/app/components/searchbar/searchbar.component';

@Component({
  templateUrl: './second.component.html',
  standalone: true,
  imports: [
    SearchbarComponent
  ]
})
export class SecondPageComponent {

  setSearchFilter(searchFilter: string) {
    alert(searchFilter);
  }
}

