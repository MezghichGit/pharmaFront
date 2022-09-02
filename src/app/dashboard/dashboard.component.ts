import { Component, OnInit } from '@angular/core';
import jwt_decode from 'jwt-decode';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }
  nom:string;
  prenom:string;
  tel:string;
  adresse:string;
  ngOnInit(): void {

    let data = jwt_decode(sessionStorage.getItem("token"));
    this.nom = data['nom'];
    this.prenom = data['prenom'];
    this.tel = data['tel'];
    this.adresse = data['adresse'];
  }

}
