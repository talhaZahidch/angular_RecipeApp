import { Ingredient } from "../shared/ingredient.model";
import { EventEmitter } from "@angular/core";

export class ShoppingListservices {
    ingredientchange = new EventEmitter<Ingredient[]>(); //Notificaiton

    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 15)
    ];
    getIngredients() {
        return this.ingredients.slice();
    }
    addIngredient(Ingredient1: Ingredient) {
        this.ingredients.push(Ingredient1);
        this.ingredientchange.emit(this.ingredients.slice());
    }
    addIngredients(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients);
        this.ingredientchange.emit(this.ingredients.slice());
    }
}