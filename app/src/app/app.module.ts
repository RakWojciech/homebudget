import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { FormsModule } from "@angular/forms";
import { FullCalendarModule } from "ng-fullcalendar";
import { JwtModule } from "@auth0/angular-jwt";
//components
import { AppComponent } from "./app.component";
import { HomeComponent } from "./view/home/home.component";
import { PayComponent } from "./view/pay/pay.component";
import { LoadingComponent } from "./view/loading/loading.component";
import { CalendarTemplateComponent } from "./view/calendar/calendar.component";
//services
import { EventSesrvice } from "./view/event.service";
import { AuthService } from "./view/auth.service";

export function tokenGetter() {
    return localStorage.getItem("access_token");
}

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        PayComponent,
        LoadingComponent,
        CalendarTemplateComponent
    ],
    imports: [
        BrowserModule,
        FullCalendarModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        JwtModule.forRoot({
            config: {
                tokenGetter: () => {
                    return localStorage.getItem("access_token");
                },
                whitelistedDomains: ["you API url"]
            }
        })
    ],
    providers: [EventSesrvice, AuthService],
    bootstrap: [AppComponent]
})
export class AppModule {}
