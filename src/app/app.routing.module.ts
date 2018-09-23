import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { RecipeStart1Component } from "./recipes/recipe-start1/recipe-start1.component";
import { RecipesDetailComponent } from "./recipes/recipes-detail/recipes-detail.component";
const appRoutes: Routes = [
    { path: '', redirectTo: '/recipes', pathMatch: 'full' },
    {
        path: 'recipes', component: RecipesComponent, children: [
            { path: '', component: RecipeStart1Component },
            { path: ':id', component: RecipesDetailComponent }
        ]
    },
    { path: 'shopping-list', component: ShoppingListComponent }
];
@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}