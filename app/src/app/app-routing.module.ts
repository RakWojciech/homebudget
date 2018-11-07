import {NgModule} from '@angular/core';
import {RouterModule, Routes, Router, NavigationStart, NavigationEnd} from '@angular/router';

import {HomeComponent} from './view/home/home.component';
import {PayComponent} from './view/pay/pay.component';

const routes: Routes = [
	{
		path: '',
		component: HomeComponent,
	}, {
		path: 'pay',
		component: PayComponent,
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})

export class AppRoutingModule {
}
