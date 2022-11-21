import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  validateLogin = (moreData:any) => {
    if(moreData && moreData.email == 'demouser@gmail.com' && moreData.password == '12345' ){
      localStorage.setItem('user',moreData);
    }
  };

  getGitUsers = (moreData:any): Observable<any> => {
    const endpoint = environment.backendUrl;
    return this.http.get(endpoint, moreData)
      .pipe(catchError((err) => {
          return throwError(err);
        })
      );
  };

  getSingleUser = (moreData:any): Observable<any> => {
    const endpoint = environment.backendUrl+'/'+moreData.username;
    return this.http.get(endpoint, moreData.username)
      .pipe(catchError((err) => {
          return throwError(err);
        })
      );
  };
}
