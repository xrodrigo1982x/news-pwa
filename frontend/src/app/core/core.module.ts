import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {UrlInterceptor} from "./interceptor/url.interceptor";
import {ApiService} from "./service/api.service";

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [],
    providers: [
        ApiService,
        {
            provide: HTTP_INTERCEPTORS, useClass: UrlInterceptor, multi: true
        }]
})
export class CoreModule {
}
