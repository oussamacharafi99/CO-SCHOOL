import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { JwtDto } from 'src/app/Models/dto/Jwt';
import { Role } from 'src/app/Models/enums/enum';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    
    const storedJwtData = localStorage.getItem('jwtData');
    
    if (storedJwtData) {
      const jwtData: JwtDto = JSON.parse(storedJwtData);
      const token = jwtData.token;
      

      if (token) {
        const decodedToken: any = jwtDecode(token);
        
        const expectedRole = route.data['role'] as Role;
        const userRoles = decodedToken.roles;

        if (userRoles && userRoles.includes(Role[expectedRole])) {
          return true; 
        }
      }
    }

    this.router.navigate(['error']);
    return false;
  }
}
