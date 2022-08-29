import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  lienImage="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/640px-Angular_full_color_logo.svg.png";
  nom:string="Formulaire d'inscription";
  isHidden=false;
  constructor() { }

  ngOnInit(): void {
  }

  welcome()
  {
    //alert("Hello Chez Pharma");
    this.isHidden = !this.isHidden;
  }

}
