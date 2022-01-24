import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  form = new FormGroup({
    name:  new FormControl('',
      [Validators.required]
    ),
    email: new FormControl('',{
      validators: [
        Validators.required,
        Validators.minLength(6)
      ]
    }),
    password: new FormControl('',{
      validators: [Validators.required]
    })
  });


  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
  }

  get name(): any {
    return this.form.get('name');
  }

  get email(): any {
    return this.form.get('email');
  }

  get password(): any {
    return this.form.get('password');
  }

}
