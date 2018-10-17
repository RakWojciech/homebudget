import { Inject, Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/of";
@Injectable()
export class EventSesrvice {
    public getEvents(): Observable<any> {
        const dateObj = new Date();
        let data: any = [];
        const yearMonth =
            dateObj.getUTCFullYear() + "-" + (dateObj.getUTCMonth() + 1);

        let eventStorage = JSON.parse(localStorage.getItem("event"));
        for (var i = 0; i < eventStorage.length; i++) {
            data.push(eventStorage[i]);
        }
        return Observable.of(data);
    }
}
