import { LayoutModule } from '@angular/cdk/layout';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { LandingComponent } from './pages/landing/landing.component';
import { SourcesComponent } from './pages/sources/sources.component';
import { StockComponent } from './pages/stock/stock.component';
import { SideNavComponent } from './shared/components/side-nav/side-nav.component';
import { TopNavComponent } from './shared/components/top-nav/top-nav.component';
import { NavItemComponent } from './shared/components/nav-item/nav-item.component';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    TopNavComponent,
    AboutUsComponent,
    ContactUsComponent,
    StockComponent,
    SourcesComponent,
    LandingComponent,
    NavItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
