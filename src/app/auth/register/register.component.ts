import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, ValidationErrors } from '@angular/forms';
import {AuthService} from '../auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../auth.component.scss']
})


export class RegisterComponent implements OnInit {

  public cityList = [];

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    let cityLst = this.authService.getCities().subscribe(data => {
      this.cityList = data["data"];
    });
  }

  passwordsMatchValidator(control: FormControl): ValidationErrors {
    let password = control.root.get('password');
    return password && control.value !== password.value ? {
      passwordMatch: true
    }: null;
  }

  userForm = new FormGroup({
    firstname: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    age: new FormControl('', []),
    profession: new FormControl('', []),
    city: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    repeatPassword: new FormControl('', [Validators.required, this.passwordsMatchValidator])
  })

  get firstname(): any { return this.userForm.get('firstname'); }
  get lastname(): any { return this.userForm.get('lastname'); }
  get age(): any { return this.userForm.get('age'); }
  get profession(): any { return this.userForm.get('profession'); }
  get city(): any { return this.userForm.get('city'); }
  get email(): any { return this.userForm.get('email'); }
  get password(): any { return this.userForm.get('password'); }
  get repeatPassword(): any { return this.userForm.get('repeatPassword'); }

  register() {
    if(!this.userForm.valid) return;

    let {
      firstname,
      lastname,
      age,
      profession,
      city,
      email,
      password,
      repeatPassword
    } = this.userForm.getRawValue();

    this.authService.register(firstname, lastname, age, profession, city, email, password, repeatPassword)
    .subscribe(data => {
      this.router.navigate(['']);
    })
  }
}
