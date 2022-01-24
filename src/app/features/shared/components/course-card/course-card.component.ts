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

  ngOnInit(): void {
    this.duration = this.display(this.duration)
  }
  
  deleteCard():void{
    this.delete.emit(this)
  }

  editCard():void{
    this.addInputforEdit = !this.addInputforEdit;
  }

  display(mins:any): string{
    mins *= 60;
    var minutes = Math.floor(mins % 3600 / 60);
    var hours = Math.floor(mins / 3600);
    return (this.addZero(hours) + ':' + this.addZero(minutes));
  }
 
  addZero(n:number) { return (n < 10 ? '0' : '') + n; }


}
