import { Component, OnInit, Input } from '@angular/core';
import { AuthorsStoreService } from 'src/app/services/authors-store.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  @Input() isCourseEditable:boolean;

  isCourseEditableProp:boolean;

  constructor(private service: AuthorsStoreService) { }

  ngOnInit(): void {
    this.showAuthors();
    this.isCourseEditableProp = this.isCourseEditable;
  }

  userClicks(){
    console.log('User clicked');
  }

  showAuthors(){
    console.log(this.service.getCourse());
  }

}
