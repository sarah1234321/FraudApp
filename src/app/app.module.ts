import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FooterComponent } from './footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NewRequestComponent } from './new-request/new-request.component';
import { ViewRequestComponent } from './view-request/view-request.component';
import { AllReportsComponent } from './all-reports/all-reports.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationMenuComponent,
    HomepageComponent,
    FooterComponent,
    NewRequestComponent,
    ViewRequestComponent,
    AllReportsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
