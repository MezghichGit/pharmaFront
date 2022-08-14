import { Component, OnInit } from '@angular/core';
import { CategorieService } from '../services/categorie.service';

@Component({
  selector: 'app-categorie-list',
  templateUrl: './categorie-list.component.html',
  styleUrls: ['./categorie-list.component.css']
})
export class CategorieListComponent implements OnInit {

  categories:any;
  constructor(private categorieService:CategorieService) { }
  ngOnInit(): void {
  this.categorieService.getAllCategorie().subscribe(
    data=>{
      this.categories = data;
      console.log(this.categories);
    }
  );
  }

}
