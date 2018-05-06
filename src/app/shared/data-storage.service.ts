import {Injectable} from '@angular/core';
import {RecipeService} from '../recipes/recipe.service';
import {Recipe} from '../recipes/recipe.model';
import 'rxjs/add/operator/map';
import {AuthService} from "../auth/auth.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable()
export class DataStorageService {

  constructor(private httpClient: HttpClient,
              private recipeService: RecipeService,
              private authService: AuthService
  ) {
  }

  storeData() {
    const token = this.authService.getToken();
    return this.httpClient.put('https://ng-recipe-book-9f137.firebaseio.com/recipes.json?auth=' + token, this.recipeService.getRecipes(), {
      observe: "body"
      // headers: new HttpHeaders().set()
      // params: new HttpParams().set('auth', token)
    });
  }

  fetchData() {
    const token = this.authService.getToken();
    this.httpClient.get<Recipe[]>('https://ng-recipe-book-9f137.firebaseio.com/recipes.json?auth=' + token, {
      observe: "body",
      responseType: "json"
    })
      .map(
        (recipes) => {
          for (const recipe of recipes) {
            if (!recipe['ingredients']) {
              recipe['ingredients'] = [];
            }
          }
          return recipes;
        }
      )
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipeService.setRecipes(recipes);
        }
      );
  }
}
