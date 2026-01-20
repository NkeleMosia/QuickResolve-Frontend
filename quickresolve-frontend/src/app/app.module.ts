import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; // allows app to run in browser
import { FormsModule } from '@angular/forms'; // allows using [(ngModel)] for two-way binding
import { HttpClientModule } from '@angular/common/http'; // allows HTTP requests to backend

import { AppComponent } from './app.component'; // root component
import { DashboardComponent } from './components/dashboard/dashboard.component';



@NgModule({
  declarations: [
    AppComponent,        // root component
   DashboardComponent
   
  ],
  imports: [
    BrowserModule,       // required for Angular app
    FormsModule,         // required for form inputs
    HttpClientModule     // required for API calls
  ],
  providers: [],         // services can be provided here, but we used @Injectable({providedIn: 'root'})
  bootstrap: [AppComponent] // start app from root component
})
export class AppModule { }
