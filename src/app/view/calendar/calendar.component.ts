import { Component, OnInit, ViewChild } from "@angular/core";
import { FullCalendarModule, CalendarComponent } from "ng-fullcalendar";
import { Options } from "fullcalendar";
import { EventSesrvice } from "../event.service";
@Component({
    selector: "app-calendar",
    templateUrl: "./calendar.component.html",
    styleUrls: ["./calendar.component.scss"]
})
export class CalendarTemplateComponent implements OnInit {
    calendarOptions: Options;
    displayEvent: any;
    @ViewChild(CalendarComponent)
    @ViewChild("title")
    title: any;
    @ViewChild("date")
    date: any;
    ucCalendar: CalendarComponent;
    constructor(protected eventService: EventSesrvice) {}

    ngOnInit() {
        this.eventService.getEvents().subscribe(data => {
            this.calendarOptions = {
                editable: true,
                eventLimit: false,
                header: {
                    left: "prev,next today",
                    center: "title",
                    right: "month,agendaWeek,agendaDay,listMonth"
                },
                events: data
            };
        });
    }

    addEvent() {
        // this.addState = true;
        var allEvent = JSON.parse(localStorage.getItem("event")) || [];
        let storageObj = {
            date: this.date.nativeElement.value,
            title: this.title.nativeElement.value
        };
        allEvent.push(storageObj);
        localStorage.setItem("event", JSON.stringify(allEvent));
    }

    clickButton(model: any) {
        this.displayEvent = model;
    }
    eventClick(model: any) {
        model = {
            event: {
                id: model.event.id,
                start: model.event.start,
                end: model.event.end,
                title: model.event.title,
                allDay: model.event.allDay
                // other params
            },
            duration: {}
        };
        this.displayEvent = model;
    }
    updateEvent(model: any) {
        model = {
            event: {
                id: model.event.id,
                start: model.event.start,
                end: model.event.end,
                title: model.event.title
                // other params
            },
            duration: {
                _data: model.duration._data
            }
        };
        this.displayEvent = model;
    }
}
