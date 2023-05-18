import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EduQualificationDetails } from 'src/app/common/edu-qualification-details';
import { ProQualificationDetails } from 'src/app/common/pro-qualification-details';

@Component({
  selector: 'app-qualification',
  templateUrl: './qualification.component.html',
  styleUrls: ['./qualification.component.scss']
})
export class QualificationComponent implements OnInit{
  
  items = ['Educational Qualifications', 'Professional Qualifications'];
  expandedIndex = 0;

  @Input()
  eduDetails!: EduQualificationDetails;

  @Output()
  eduDetailsChange = new EventEmitter<EduQualificationDetails>();

  @Input()
  proDetails!: ProQualificationDetails;

  @Output()
  proDetailsChange = new EventEmitter<ProQualificationDetails>();

  ngOnInit(): void {
  
  }
}
