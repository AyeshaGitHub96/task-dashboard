// src/app/services/auth.service.ts
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private afAuth: AngularFireAuth) {}

  loginWithEmail(email: string, password: string): Observable<User | null> {
    return this.afAuth.signInWithEmailAndPassword(email, password).then((userCredential) => {
      return userCredential.user;
    });
  }

  logout(): Promise<void> {
    return this.afAuth.signOut();
  }

  getCurrentUser(): Observable<User | null> {
    return this.afAuth.authState;
  }
}
