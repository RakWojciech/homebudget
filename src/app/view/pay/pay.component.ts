import { Component, OnInit } from '@angular/core';
import {RouterModule, Router, NavigationEnd, NavigationStart, ActivatedRoute} from '@angular/router';

@Component({
	selector: 'app-pay',
	templateUrl: './pay.component.html',
	styleUrls: ['./pay.component.scss']
})
export class PayComponent implements OnInit {
	income;
	credit;
	rent;
	car;
	shop;
	msg;
	constructor(private router: Router) {
		// this.router.events.subscribe(event=>{
		// 	if(event instanceof NavigationEnd) {
				
		// 	}
		// });
	}

	ngOnInit() {
		if(localStorage.length <= 0) {
			this.msg = "Sorry, type your money";
			setTimeout(() => {
				this.router.navigateByUrl("/")
			}, 3000);
		} 
		this.income = localStorage.getItem("income");
		this.credit = localStorage.getItem("credit");
		this.rent = localStorage.getItem("rent");
		this.car = localStorage.getItem("car");
		this.shop = localStorage.getItem("shop");
	}

}
