import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot} from "@angular/router";
import {Article} from "../../core/model/article.model";
import {ApiService} from "../../core/service/api.service";

@Component({
    selector: 'app-article',
    templateUrl: './article.component.html',
    styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

    article: Article;

    constructor(private route: ActivatedRoute, private apiService: ApiService) {
    }

    ngOnInit(): void {
        this.apiService.article.subscribe(value => this.article = value);
        this.apiService.loadArticle(this.route.snapshot.paramMap.get('articleId'));
    }


    getParagraphs() {
        return this.article.text.split("\n");
    }
}
