import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder, private router: Router) {
  }

  loginGroup = this.fb.group({
    password: ['', Validators.required]
  });

  ngOnInit(): void {
    console.log(this.formatDate());
  }
  showError = false;

  formatDate() {
    let d = new Date(Date.now()),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2)
      month = '0' + month;
    if (day.length < 2)
      day = '0' + day;

    return [year, month, day].join('');
  }

  login() {
    if (this.loginGroup.controls.password.value == this.formatDate()) {
      sessionStorage.setItem('logged', 'true');
      this.router.navigate(['']);
    } else {
      this.showError = true;
    }
  }

}
