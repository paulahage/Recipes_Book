import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  ResolveData,
  RouterStateSnapshot,
} from '@angular/router';
import { DataStorageService } from '../shared/data-storage.service';
import { RecipeService } from './recipe.service';

@Injectable({
  providedIn: 'root',
})
export class RecipesResolverService implements ResolveData {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const recipes = this.recipeService.getRecipes();

    if (recipes.length === 0) {
      return this.dataService.fetchRecipes();
    } else {
      return recipes;
    }
  }

  constructor(
    private dataService: DataStorageService,
    private recipeService: RecipeService
  ) {}
}
