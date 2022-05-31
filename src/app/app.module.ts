import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {PickListModule} from 'primeng/picklist';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';
import { FooterComponent } from './footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NewRequestComponent } from './new-request/new-request.component';
import { ViewRequestComponent } from './view-request/view-request.component';
import { AllReportsComponent } from './all-reports/all-reports.component';
import { MiniReportsComponent } from './mini-reports/mini-reports.component';
import { ClosedRequestsComponent } from './closed-requests/closed-requests.component';
import { TakeActionsComponent } from './take-actions/take-actions.component';
import { SideNavigationComponent } from './side-navigation/side-navigation.component';
import { HomepageHeaderComponent } from './homepage-header/homepage-header.component';
import { HomepageMainComponent } from './homepage-main/homepage-main.component';
import { MyRequestsReportComponent } from './my-requests-report/my-requests-report.component';
import { MyTasksComponent } from './my-tasks/my-tasks.component';
import { CaseDetailsComponent } from './case-details/case-details.component';
import { CaseHistoryComponent } from './case-history/case-history.component';
import { CaseActionComponent } from './case-action/case-action.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationMenuComponent,
    FooterComponent,
    NewRequestComponent,
    ViewRequestComponent,
    AllReportsComponent,
    MiniReportsComponent,
    ClosedRequestsComponent,
    TakeActionsComponent,
    SideNavigationComponent,
    HomepageHeaderComponent,
    HomepageMainComponent,
    MyRequestsReportComponent,
    MyTasksComponent,
    CaseDetailsComponent,
    CaseHistoryComponent,
    CaseActionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    PickListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
