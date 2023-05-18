import { Component, OnInit } from '@angular/core';
import { LoginData } from 'src/assets/data/interface';
import { FetchService } from './data/fetch.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Quantum1';
  loginData!: LoginData;

  constructor() {
  }

  ngOnInit(): void {
  }
}
