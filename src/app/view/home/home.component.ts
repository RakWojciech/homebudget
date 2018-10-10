import { Component, OnInit, ViewChild } from '@angular/core';
import {RouterModule, Router, NavigationStart, ActivatedRoute} from '@angular/router';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
	@ViewChild('income') income: any;
	@ViewChild('credit') credit: any;
	@ViewChild('rent') rent: any;
	@ViewChild('shop') shop: any;
	@ViewChild('car') car: any;
	@ViewChild('account') account: any;
	constructor(private router: Router) { }

	ngOnInit() {
		if(localStorage.length > 0) {
			this.router.navigateByUrl('pay');
		}
	}
	submit() {
		localStorage.setItem("income", this.income.nativeElement.value);
		localStorage.setItem("credit", this.credit.nativeElement.value);
		localStorage.setItem("rent", this.rent.nativeElement.value);
		localStorage.setItem("shop", this.shop.nativeElement.value);
		localStorage.setItem("car", this.car.nativeElement.value);
		localStorage.setItem("account", this.account.nativeElement.value);
		this.router.navigateByUrl("pay");
	}

}
