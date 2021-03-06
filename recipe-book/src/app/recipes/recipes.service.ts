import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService{
    recipeChanged = new Subject<Recipe[]>();

    private recipes: Recipe[] = [
        new Recipe(
            'name 1',
            'Description 1',
            'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg',
            [
                new Ingredient('Meat', 1),
                new Ingredient('French Fries', 20)
            ]),    
        new Recipe(
            'name 2', 
            'Description 2', 
            'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg',
            [
                new Ingredient('Buns', 2),
                new Ingredient('Meat', 1)
            ])
      ];

      constructor(private shoppingListService:ShoppingListService){}

      getRecipes(){
        return this.recipes.slice();
      }

      getRecipe(id:number){
          return this.recipes[id];
      }

      addIngredientsToShoppingList(ingredients:Ingredient[]){
        this.shoppingListService.addIngredients(ingredients);
      }

      addRecipe(recipe:Recipe)
      {
        this.recipes.push(recipe);
        this.recipeChanged.next(this.recipes.slice());
      }

      updateRecipe(index:number, recipe:Recipe)
      {
        this.recipes[index] = recipe;
        this.recipeChanged.next(this.recipes.slice());
      }

      deleteRecipe(index:number)
      {
        this.recipes.splice(index, 1);
        this.recipeChanged.next(this.recipes.slice());
      }
}