import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipesListComponent } from './recipes/recipes-list/recipes-list.component';
import { RecipesDetailComponent } from './recipes/recipes-detail/recipes-detail.component';
import { RecipesItemComponent } from './recipes/recipes-list/recipes-item/recipes-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { ShoppingListservices } from './shopping-list/shopping-list.services';
import { AppRoutingModule } from './app.routing.module';
import { RecipeStart1Component } from './recipes/recipe-start1/recipe-start1.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { FooterComponent } from './footer/footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipesListComponent,
    RecipesDetailComponent,
    RecipesItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropdownDirective,
    RecipeStart1Component,
    RecipeEditComponent,
    FooterComponent,
    
  ],
  imports: [
    BrowserAnimationsModule, // required animations module
    BrowserModule,
    AppRoutingModule,
    ToastrModule.forRoot() // ToastrModule added

  ],
  providers: [ShoppingListservices],
  bootstrap: [AppComponent]
})
export class AppModule { }
