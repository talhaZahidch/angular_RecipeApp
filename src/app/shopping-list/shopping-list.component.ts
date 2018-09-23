import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListservices } from './shopping-list.services';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})

export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];
  constructor(private ShoppingService: ShoppingListservices) { }

  ngOnInit() {
    this.ingredients = this.ShoppingService.getIngredients();
    this.ShoppingService.ingredientchange.subscribe(
      (Ingredient: Ingredient[]) => {
        this.ingredients = Ingredient;
      }
    );
  }

}
