import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  
  constructor() {}

  getToken(): string | null {
    const jwtData = localStorage.getItem('jwtData');
    if (jwtData) {
      const parsedData = JSON.parse(jwtData);
      return parsedData.token; 
    }
    return null;
  }

  isLoggedIn(): boolean {
    return this.getToken() !== null;
  }
}
