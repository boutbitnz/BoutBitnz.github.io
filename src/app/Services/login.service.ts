import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import 'rxjs/operator/map';

@Injectable()
export class LoginService {

    constructor(private http: HttpClient) { }

    login(data: { email?: string; password?: string; }) {
        data = { email: 'boutbitnz2@gmail.com', password: 'Test@123' };
        return this.http.post('https://localhost:4200/api/login', data);
    }

    getCustomerDetails() {
        return this.http.get('https://localhost:4200/customers/details');
    }

}
