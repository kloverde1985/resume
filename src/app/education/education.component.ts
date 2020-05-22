import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {Education} from '../resume';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit, OnChanges {

  @Input()
  education: Education;

  constructor() {
  }

  ngOnInit(): void {
  }

  ngOnChanges() {

  }
}
