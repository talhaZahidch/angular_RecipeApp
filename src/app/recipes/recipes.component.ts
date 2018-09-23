import { Component, OnInit } from '@angular/core';
import { Recipes } from './recipes-model';
import { RecipeService } from './recipe.services';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
  selectedrecipeproperty: Recipes;
  constructor(private RecipeService: RecipeService) { }

  ngOnInit() {
    this.RecipeService.recipeSelected.subscribe(
      (recipe: Recipes) => {
        this.selectedrecipeproperty = recipe;
      }
    );
  }

}
