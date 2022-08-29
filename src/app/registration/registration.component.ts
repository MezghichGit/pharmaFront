import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../services/registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  lienImage="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/640px-Angular_full_color_logo.svg.png";
  nom:string="Formulaire d'inscription";
  isHidden=false;
  constructor(private registrationService:RegistrationService) { }

  ngOnInit(): void {
  }

  welcome()
  {
    //alert("Hello Chez Pharma");
    this.isHidden = !this.isHidden;
  }


  inscription(myform:any){
    let user = {
      "email":myform.value.email,
      "password":myform.value.password,
      "roles":["ROLE_USER"]
    };
    this.registrationService.createUser(user).subscribe(
      data =>{
        console.log(data)
      }
    );
    //console.log(myform.value);
  }

}
