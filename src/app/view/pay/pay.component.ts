import { Component, OnInit, ViewChild } from '@angular/core';
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
	//
	@ViewChild('date') date: any;
	@ViewChild('payout') payout: any;
	@ViewChild('price') price: any;
	@ViewChild('category') category: any;
	//
	// storageObj;
	payment;
	categoryList;
	categoryArray;
	
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
		this.payment = localStorage.getItem("payment");
		// this.payment = this.payment.filter( function ( obj ) {
		// 	return obj;
		// });
		this.categoryList = JSON.parse(localStorage.getItem("category"));
		// console.log(typeof(this.categoryList));
	}
	addPayment() {
		var allPayment = JSON.parse(localStorage.getItem('payment')) || [];
		let storageObj = {
			'date': this.date.nativeElement.value,
			'payout': this.payout.nativeElement.value,
			'price': this.price.nativeElement.value,
		}
		allPayment.push(storageObj);
		localStorage.setItem('payment', JSON.stringify(allPayment));
	}
	categoryAdd() {
		var allCategory = JSON.parse(localStorage.getItem('category')) || [];
		let storageObj = this.category.nativeElement.value;
		allCategory.push(storageObj);
		localStorage.setItem('category', JSON.stringify(allCategory));
	}
}
