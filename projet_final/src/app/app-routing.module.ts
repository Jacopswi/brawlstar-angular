import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrawlerComponent } from './brawler/brawler.component';
import { JoueurComponent } from './joueur/joueur.component';
import { ClubComponent } from './club/club.component';

const routes: Routes = [
  {path : "", component : BrawlerComponent},
  {path : "joueur", component:JoueurComponent},
  {path : "club", component:ClubComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
