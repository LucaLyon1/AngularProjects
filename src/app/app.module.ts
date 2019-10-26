import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Route, RouterModule, Routes} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjetHighTechComponent } from './projet-high-tech/projet-high-tech.component';
import { ProjetWebsiteComponent } from './projet-website/projet-website.component';

const routes: Routes = [
  {path: 'projets-websites' , component: ProjetWebsiteComponent },
  {path: 'projets-high-tech', component: ProjetHighTechComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ProjetWebsiteComponent,
    ProjetHighTechComponent,
    ProjetHighTechComponent,
    ProjetWebsiteComponent
  ],
  imports: [
    RouterModule.forRoot(
      routes ,
      {enableTracing: true}
    ),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
