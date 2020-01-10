import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {UserService} from './user.service';
import {catchError} from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  // @ts-ignore

  private object: { userId: null; token: null };
  // @ts-ignore
  intercept(req: HttpRequest<any>,
            next: HttpHandler): Observable<HttpEvent<any>> {

    const getToken = JSON.parse(localStorage.getItem('token'));
    if (getToken) {
      console.log(typeof getToken);
      const cloned = req.clone({
        headers: req.headers.set('Authorization', 'Bearer ' +  getToken),

      });

      return next.handle(cloned);
    } else {
      return next.handle(req);
    }
  }
  // intercept(req: HttpRequest<any>, next: HttpHandler) {
  //   console.log( 'Interception In Progress');
  //   this.object = JSON.parse(localStorage.getItem('token'));
  //   console.log(this.object.token);
  //   const token = this.object;
    // req = req.clone({ headers: req.headers.set('Authorization', 'Bearer ' + token) });
    // req = req.clone({ headers: req.headers.set('Content-Type', 'application/json') });
    // req = req.clone({ headers: req.headers.set('Accept', 'application/json') });
    // console.log(req);
    // return next.handle(req);
      // .pipe(
      //   catchError((error: HttpErrorResponse) => {
      //     if (error && error.status === 401) {
      //       console.log('ERROR 401 UNAUTHORIZED');
      //     }
      //     const err = error.error.message || error.statusText;
      //     return throwError(error);
      //   })
      // );
  }

// }
