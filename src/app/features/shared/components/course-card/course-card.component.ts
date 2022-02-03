import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})

export class CourseCardComponent implements OnInit {

  addInputforEdit: boolean = false
  @Input() title: string
  @Input() description: string
  @Input() creationDate: number
  @Input() duration: string
  @Input() authors: string[];
  @Input() isCourseEditable: boolean;
  @Output() delete: EventEmitter<any> = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {}
  
  deleteCard():void{
    this.delete.emit(this)
  }

  editCard():void{
    this.addInputforEdit = !this.addInputforEdit;
  }
}
