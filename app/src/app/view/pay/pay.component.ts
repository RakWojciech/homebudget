import { Component, OnInit, ViewChild } from "@angular/core";
import {
    RouterModule,
    Router,
    NavigationEnd,
    NavigationStart,
    ActivatedRoute
} from "@angular/router";

@Component({
    selector: "app-pay",
    templateUrl: "./pay.component.html",
    styleUrls: ["./pay.component.scss"]
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
    @ViewChild("date")
    date: any;
    @ViewChild("title")
    title: any;
    @ViewChild("price")
    price: any;
    @ViewChild("category")
    category: any;
    //
    // storageObj;
    payment;
    categoryList;
    categoryArray = [];
    objectKeys = Object.keys;
    addState: boolean = false;

    constructor(private router: Router) {
        // this.router.events.subscribe(event=>{
        // 	if(event instanceof NavigationEnd) {
        // 	}
        // });
    }

    ngOnInit() {
        if (localStorage.length <= 0) {
            this.router.navigateByUrl("/");
        }
        this.income = localStorage.getItem("income");
        this.credit = localStorage.getItem("credit");
        this.rent = localStorage.getItem("rent");
        this.car = localStorage.getItem("car");
        this.shop = localStorage.getItem("shop");
        this.account = JSON.parse(localStorage.getItem("account"));
        this.getData(this.account, this.credit, this.rent, this.car, this.shop);
    }

    getData(account, credit, rent, car, shop) {
        // setInterval(()=>{
        // console.log("DOWNLOAD DATA");
        this.categoryList = JSON.parse(localStorage.getItem("category"));
        // console.log(this.categoryList);
        this.categoryList.forEach(el => {
            this.categoryArray.push(el);
        });
        this.payment = JSON.parse(localStorage.getItem("payment"));
        if (this.payment) this.newPayment = this.calcNewPayments(this.payment);

        this.freeMoney =
            (this.account ? this.account : 0) -
            (this.credit ? this.credit : 0) -
            (this.rent ? this.rent : 0) -
            (this.car ? this.car : 0) -
            (this.shop ? this.shop : 0) -
            (this.newPayment ? this.newPayment : 0);

        // }, time);
    }

    calcNewPayments(payment) {
        let newPayMent = 0;
        payment.forEach(e => {
            newPayMent = +newPayMent + +e.price;
        });
        return newPayMent;
    }

    addPayment() {
        this.addState = true;
        var allPayment = JSON.parse(localStorage.getItem("payment")) || [];
        let storageObj = {
            date: this.date.nativeElement.value,
            title: this.title.nativeElement.value,
            price: this.price.nativeElement.value
        };
        allPayment.push(storageObj);
        localStorage.setItem("payment", JSON.stringify(allPayment));
        setInterval(() => {
            this.getData(
                this.account,
                this.credit,
                this.rent,
                this.car,
                this.shop
            );
            this.addState = false;
        }, 1000);
    }

    addCategory() {
        this.addState = true;
        var allCategory = JSON.parse(localStorage.getItem("category")) || [];
        let storageObj = this.category.nativeElement.value;
        allCategory.push(storageObj);
        localStorage.setItem("category", JSON.stringify(allCategory));
        setInterval(() => {
            this.getData(
                this.account,
                this.credit,
                this.rent,
                this.car,
                this.shop
            );
            this.addState = false;
        }, 1000);
    }
}
