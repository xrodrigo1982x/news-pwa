import {Component, OnDestroy, OnInit} from '@angular/core';
import {ApiService} from "../../core/service/api.service";
import {Subscription} from "rxjs";
import {Header} from "../../core/model/header.model";

@Component({
    selector: 'app-mainpage',
    templateUrl: './mainpage.component.html',
    styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit, OnDestroy {

    headers: Header[] = [];
    breaking: Header[] = [];

    headerSubscription: Subscription;
    breakingSubscription: Subscription;

    constructor(private apiService: ApiService) {
    }

    ngOnInit() {
        this.headerSubscription = this.apiService.headers.subscribe(value => this.headers = value);
        this.breakingSubscription = this.apiService.breaking.subscribe(value => this.breaking = value);
        this.apiService.loadHeaders();
        this.apiService.loadBreaking();
    }

    ngOnDestroy(): void {
        this.headerSubscription.unsubscribe();
        this.breakingSubscription.unsubscribe();
    }

}
