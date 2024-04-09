import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-joueur',
  templateUrl: './joueur.component.html',
  styleUrls: ['./joueur.component.css']
})
export class JoueurComponent implements OnInit{
  gamemodes: any;
  public listeModes: any[] = [];
  public sortedModes: any[] = [];
  public searchTerm : string = "";

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('https://api.brawlapi.com/v1/gamemodes').subscribe(data => {
      this.gamemodes = data;
      console.log(this.gamemodes); 
      this.listeModes = this.gamemodes.list
      this.sortedModes = this.listeModes
    });
  }

  
  sortModes() {
    this.sortedModes.sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
      if (nameA < nameB) return -1;
      if (nameA > nameB) return 1;
      return 0;
    });
  }

  sortModesReverse() {
    this.sortedModes.sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
      if (nameB < nameA) return -1;
      if (nameB > nameA) return 1;
      return 0;
    });

  
  }
  sortId() {
    this.sortedModes.sort((a, b) => {
      const Id1 = a.id;
      const Id2 = b.id;
      if (Id1 < Id2) return -1;
      if (Id1 > Id2) return 1;
      return 0;
    });
  }

  filterModes(): any[] {
    return this.sortedModes.filter(mode =>
      mode.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  updateSearchTerm(event: any): void {
    this.searchTerm = event.target.value;
  }
}
