import { Recipe } from './recipe.model';
import { EventEmitter, Output } from '@angular/core';

export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Test', 'Solo un test', 'https://www.ricettedellanonna.net/wp-content/uploads/2017/01/Ricetta-frittelle-di-patate-e-cipolle.jpg'),
        new Recipe('Test2', 'Solo un test', 'https://www.ricettedellanonna.net/wp-content/uploads/2017/01/Ricetta-frittelle-di-patate-e-cipolle.jpg'),
        new Recipe('Test3', 'Solo un test', 'https://www.ricettedellanonna.net/wp-content/uploads/2017/01/Ricetta-frittelle-di-patate-e-cipolle.jpg')
      ];

      getRecipes(): Recipe[] {
          return this.recipes.slice();
      }
}
