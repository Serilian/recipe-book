import {Recipe} from "./recipe.model";
import {EventEmitter, Injectable} from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {


  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('A Test Recipe',
      'This is simply a test',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
      [new Ingredient('test ingredient 1', 2), new Ingredient('test ingredient 2', 1), new Ingredient('test ingredient 3', 5)]),
    new Recipe('Filips Spaghetti',
      'Tasty spaggeti american style',
      'https://statictipy.iplsc.com/art/2010/w208/4176_big.jpg',
      [new Ingredient('makaron', 1),
        new Ingredient('mieso mielone', 250), new Ingredient('sos pomidorowy', 1), new Ingredient('ser', 1)])];

  getRecipes() {
    return this.recipes.slice();
  }

  constructor(private slService: ShoppingListService) {
  };

  addToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  getRecipe (id: number) {
    return this.recipes[id];
  }




}
