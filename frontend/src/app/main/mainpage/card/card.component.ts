import {Component, Input, OnInit} from '@angular/core';
import {Header} from "../../../core/model/header.model";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input()
  content: Header;

}
