import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAddFormComponent } from './edit-add-form.component';

describe('EditAddFormComponent', () => {
  let component: EditAddFormComponent;
  let fixture: ComponentFixture<EditAddFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAddFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
