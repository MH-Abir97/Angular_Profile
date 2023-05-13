import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideFirebaseApp,getApp,initializeApp } from "@angular/fire/app";
import { getFirestore, provideFirestore  } from "@angular/fire/firestore";
import { enviorment } from 'src/enviorment/enviorment';
import { ProfileComponent } from './profile/profile.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { AboutComponent } from './about/about.component';
import {NgxTypedJsModule} from 'ngx-typed-js';
import { HomeComponent } from './home/home.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatRadioModule} from '@angular/material/radio';
import { ResumeComponent } from './resume/resume.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContractComponent } from './contract/contract.component';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { AboutMainComponent } from './about-main/about-main.component';
import { LanguageComponent } from './language/language.component';
import {MatTableModule} from '@angular/material/table';
@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    AboutComponent,
    HomeComponent,
    ResumeComponent,
    PortfolioComponent,
    ContractComponent,
    HeaderComponent,
    AboutMainComponent,
    LanguageComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(()=>initializeApp(enviorment.firebaseConfig)),
    provideFirestore(()=>getFirestore()),
    NgxTypedJsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    ScrollingModule,
    MatProgressBarModule,
    MatRadioModule,
    MatInputModule,
    MatButtonModule,
    RouterModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
