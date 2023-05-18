import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginDetails } from 'src/app/common/login-details';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PersonalInformationComponent implements OnInit{
  
  @Input()
  loginDetails!: LoginDetails;

  @Output()
  loginDetailsChange = new EventEmitter<LoginDetails>();

  @Output()
  formValidityChanged = new EventEmitter<boolean>();
  heroForm!: FormGroup;

  onFormValueChange() {
    this.formValidityChanged.emit(this.heroForm.valid);
  }

  ngOnInit(): void {
    
  }
  


}
