import {Component, Input} from '@angular/core';
import {Header} from "../../../core/model/header.model";

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.css']
})
export class HeadersComponent {

    @Input()
    content: Header[] = [];
}
