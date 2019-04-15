import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendarComponent } from './calendar/calendar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DailyScheduleComponent } from './daily-schedule/daily-schedule.component';
import { WeeklyScheduleComponent } from './weekly-schedule/weekly-schedule.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AddEventComponent } from './add-event/add-event.component';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    NavbarComponent,
    DailyScheduleComponent,
    WeeklyScheduleComponent,
    LoginComponent,
    RegisterComponent,
    AddEventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
