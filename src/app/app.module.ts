import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateAccountComponent } from './create-account/create-account.component';
import { MatStepperModule } from '@angular/material/stepper';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { LoginPageComponent } from './login-page/login-page.component';
import { MatInputModule } from '@angular/material/input';
import { PersonalInformationComponent } from './create-account/personal-information/personal-information.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { QualificationComponent } from './create-account/qualification/qualification.component';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import {MatRadioModule} from '@angular/material/radio';
import { ReviewComponent } from './create-account/review/review.component';
import { ApplicantSideComponent } from './applicant-side/applicant-side.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateAccountComponent,
    LoginPageComponent,
    PersonalInformationComponent,
    QualificationComponent,
    ReviewComponent,
    ApplicantSideComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    CdkAccordionModule,
    MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
