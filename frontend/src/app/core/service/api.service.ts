import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Subject} from "rxjs";
import {Article} from "../model/article.model";
import {Header} from "../model/header.model";

@Injectable()
export class ApiService {

    headers = new Subject<Header[]>();
    breaking = new Subject<Header[]>();
    article = new Subject<Article>();

    constructor(private http: HttpClient) {
    }

    public loadHeaders() {
        this.http.get<Header[]>("/news/articles").subscribe(value => this.headers.next(value.slice()))
    }

    public loadBreaking() {
        this.http.get<Header[]>("/news/breaking").subscribe(value => this.breaking.next(value.slice()))
    }

    public loadArticle(id: string) {
        this.http.get<Article>("/news/articles/" + id).subscribe(value => this.article.next(value))
    }

}
