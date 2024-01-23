import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Endpoints } from '../_constants/endpoints';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  BASE_URL = 'http://localhost:9090';
  requestHeaders = new HttpHeaders(
    {"No-Auth": "True"}
  );

  constructor(private httpclient: HttpClient) { }

  public login(loginData: any) {
    let url = this.BASE_URL + Endpoints.AUTHENTICATE;
    let body = {
      "userName": loginData.value.userName,
      "userPassword": loginData.value.userPassword
  };
    return this.httpclient.post(url, body, { headers: this.requestHeaders });
  }
}
