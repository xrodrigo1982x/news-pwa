import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainpageComponent} from './mainpage/mainpage.component';
import {BreakingComponent} from './mainpage/breaking/breaking.component';
import {HeadersComponent} from './mainpage/headers/headers.component';
import {CardComponent} from './mainpage/card/card.component';
import {MaterialModule} from "../material/material.module";
import {AppRoutingModule} from "../app-routing.module";

@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
        AppRoutingModule,
    ],
    declarations: [MainpageComponent, BreakingComponent, HeadersComponent, CardComponent]
})
export class MainModule {
}
