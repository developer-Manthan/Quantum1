import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginDetails } from 'src/app/common/login-details';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PersonalInformationComponent implements OnInit{
  
  firstFormGroup!: FormGroup;

  constructor(private _formBuilder: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.firstFormGroup = this._formBuilder.group({
      fName: ['', [Validators.required, Validators.minLength(4)]],
      lName: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required]]
    });
  }

  @Input()
  loginDetails!: LoginDetails;

  @Output()
  loginDetailsChange = new EventEmitter<LoginDetails>();

  ngOnInit(): void {
    
  }
  


}
