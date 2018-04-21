import { Component, EventEmitter, Output } from '@angular/core';
import {DataStorageService} from "../shared/data-storage.service";
import {RecipeService} from "../recipes/recipe.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  constructor(private rService: RecipeService, private dService: DataStorageService) {}

  onSaveData() {
    this.dService.storeData().subscribe(
      (response) => console.log(response),
      (error1 => console.log(error1))
    );
  }

  onFetchData() {
    this.dService.fetchData();
  }

}
