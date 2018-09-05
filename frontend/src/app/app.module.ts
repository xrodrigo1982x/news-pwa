import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {CoreModule} from "./core/core.module";
import {MainModule} from "./main/main.module";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NavbarComponent} from "./navbar/navbar.component";
import {MaterialModule} from "./material/material.module";

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        CoreModule,
        MaterialModule,
        MainModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
