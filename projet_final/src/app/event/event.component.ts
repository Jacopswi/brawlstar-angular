import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import brawlers from '../../assets/API_Brawlers.json';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrl: './event.component.css'
})
export class EventComponent implements OnInit{
  events: any;
  public sortedBrawlers: any[] = [];


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.sortedBrawlers = brawlers[0].items;
    this.http.get('https://api.brawlapi.com/v1/events').subscribe(data => {
      this.events = data;
    });
  }

   getNameFromId(id:string) {
    for (const brawler of this.sortedBrawlers) {
      if (brawler.id == id) {
        return brawler.name;
      }
    }
    return "Nom non trouvé";
  }





}
