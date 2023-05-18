import { Component, Input } from '@angular/core';
import { EduQualificationDetails } from 'src/app/common/edu-qualification-details';
import { LoginDetails } from 'src/app/common/login-details';
import { ProQualificationDetails } from 'src/app/common/pro-qualification-details';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent {

  @Input()
  loginDetails!: LoginDetails;

  @Input()
  eduDetails!: EduQualificationDetails;

  @Input()
  proDetails!: ProQualificationDetails;

  // loginDetails: LoginDetails = new LoginDetails("John",
  //                                               "Watson",
  //                                               "john.watson@example.com",
  //                                               9876543210,
  //                                               "www.myportfolio.in",
  //                                               ["Software Quality Engineer", "Software Engineer", "Instructional Designer"],
  //                                               "",
  //                                               true);
}
