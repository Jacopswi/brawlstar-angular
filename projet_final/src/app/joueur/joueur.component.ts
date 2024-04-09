import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-joueur',
  templateUrl: './joueur.component.html',
  styleUrls: ['./joueur.component.css']
})
export class JoueurComponent implements OnInit{
  gamemodes: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('https://api.brawlapi.com/v1/gamemodes').subscribe(data => {
      this.gamemodes = data;
      console.log(this.gamemodes); 
    });
  }
}
