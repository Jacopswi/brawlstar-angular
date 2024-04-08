import { Component, OnInit } from '@angular/core';
import brawlers from '../../assets/API_Brawlers.json';

@Component({
  selector: 'app-brawler',
  templateUrl: './brawler.component.html',
  styleUrls: ['./brawler.component.css']
})
export class BrawlerComponent implements OnInit {
  public listeBrawlers: any[] = [];
  public sortedBrawlers: any[] = [];

  constructor() {}

  ngOnInit() {
    // Initialiser les données ici, par exemple :
    this.listeBrawlers = brawlers;
    this.sortedBrawlers = this.listeBrawlers[0].items; 
  }

  sortBrawlers() {
    // Tri par nom croissant
    this.sortedBrawlers.sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
      if (nameA < nameB) return -1;
      if (nameA > nameB) return 1;
      return 0;
    });
  }

  sortBrawlersReverse() {
    // Tri par nom croissant
    this.sortedBrawlers.sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
      if (nameB < nameA) return -1;
      if (nameB > nameA) return 1;
      return 0;
    });

  
  }


  sortId() {
    // Tri par nom croissant
    this.sortedBrawlers.sort((a, b) => {
      const Id1 = a.id;
      const Id2 = b.id;
      if (Id1 < Id2) return -1;
      if (Id1 > Id2) return 1;
      return 0;
    });

  
  }
}