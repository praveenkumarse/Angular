import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GlobalService {
  public apiUrl = "http://localhost:3000"
  constructor(public http: Http) { }

  public postRequest(url, data) {
    return this.http.post(url, data)
      .map(res => {
        return res.json()
      })
  }

}
