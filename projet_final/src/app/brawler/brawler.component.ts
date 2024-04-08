import { Component, OnInit } from '@angular/core';
import { JsonDataService } from '../services/brawl-stars.service';
import brawlers from '../../assets/API_Brawlers.json'

@Component({
  selector: 'app-brawler',
  templateUrl: './brawler.component.html',
  styleUrl: './brawler.component.css'
})
export class BrawlerComponent{

  public listeBrawlers = brawlers


}
