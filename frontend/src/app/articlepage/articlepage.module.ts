import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ArticleComponent} from './article/article.component';
import {MaterialModule} from "../material/material.module";

@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
    ],
    declarations: [ArticleComponent]
})
export class ArticlepageModule {
}
