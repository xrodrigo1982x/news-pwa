import {Component, Input} from '@angular/core';
import {Header} from "../../../core/model/header.model";

@Component({
    selector: 'app-breaking',
    templateUrl: './breaking.component.html',
    styleUrls: ['./breaking.component.css']
})
export class BreakingComponent {

    @Input()
    content: Header[] = [];

}
