import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
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
