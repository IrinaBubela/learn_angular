import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormArray, Validators } from '@angular/forms';
import { alphaNumericValidator } from './customValidation'

@Component({
  selector: 'app-edit-add-form',
  templateUrl: './edit-add-form.component.html',
  styleUrls: ['./edit-add-form.component.css']
})
export class EditAddFormComponent implements OnInit {
  form: FormGroup;

  isAddMode: boolean = true;

  ngOnInit() {
    this.form = this.fb.group({
      title: ['', [
        Validators.required
      ]],
      description: ['', [
        Validators.required
      ]],
      authorName: ['', [alphaNumericValidator]],
      authors: this.fb.array([this.createEmailFormGroup()]),
      duration: ['', [
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
