import { Component, EventEmitter, Output } from '@angular/core';
import {DataStorageService} from "../../shared/data-storage.service";
import {RecipeService} from "../../recipes/recipe.service";
import {AuthService} from "../../auth/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  constructor(private rService: RecipeService,
              private dService: DataStorageService,
              private authService: AuthService
              ) {}

  onSaveData() {
    this.dService.storeData().subscribe(
      (response) => console.log(response),
      (error1 => console.log(error1))
    );
  }

  onFetchData() {
    this.dService.fetchData();
  }

  onLogout() {
    this.authService.logout();
    console.log('logout');
  }

  isAuthenticated() {
    return this.authService.isAuthenticated();
  }

}
