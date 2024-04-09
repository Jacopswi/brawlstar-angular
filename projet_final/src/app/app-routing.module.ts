import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrawlerComponent } from './brawler/brawler.component';
import { JoueurComponent } from './joueur/joueur.component';
import { ClubComponent } from './club/club.component';
import { EventComponent } from './event/event.component';

const routes: Routes = [
  {path : "", component : BrawlerComponent},
  {path : "joueur", component:JoueurComponent},
  {path : "club", component:ClubComponent},
{path:"event", component:EventComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
