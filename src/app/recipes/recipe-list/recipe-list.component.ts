import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    // tslint:disable-next-line:max-line-length
    new Recipe('Test', 'Solo un test', 'https://www.ricettedellanonna.net/wp-content/uploads/2017/01/Ricetta-frittelle-di-patate-e-cipolle.jpg'),
    new Recipe('Test2', 'Solo un test', 'https://www.ricettedellanonna.net/wp-content/uploads/2017/01/Ricetta-frittelle-di-patate-e-cipolle.jpg'),
    new Recipe('Test3', 'Solo un test', 'https://www.ricettedellanonna.net/wp-content/uploads/2017/01/Ricetta-frittelle-di-patate-e-cipolle.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    // console.log(JSON.stringify(recipe));
    this.recipeWasSelected.emit(recipe);
  }

}
