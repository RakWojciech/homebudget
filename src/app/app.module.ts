import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routes';
import { FormsModule } from '@angular/forms';
//components
import { AppComponent } from './app.component';
import { HomeComponent } from './view/home/home.component';
import { PayComponent } from './view/pay/pay.component';


@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		PayComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
