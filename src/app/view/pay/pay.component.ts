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
	freeMoney: number;
	newPayment: number;
	account;
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
	objectKeys = Object.keys;
	
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
		this.payment = JSON.parse(localStorage.getItem("payment"));
		this.account = JSON.parse(localStorage.getItem("account"));
		
		this.categoryList = JSON.parse(localStorage.getItem("category"));
		if(this.payment) this.newPayment = this.calcNewPayments(this.payment);


		this.freeMoney  = (this.account ? this.account: 0) - (this.income ? this.income : 0) - (this.credit ? this.credit : 0) - (this.rent ? this.rent : 0) - (this.car ? this.car : 0) - (this.shop ? this.shop : 0) - (this.newPayment ? this.newPayment: 0);

	}
	calcNewPayments(payment) {
		let newPayMent = 0;
		payment.forEach(e=>{
			newPayMent = +newPayMent + +e.price;
		})
		return newPayMent;
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
