import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainpageComponent} from './mainpage/mainpage.component';
import {BreakingComponent} from './mainpage/breaking/breaking.component';
import {HeadersComponent} from './mainpage/headers/headers.component';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [MainpageComponent, BreakingComponent, HeadersComponent]
})
export class MainModule {
}
