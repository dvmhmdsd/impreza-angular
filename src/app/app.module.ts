import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ServicesComponent } from './components/services/services.component';
import { SpecialsComponent } from './components/specials/specials.component';
import { TeamComponent } from './components/team/team.component';
import { FactsComponent } from './components/facts/facts.component';
import { FooterComponent } from './components/footer/footer.component';
import { DataComponent } from './components/footer/data/data.component';
import { ContactComponent } from './components/footer/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProjectsComponent,
    ServicesComponent,
    SpecialsComponent,
    TeamComponent,
    FactsComponent,
    FooterComponent,
    DataComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
