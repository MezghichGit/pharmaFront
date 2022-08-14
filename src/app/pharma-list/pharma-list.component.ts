import { Component, OnInit } from '@angular/core';
import { PharmaService } from '../services/pharma.service';

@Component({
  selector: 'app-pharma-list',
  templateUrl: './pharma-list.component.html',
  styleUrls: ['./pharma-list.component.css']
})
export class PharmaListComponent implements OnInit {

  pharmacies:any;
  constructor(private pharmaService:PharmaService) { }

  ngOnInit(): void {
    this.pharmaService.getAllPharma().subscribe(
      data =>{
        this.pharmacies = data;
        console.log(this.pharmacies);
      }
    );
  }

}
