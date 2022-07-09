import { LandingComponent } from './pages/landing/landing.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { SourcesComponent } from './pages/sources/sources.component';
import { StockComponent } from './pages/stock/stock.component';

const name = 'Minorba Pine';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'sources', component: SourcesComponent },
  { path: 'stock', component: StockComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
