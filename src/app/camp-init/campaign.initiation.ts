import {Component, OnInit, Input, NgModule} from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import {FormGroup, FormControl, Validators, ValidationErrors, ReactiveFormsModule, FormsModule} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './campaign.initiation.html'
//  styleUrls: ['./home.component.scss']
})

export class CampaignInitiation implements OnInit {

  //@Input() user: any = {};
  public cityList = [];

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    // init this.user on startup
    /*    this.authService.me().subscribe(data => {
     this.user = data.user;
     });*/

    let cityLst = this.authService.getCities().subscribe(data => {
      this.cityList = data["data"];
    });

  }

  userForm = new FormGroup({
    village: new FormControl('', [Validators.required]),
    campaignDate: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email])
  })

  get village(): any { return this.userForm.get('village'); }
  get campaignDate(): any { return this.userForm.get('campaignDate'); }
  get city(): any { return this.userForm.get('city'); }
  get email(): any { return this.userForm.get('email'); }

  initiateCampaign(): void {
    this.authService.login(this.email,"")
      .subscribe(data => {
        this.router.navigate(['']);
      })
  }

  /*  date
   region
   location
   no. of kids
   */
}
