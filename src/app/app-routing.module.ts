import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
  // {path:}

  // {path:'', redirectTo: 'home', pathMatch: 'full'},
  {path: '', component:HomeComponent, title: 'home'},
  {path: 'about', component:AboutComponent, title: 'about'},
  {path: 'portfolio', component:PortfolioComponent, title: 'portfolio'},
  {path:'contact', component:ContactComponent, title: 'contact'},
  // {path:'footer',component:FooterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
