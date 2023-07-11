import { Injectable } from '@angular/core';
import { Recipe } from './recipe.module';
import { Ingredient } from '../shared/ingredient.module';
import { ShoppingService } from '../shopping-list/shopping.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  // private recipes: Recipe[] = [
  //   new Recipe(
  //     'Feijoada',
  //     'Feijoada is a traditional Brazilian dish that is often considered the national dish of Brazil. It is a hearty and flavorful stew made with black beans, various cuts of pork, and sometimes beef. Is usually served with rice, collard greens, farofa (toasted cassava flour), and orange slices.',
  //     'https://cheapandcheerfulcooking.com/wp-content/uploads/2020/05/vegan-feijoada-1.jpg',
  //     [new Ingredient('Black Beans', 1), new Ingredient('Pork Sausage', 2)]
  //   ),
  //   new Recipe(
  //     'Strogonoff',
  //     'Strogonoff is a popular variation of the classic Russian dish that has been adapted to Brazilian tastes. It is a creamy and comforting dish made with sautéed chicken, onions, mushrooms, and a rich sauce typically consisting of tomato paste, heavy cream, and sometimes ketchup or mustard for added flavor. Is often served over white rice and it is commonly accompanied by shoestring potatoes or potato sticks.',
  //     'https://www.receiteria.com.br/wp-content/uploads/strogonoff-de-frango-light.jpeg',
  //     [new Ingredient('Chicken Breast', 2), new Ingredient('Mushroom', 1)]
  //   ),
  // ];

  private recipes: Recipe[] = [];

  constructor(private shoppingService: ShoppingService) { }

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingService.addIngredientsToList(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
