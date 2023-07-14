import { NgModule } from '@angular/core';
import { RecipesComponent } from './recipes.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RecipesRoutingModule } from './recipes-routing.module';
import { DropdownDirective } from '../shared/dropdown.directive';

@NgModule({
  declarations: [
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeEditComponent,
    RecipeItemComponent,
    RecipeStartComponent,
    DropdownDirective
  ],
  imports: [CommonModule, ReactiveFormsModule,RouterModule, RecipesRoutingModule],
  // exports: [
  //   // RecipesComponent,
  //   // RecipeListComponent,
  //   // RecipeDetailComponent,
  //   // RecipeEditComponent,
  //   // RecipeItemComponent,
  //   // RecipeStartComponent,
  // ],
  //Since we are using routes in this Recipes Module (RecipesRoutingModule), we don't need to specify the exports, because we are already pointing the recipes components on the routing module
})
export class RecipesModule {}
