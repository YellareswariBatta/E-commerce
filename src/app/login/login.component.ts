import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  sampleForm: FormGroup | any;
  usersList : any =[];
  email="";
  constructor(private formBuilder:FormBuilder,private service:LoginService) { }

  ngOnInit(): void {
    this.sampleForm = this.formBuilder.group({
      email:['',Validators.required],
      pass :['',Validators.required]
    })

    this.service.getUsers().subscribe(res=>{
      this.usersList = res;
    })

  }
  get f() { return this.sampleForm.controls; }
  onSubmit(){
    let body={
      
      "email":this.f.email.value,
      "pass":this.f.pass.value
    }
    this.service.login(body).subscribe(res=>{
      window.alert('login success');
      this.sampleForm.reset();
    })
  }

}
