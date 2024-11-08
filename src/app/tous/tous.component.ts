import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tous',
  templateUrl: './tous.component.html',
  styleUrls: ['./tous.component.css']
})
export class TousComponent implements OnInit {
  favoriteMessage: string | null = null; // Variable to hold the favorite message

  ngOnInit() {
    // Check localStorage when the component initializes
    this.checkLocalStorage();
  }

  save() {
    // Save the liked status to localStorage
    localStorage.setItem("liked", "true");
    this.favoriteMessage = "Merci d'avoir aimé nos produits!";
  }

  checkLocalStorage() {
    // Retrieve liked status from localStorage
    if (localStorage.getItem('liked') === 'true') {
      this.favoriteMessage = "Merci d'avoir aimé nos produits!";
    }
  }
}