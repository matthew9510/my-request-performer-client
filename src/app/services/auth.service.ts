import { Injectable } from '@angular/core';
import { Auth } from 'aws-amplify';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '@ENV';
import { AmplifyService } from 'aws-amplify-angular';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  performerCurrentCredentials: any;
  performerAuthState: any;
  performerSub: string;
  signedIn = false;
  user: any;
  greeting: string;

  constructor(private http: HttpClient, private amplifyService: AmplifyService) {
    this.amplifyService.authStateChange$
      .subscribe(authState => {
        this.signedIn = authState.state === 'signedIn';
        if (!authState.user) {
          this.user = null;
        } else {
          console.log(authState.user);
          this.user = authState.user;
          this.greeting = 'Hello ' + this.user.username;
        }
      });
  }

  logout() {
    localStorage.clear();
    Auth.signOut()
      .then(data => console.log(data))
      .catch(err => console.log(err));

    // // By doing this, you are revoking all the auth tokens(id token, access token and refresh token)
    // // which means the user is signed out from all the devices
    // // Note: although the tokens are revoked, the AWS credentials will remain valid until they expire (which by default is 1 hour)
    // Auth.signOut({ global: true })
    //   .then(data => console.log(data))
    //   .catch(err => console.log(err));
  }

  login(authState: any) {
    this.signedIn = authState.state === 'signedIn';

    // store performer logged in authState
    this.performerAuthState = authState.user;
    localStorage.setItem('performerAuthState', JSON.stringify(this.performerAuthState));

    // store performer sub
    this.performerSub = this.performerAuthState.attributes.sub;
    localStorage.setItem('performerSub', this.performerSub);

    // this.performerJwt = this.performerAuthState.signInUserSession.idToken.jwtToken
    localStorage.setItem('performerJwt', this.performerAuthState.signInUserSession.idToken.jwtToken);

    // store performer credentials
    Auth.currentCredentials()
      .then((data) => {
        this.performerCurrentCredentials = data;
        localStorage.setItem('performerCurrentCredentials', JSON.stringify(this.performerCurrentCredentials));
      })
      .catch(err => console.log(err));
  }

  isAuthenticated() {
    // tslint:disable-next-line:max-line-length
    // This method can be used to check if a user is logged in when the page is loaded. It will throw an error if there is no user logged in.
    return Auth.currentAuthenticatedUser({
      // tslint:disable-next-line:max-line-length
      bypassCache: false  // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
    });
  }

  testEvent() {
    const headers = {
      headers: new HttpHeaders({
        Authorization: localStorage.getItem('performerJwt'),
        // 'Content-Type':  'application/json',
      })
    };
    return this.http.get(environment.eventsUrl, headers);
  }

  testRequestsEvent() {
    const headers = {
      headers: new HttpHeaders({
        Authorization: localStorage.getItem('performerJwt'),
      })
    };
    return this.http.get(environment.requestsUrl, headers);
    //  new HttpParams().set('id', "0e92fd10-5830-11ea-a2c3-cd4ac5ac6751"),
  }

  createHeader() {
    const headers = new HttpHeaders().set('Authorization', localStorage.getItem('performerJwt'));
    console.log(headers);
    return headers;
  }

}
