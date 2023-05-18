import { Component, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { LoginDetails } from '../common/login-details';
import { EduQualificationDetails } from '../common/edu-qualification-details';
import { ProQualificationDetails } from '../common/pro-qualification-details';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CreateAccountComponent implements OnInit{

  // firstFormGroup!: FormGroup;
  // secondFormGroup!: FormGroup;
  isEditable = true;
  createDisabled = true;
  
  formValid = true;
  @ViewChild('stepper') stepper!: MatStepper;

  onFormValidityChanged(valid: boolean) {
    this.formValid = valid;
    console.log(this.formValid);
  }

  constructor() {}
  
  isButtonDisabled(): boolean {
    const currentIndex = this.stepper ? this.stepper.selectedIndex : 0;
    return currentIndex === 0 || currentIndex === 1;
  }

  createProfile() {
    console.log("clicked");
  }

  loginDetails: LoginDetails = new LoginDetails(
    "",
    "",
    "",
    0,
    "",
    [
      {name: 'Software Quality Engineer', selected: false}, 
      {name: "Software Engineer", selected: false}, 
      {name: "Instructional Designer", selected: false}
    ],
    "",
    false
  );

  eduDetails: EduQualificationDetails = new EduQualificationDetails(
    0,
    {
      "na": "NA",
      "2023": "2023",
      "2022": "2022",
      "2021": "2021"
    },
    "na",
    {
      "na": "NA",
      "bTech": "Bachelor of Technology (BTech)",
      "bca": "Bachelor's in Computer Application",
      "mca": "Master's in Computer Application"
    },
    "na",
    {
      "na": "NA",
      "ce": "Computer Engineering",
      "it": "Information Technology",
      "ai": "Artificial Intelligence",
      "ml": "Machine Learning"
    },
    "na",
    {
      "na": "NA",
      "gmit": "G.M.I.T",
      "gec": "G.E.C.",
      "bvm": "B.V.M."
    },
    "na",
    "",
    ""
  );

  proDetails: ProQualificationDetails = new ProQualificationDetails(
    {
      "fresher": "Fresher",
      "experienced": "Experienced"
    },
    "experienced",
    0,
    "",
    "",
    [
      {name: 'JavaScript', selected: false}, 
      {name: "Angular JS", selected: false}, 
      {name: "React", selected: false},
      {name: "Node JS", selected: false},
      {name: "Others", selected: false}
    ],
    "",
    [
      {name: 'JavaScript', selected: false}, 
      {name: "Angular JS", selected: false}, 
      {name: "React", selected: false},
      {name: "Node JS", selected: false},
      {name: "Others", selected: false}
    ],
    "",
    ["Yes", "No"],
    "No",
    "",
    {
      "na": "NA",
      "1m": "1 Month",
      "2m": "2 Months",
      "3m": "3 Months",
      "4m": "4 Months",
      "5m": "5 Months",
      "6m": "6 Months",
      "7m": "7 Months",
      "8m": "8 Months",
      "9m": "9 Months",
      "10m": "10 Months",
      "11m": "11 Months",
      "12m": "12 Months"
    },
    "na",
    ["Yes", "No"],
    "No",
    ""
  );

  // constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    // this.firstFormGroup = this._formBuilder.group({
    //   firstCtrl: ['', Validators.required]
    // });

    // this.secondFormGroup = this._formBuilder.group({
    //   secondCtrl: ['', Validators.required]
    // });
  }

  // loginDetails: LoginDetails = new LoginDetails(
  //   "John",
  //   "Watson",
  //   "john.watson@example.com",
  //   9876543210,
  //   "www.myportfolio.in",
  //   [
  //     {name: 'Software Quality Engineer', selected: true}, 
  //     {name: "Software Engineer", selected: false}, 
  //     {name: "Instructional Designer", selected: false}
  //   ],
  //   "",
  //   true
  // );
}
