// https://scotch.io/@vigneshsithirai/angular-6-7-http-client-interceptor-with-error-handling
// Angular 6 & 7 HTTP Client Interceptor with Error handling
// added errorDialogService to handle error and show the error message for users

import { Injectable } from '@angular/core';
import { ErrorDialogService } from './errordialog.service';
import {
    HttpInterceptor,
    HttpRequest,
    HttpResponse,
    HttpHandler,
    HttpEvent,
    HttpErrorResponse
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {
    constructor(public errorDialogService: ErrorDialogService) { }

    // set the content type, accept type and token in API. This only handle the API request
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token: string = localStorage.getItem('token');

        if (token) {
            request = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + token) });
        }

        if (!request.headers.has('Content-Type')) {
            request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
        }

        request = request.clone({ headers: request.headers.set('Accept', 'application/json') });

        return next.handle(request).pipe(

          // handle each and every response from the API
            map((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                    console.log('event--->>>', event);
                    // this.errorDialogService.openDialog(event);
                }
                return event;
            }),

            // handle the error response
            catchError((error: HttpErrorResponse) => {
                let data = {};
                data = {
                    reason: error && error.error.reason ? error.error.reason : '',
                    status: error.status
                };
                this.errorDialogService.openDialog(data);
                return throwError(error);

            }));
    }
}
