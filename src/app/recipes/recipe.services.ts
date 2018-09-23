import { Recipes } from "./recipes-model";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListservices } from "../shopping-list/shopping-list.services";

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipes>();
    private recipe: Recipes[] = [
        new Recipes('Burger', 'Test', 'https://www.seriouseats.com/recipes/images/2015/07/20150702-sous-vide-hamburger-anova-primary-1500x1125.jpg', [new Ingredient('Meat', 1),
        new Ingredient('French Fires', 20)]),
        new Recipes('Cake', 'Test', 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/12/20/0/FNM_010113-Smores-Cake-Recipe_s4x3.jpg.rend.hgtvcom.616.462.suffix/1371611980872.jpeg', [new Ingredient('vanilla', 2),
        new Ingredient('Choclate', 1)])
    ];
    constructor(private slservice: ShoppingListservices) { }

    getRecipes() {
        return this.recipe.slice();
    }
    getRecipe(id: number) {
        return this.recipe.slice()[id];
    }
    addingredientsshop(Ingredients: Ingredient[]) {
        this.slservice.addIngredients(Ingredients);
    }

}