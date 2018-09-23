import { Component, OnInit } from '@angular/core';
import { Recipes } from '../recipes-model';
import { RecipeService } from '../recipe.services';
import { ActivatedRoute, Params } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {
  recipe: Recipes;
  id: number;
  constructor(private recipeService: RecipeService, private route: ActivatedRoute, private toastr: ToastrService) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];   //getingid
        this.recipe = this.recipeService.getRecipe(this.id);
      }
    );
  }
  onAddToShopping() {
    this.recipeService.addingredientsshop(this.recipe.ingredients);
    const options = { closeButton: true, actionButton: 'Action', tapToDismiss: false, titleClass: 'yellow' };
    this.toastr.success('', 'Successfully Added to Shopping List', options);
  }
}
