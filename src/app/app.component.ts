import { Component } from '@angular/core';
import Amplify, { Auth } from 'aws-amplify';
import { AwsCognitoAuthenticatedUserService } from './helper/services/AwsCognitoAuthenticatedUser/aws-cognito-authenticated-user.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private AwsCognitoAuthenticatedUserService: AwsCognitoAuthenticatedUserService) {
   // this.getMyTweets();
    this.checkForLogin();
  }


  async checkForLogin() {

  }

  /**
   * Fetching access token
   * And sending for request to get the data
   */
  async getMyTweets() {
    let accessToken = await this.AwsCognitoAuthenticatedUserService.getAuthenticatedUserToken();
    // this.socialTwitterService.getMySubscriptionList(accessToken).subscribe(tweets => {
    //   console.log(tweets);
    // })
  }
}
