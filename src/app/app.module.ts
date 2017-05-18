import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { Ng2ScrollimateModule } from 'ng2-scrollimate';
import {Ng2PageScrollModule} from 'ng2-page-scroll';

import { HttpModule } from '@angular/http';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes
} from '@angular/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';

import { LogoComponent } from './logo/logo.component';
import { InfoComponent } from './info/info.component';
import { AboutComponent } from './about/about.component';
import { DividerComponent } from './divider/divider.component';
import { ProficienciesComponent } from './proficiencies/proficiencies.component';
import { ProficiencyComponent } from './proficiency/proficiency.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ProjectComponent } from './project/project.component';
import { ResumeComponent } from './resume/resume.component';
import { ContactComponent } from './contact/contact.component';
import { LoadingComponent } from './loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    InfoComponent,
    AboutComponent,
    DividerComponent,
    ProficienciesComponent,
    ProficiencyComponent,
    PortfolioComponent,
    ProjectComponent,
    ResumeComponent,
    ContactComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    Ng2ScrollimateModule,
    Ng2PageScrollModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
