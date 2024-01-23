import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { inject } from "@angular/core";
import { Observable, catchError, throwError } from "rxjs";
import { UserAuthService } from "../_services/user-auth.service";
import { Router } from "@angular/router";

export class AuthInterceptor implements HttpInterceptor {
    private userAuthSerce = inject(UserAuthService);
    private router = inject(Router);

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if(req.headers.get('No-Auth') === 'True') {
            return next.handle(req.clone());
        }

        const token = this.userAuthSerce.getToken();
        req = this.addToken(req, token !== null ? token : '');
        return next.handle(req).pipe(
            catchError(
                (err: HttpErrorResponse) => {
                    console.log(err.status);
                    if(err.status === 401) {
                        this.router.navigate(['/login']);
                    }
                    else if(err.status == 403) {
                        this.router.navigate(['/forbidden']);
                    }
                    return throwError("Some thing is wrong.");
                }
            )
        );
    }
    
    private addToken(request: HttpRequest<any>, token:string) {
        return request.clone({
            setHeaders : {
                Authorization: `Bearer ${token}`
            }
        });
    }
}