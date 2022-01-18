import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  @Input() isCourseEditable:boolean;

  isCourseEditableProp:boolean;

  constructor() { }

  ngOnInit(): void {
    this.isCourseEditableProp = this.isCourseEditable;
  }

}
