import { Component, OnInit, Input } from '@angular/core';
import { AuthorsStoreService } from 'src/app/services/authors-store.service';
import { CourseCardComponent } from '../course-card/course-card.component';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  @Input() courses: CourseCardComponent[];
  @Input() isCourseEditable: boolean = true;

  isCourseEditableProp:boolean;

  actualDate: number;
  allCards: any[];
  authors: any;

  constructor(private authorService: AuthorsStoreService) { 
    this.allCards = [
      { title: 'Angular', description: 'Description text about Angular', authors: ['Bib', 'Mike', 'Daniel'], duration: '120', creationDate:  Date.now(), isCourseEditable:this.isCourseEditable },
      { title: 'React', description: 'Description text about React', authors: ['Ira', 'Iris', 'Inna'], duration: '93', creationDate:  Date.now(), isCourseEditable:this.isCourseEditable },
      { title: 'Vue.js', description: 'Description text about Vue.js', authors: ['Nick', 'Harry', 'Geralt'], duration: '278', creationDate:  Date.now(), isCourseEditable:this.isCourseEditable }
    ];
  }

  onDeleteCard(message: any): void{
    this.allCards = this.allCards.filter(card=> message.title !== card.title);
  }

  ngOnInit(): void {
    this.authorService.getAll();
    this.authorService.authors$.subscribe(el=>{
      this.allCards.map(card=> card.authors = el.authors)
      this.authors = el.authors;
    });

    this.actualDate = Date.now();
    console.log(this.authors);
    this.isCourseEditableProp = this.isCourseEditable;
  }

}