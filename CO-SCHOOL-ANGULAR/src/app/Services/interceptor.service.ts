import { JwtDto } from './../Models/dto/Jwt';
import { Injectable } from "@angular/core";
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class InterceptorAuth implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const storedJwtData = localStorage.getItem('jwtData');
        if (storedJwtData) {
            const jwtData: JwtDto = JSON.parse(storedJwtData);
            const token = jwtData.token;
            console.log("----------> " + token);

            if (token) {
                const cloned = req.clone({
                    setHeaders: {
                        Authorization: `Bearer ${token}`
                    }
                });
                return next.handle(cloned);
            }
        }

        return next.handle(req);
    }
}
