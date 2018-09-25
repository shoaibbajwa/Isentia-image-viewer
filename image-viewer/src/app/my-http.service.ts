import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class MyHttpService {

  constructor(private http: HttpClient) { }

  get(url: String) {
    url = this.checkUrl(url);

    return this.http.get(this.getServerUrl() + url);
  }

  checkUrl(url: String) {
      if (!url.startsWith('/')) {
          return '/' + url;
      }
      return url;
  }

  getServerUrl() {
      return 'http://localhost:3000';
  }
}
