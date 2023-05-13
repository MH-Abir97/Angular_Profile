import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ResumeComponent } from './resume/resume.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContractComponent } from './contract/contract.component';
import { HeaderComponent } from './header/header.component';
import { LanguageComponent } from './language/language.component';

const routes: Routes = [

   { path: '',  component: HeaderComponent },

   { path: 'about', component: AboutComponent },
   { path: 'resume', component: ResumeComponent },
   { path: 'portfolio', component: PortfolioComponent },
   { path: 'contract', component: ContractComponent },
   { path: 'language', component: LanguageComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
