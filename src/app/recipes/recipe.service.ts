import { Recipe } from './recipe.model';
import { EventEmitter, Output } from '@angular/core';
import { Ingredient } from '../share/ingredient.model';

export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Frittelle',
                   'Frittelle di Patate e Cipolle',
                   'https://www.ricettedellanonna.net/wp-content/uploads/2017/01/Ricetta-frittelle-di-patate-e-cipolle.jpg',
                   [
                       new Ingredient('Patate', 2),
                       new Ingredient('Cipolle', 1)
                   ]),
        new Recipe('Melanzane',
                   'Melanzane Gratinate',
                   'https://www.ricettedellanonna.net/wp-content/uploads/2012/07/melanzane_gratinate.jpg',
                   [
                       new Ingredient('Melanzane', 3),
                       new Ingredient('Mollica', 20)
                   ]),
        new Recipe('Crispelle',
                   'Crispelle Ripiene',
                   'http://www.ntacalabria.it/wp-content/uploads/2017/11/Crespelle-Ripiene-770x439_c.jpg',
                   [
                       new Ingredient('Patate', 3),
                       new Ingredient('Besciamella', 20)
                   ])
      ];

      getRecipes(): Recipe[] {
          return this.recipes.slice();
      }
}
