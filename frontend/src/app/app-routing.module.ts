import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainpageComponent} from "./main/mainpage/mainpage.component";
import {ArticleComponent} from "./articlepage/article/article.component";

const routes: Routes = [
    {
        path: '',
        component: MainpageComponent
    },
    {
        path: 'articles/:articleId',
        component: ArticleComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
