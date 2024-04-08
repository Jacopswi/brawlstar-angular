import { Component, OnInit } from '@angular/core';
import { JsonDataService } from '../services/brawl-stars.service';

@Component({
  selector: 'app-brawler',
  templateUrl: './brawler.component.html',
  styleUrl: './brawler.component.css'
})
export class BrawlerComponent implements OnInit{
  brawlStarsData: any[] = [];

  constructor(private brawlStarsService: JsonDataService) { }

  ngOnInit(): void {
    this.brawlStarsService.getData().subscribe(data => {
      this.brawlStarsData = data;
    });
  }

}
