import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipiesComponent } from './recipies/recipies.component';
import { RecipiesListComponent } from './recipies/recipies-list/recipies-list.component';
import { RecipieItemComponent } from './recipies/recipies-list/recipie-item/recipie-item.component';
import { RecipieDetailsComponent } from './recipies/recipie-details/recipie-details.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { RecipeDetailsComponent } from './recipies/recipe-details/recipe-details.component';
import { RecipeItemComponent } from './recipies/recipies-list/recipe-item/recipe-item.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipiesComponent,
    RecipiesListComponent,
    RecipieItemComponent,
    RecipieDetailsComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    RecipeDetailsComponent,
    RecipeItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
