import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { PhoneListComponent } from './phone-list/phone-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BackbtnComponent } from './backbtn/backbtn.component';
import { OrderModule } from 'ngx-order-pipe'; 
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { RouterModule } from '@angular/router';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { PhoneDetailsComponent } from './phone-details/phone-details.component';





@NgModule({
  declarations: [
    AppComponent,
    PhoneListComponent,
    BackbtnComponent,
    OrderModule,
    FontAwesomeModule,
    PhoneDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFontAwesomeModule,
    RouterModule.forRoot([
      { path: '', component: PhoneListComponent },
      { path: 'phones/:phoneid', component: PhoneListComponent }
    ]),
    OrderModule,
    Ng2SearchPipeModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

