import { Component } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  collapsed: boolean = true;

  constructor(private dataService: DataStorageService){}

  onSaveData() {
    this.dataService.storeRecipes();
  }

  onFetchRecipes() {
    this.dataService.fetchRecipes().subscribe();
  }

}
