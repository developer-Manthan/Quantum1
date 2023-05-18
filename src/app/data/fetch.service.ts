import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginData } from 'src/assets/data/interface';

@Injectable({
  providedIn: 'root'
})
export class FetchService {

  private loginDataURL: string;

  constructor(private http: HttpClient) {
    this.loginDataURL = "../../assets/data/cardText.json";
    console.log(this.loginDataURL);
  }

  getLoginData(): Observable<LoginData> {
    return this.http.get<LoginData>(this.loginDataURL);
  }
}
