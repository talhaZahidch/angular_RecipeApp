import { Component, OnInit } from '@angular/core';
import { Recipes } from '../recipes-model';
import { RecipeService } from '../recipe.services';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css'],
})
export class RecipesListComponent implements OnInit {
  recipe: Recipes[];
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipe = this.recipeService.getRecipes();
  }


}
