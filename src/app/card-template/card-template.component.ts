import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-template',
  templateUrl: './card-template.component.html',
  styleUrls: ['./card-template.component.scss'],
})
export class CardTemplateComponent implements OnInit {
  @Input() imgUrl: string;
  @Input() author: string;
  @Input() date: string;
  @Input() title: string;
  @Input() resume: string;

  constructor() { }

  ngOnInit() {}

}
