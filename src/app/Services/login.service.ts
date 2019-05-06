// LogIn API Customer detail API

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import 'rxjs/operator/map';

@Injectable()
export class LoginService {

    constructor(private http: HttpClient) { }

    // Added the function to call two API's
    login(data: { email?: string; password?: string; }) {
        data = { email: 'boutbitnz2@gmail.com', password: 'em1evol' };
        return this.http.post('http://localhost:4200/api/login', data);
    }

    // login(data) {
    //   data = { email: 'admin', password: 'admin' };
    //   return this.http.post('http://localhost:3070/api/login', data);
    // }

    getCustomerDetails() {
        return this.http.get('http://localhost:4200/customers/details');
    }

    // getCustomerDetails() {
    //   return this.http.get('http://localhost:3070/customers/details');
    // }

}
