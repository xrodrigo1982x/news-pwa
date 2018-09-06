import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";

//const baseUrl = "http://192.168.1.71:8080";
const baseUrl = "/api";

export class UrlInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req.clone({
            url: baseUrl + req.url
        }));
    }

}