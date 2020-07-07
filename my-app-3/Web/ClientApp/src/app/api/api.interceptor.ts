import { Injectable, Injector } from "@angular/core";
import { HttpInterceptor, HttpHandler, HttpEvent, HttpRequest, HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

  constructor(private injector: Injector) {
    // use injector to inject services
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((err: HttpErrorResponse) => {
        if (err.status === 422) {
          alert(err.error.code + "\n"+ err.error.description);
        }
        else if (err.error) {
          alert("The following error was returned: \n" + err.error.title);
        }
        return [];
      })
    );
  }
}
