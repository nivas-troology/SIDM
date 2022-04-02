import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpService } from 'src/app/shared/services/http.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  adminLogin: FormGroup
  submitted: boolean = false;
  constructor(private formBuilder: FormBuilder,
    private httpService: HttpService,
    private snackBar: MatSnackBar,
    private toast: ToastrService,
    private router: Router) {
    this.adminLogin = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  ngOnInit(): void {

  }

  onSubmit() {
    if (this.adminLogin.valid) {
    this.httpService.adminlogin({
      'email': this.adminLogin.value.email,
      'password': this.adminLogin.value.password
    }).subscribe(data => {
      this.router.navigate(['/adminDashboard'])
      this.toast.success('Admin Successfully login!');
      this.snackBar.open('Successfully login', 'close', {
        duration: 1500
      })
    }, (err: Error) => {
      this.toast.error('User does not exist');
    })
    }
    else {
      this.submitted = true;
      this.toast.error('Please Fill Required Field');
    }
  }

}
