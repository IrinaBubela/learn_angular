import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent implements OnInit {

  form: FormGroup;

  ngOnInit() {
    this.form = this.fb.group({
      title: ['Angular Advanced Course', [
        Validators.required
      ]],
      description: ['Very descriptive description', [
        Validators.required
      ]],
      authorName: [''],
      authors: this.fb.array([
        new FormGroup({
          'authorName': new FormControl('Bob Bobsen'),
        }),
        new FormGroup({
          'authorName': new FormControl('Mike Mikish'),
        }), 
        this.createEmailFormGroup()]),
      duration: ['120', [
        Validators.required,
        Validators.min(0)
      ]]
    });
  }

  constructor( private fb: FormBuilder) {

  }

  get title(): any {
    return this.form.get('title');
  }

  get description(): any {
    return this.form.get('description');
  }

  get authorName(): any {
    return this.form.get('authorName');
  }

  get duration(): any {
    return this.form.get('duration');
  }

  get authors () {
    return this.form.get('authors') as FormArray;  
  }

  private createEmailFormGroup(): FormGroup {
    if(this.form){
      return new FormGroup({
        'authorName': new FormControl(this.authorName.value),
      })
    } else {
      return new FormGroup({
        'authorName': new FormControl(''),
      })
    }
  }

  addNewAuthor(){
    this.authors.push(this.createEmailFormGroup());
  }

  onSubmit(): void {
    console.log(this.form.value);
  }
}

