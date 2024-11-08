import { Component } from '@angular/core';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent {
  favoriteMessage: string = '';

  ngOnInit() {
    if (window.localStorage.getItem('liked') === 'true') {
      this.favoriteMessage = "Merci d'avoir aimé nos produits!";
    }
  }

  save() {
    localStorage.setItem('liked', 'true');
    this.favoriteMessage = "Merci d'avoir aimé nos produits!";
  }
}
