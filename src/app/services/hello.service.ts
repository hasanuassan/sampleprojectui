// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable({ providedIn: 'root' })
// export class HelloService {
//   private baseUrl = 'http://localhost:5006/hello';

//   constructor(private http: HttpClient) {}

//   getHello(name: string): Observable<string> {
//     return this.http.get(`${this.baseUrl}/${name}`, { responseType: 'text' });
//   }
// }

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class HelloService {
    private apiUrl = 'http://localhost:5006/hello';

    constructor(private http: HttpClient) { }

    getHello(): Observable<string> {
      return this.http.get(`${this.apiUrl}/world`, { responseType: 'text' });
    }
}
