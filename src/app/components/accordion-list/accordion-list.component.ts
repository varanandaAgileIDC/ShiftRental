import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion-list',
  templateUrl: './accordion-list.component.html',
  styleUrls: ['./accordion-list.component.scss'],
})
export class AccordionListComponent implements OnInit {


  @Input('faqs') faqs:any;

  constructor() { }

  ngOnInit() {}

}
