import { Component } from '@angular/core';
import { OnChanges } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnChanges {
colorBtnLogin: string = "success"
ngOnChanges(){
  console.log(this.colorBtnLogin)
  }
}
