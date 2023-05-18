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
  
  @Input()
  firstFormGroup!: FormGroup;

  constructor() {}

  // constructor(private _formBuilder: FormBuilder) {
  //   this.createForm();
  // }

  // createForm() {
  //   this.firstFormGroup = this._formBuilder.group({
  //     fName: ['', [Validators.required, Validators.minLength(4)]],
  //     lName: ['', [Validators.required, Validators.minLength(4)]],
  //     email: ['', [Validators.required, Validators.email]],
  //     number: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],

  //   });
  // }

  @Input()
  loginDetails!: LoginDetails;

  // @Output()
  // loginDetailsChange = new EventEmitter<LoginDetails>();

  ngOnInit(): void {
    
  }
  


}
