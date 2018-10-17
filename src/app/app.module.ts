import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { FormsModule } from "@angular/forms";
import { FullCalendarModule } from "ng-fullcalendar";
//components
import { AppComponent } from "./app.component";
import { HomeComponent } from "./view/home/home.component";
import { PayComponent } from "./view/pay/pay.component";
import { LoadingComponent } from "./view/loading/loading.component";
import { CalendarTemplateComponent } from "./view/calendar/calendar.component";
//services
import { EventSesrvice } from "./view/event.service";
@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        PayComponent,
        LoadingComponent,
        CalendarTemplateComponent
    ],
    imports: [BrowserModule, FullCalendarModule, AppRoutingModule, FormsModule],
    providers: [EventSesrvice],
    bootstrap: [AppComponent]
})
export class AppModule {}
