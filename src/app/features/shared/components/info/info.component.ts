import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  @Input() title: string;
  @Input() text: string;
  @Input() edit: boolean;

  constructor() { }

  ngOnInit(): void {
  }


}
