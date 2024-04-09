import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';

@Component({
  selector: 'app-joueur',
  templateUrl: './joueur.component.html',
  styleUrl: './joueur.component.css'
})


export class JoueurComponent {
  apiUrl = 'https://api.brawlstars.com/v1/players/%238CG8LUJ';
  apiKey = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImYyMGM4OTJiLWNjY2QtNDRlNi1hOWZjLTU5MjFlZmRjM2M0MSIsImlhdCI6MTcxMjUzMjAxNywic3ViIjoiZGV2ZWxvcGVyL2RkMTUwOGFmLWRhZWEtNGY0NC02ODVmLTM1OGUwYjIzZTRlYSIsInNjb3BlcyI6WyJicmF3bHN0YXJzIl0sImxpbWl0cyI6W3sidGllciI6ImRldmVsb3Blci9zaWx2ZXIiLCJ0eXBlIjoidGhyb3R0bGluZyJ9LHsiY2lkcnMiOlsiOTEuMTcyLjExMS4yNTAiXSwidHlwZSI6ImNsaWVudCJ9XX0.gEefrk0Wincumk0Tyd9AnSBMcW3_q4j-37v_WqOvJggUWvJxgy_x_gaUgz6yga4O16PKlhbP4mmVdbGv8N0OZg'; 

  constructor(private http: HttpClient) { }

  fetchData() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'application/json',
        'Authorization': `Bearer ${this.apiKey}`
      })
    };

    this.http.get(this.apiUrl, httpOptions).subscribe((data) => {
      console.log('Données reçues :', data);
    }, (error) => {
      console.error('Erreur lors de la récupération des données :', error);
    });
  }
 
}


