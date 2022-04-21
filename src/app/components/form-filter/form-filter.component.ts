import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-filter',
  templateUrl: './form-filter.component.html',
  styleUrls: ['./form-filter.component.css']
})
export class FormFilterComponent implements OnInit {
  filterList = '';
  constructor() { }

  ngOnInit(): void {
  }

}
