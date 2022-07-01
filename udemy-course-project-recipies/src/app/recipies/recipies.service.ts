import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
    selectedRecipe = new EventEmitter<Recipe>();

    recipies: Recipe[] = [
        new Recipe('Test', 'Just for testing', 'https://www.tasteofhome.com/wp-content/uploads/2018/01/Vegetable-Frittata_EXPS_GBHRBZ17_2209_D07_20_2b.jpg'),
        new Recipe('Test2', 'Just for testing', 'https://www.tasteofhome.com/wp-content/uploads/2018/01/Vegetable-Frittata_EXPS_GBHRBZ17_2209_D07_20_2b.jpg')
      ];
    
    
}