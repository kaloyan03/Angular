import { Injectable } from "@angular/core";
import { Ingredient } from "./shared/ingredient.model";

@Injectable()
export class ShoppingListService {
    ingredients: Ingredient[] = [
        new Ingredient('Corn', 5),
        new Ingredient('Cucumber', 10),
      ];
    
    
}