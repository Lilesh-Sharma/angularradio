import { Component} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  abc = new FormGroup({

    FirstName: new FormControl('',[Validators.required,Validators.minLength(4),Validators.maxLength(8)]),
    LastName: new FormControl('',[Validators.required,Validators.minLength(4),Validators.maxLength(8)]),
  });
  istest=true;
  istest1=true;
  istest2=true;
  login(){
    this.istest = false;
  }
  login1(){
    this.istest = false;
    this.istest1=false;
  }
  login2(){
    this.istest=false;
    this.istest2 = false;
  }
}